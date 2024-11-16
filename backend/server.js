const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

// Contact Form Schema and Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model("Contact", contactSchema);

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Save contact data to MongoDB
  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    // Save the contact form data to MongoDB
    await newContact.save();

    // Create the transporter for sending email
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook)
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.PASSWORD, // Your email password or app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL, // The email where you want to receive messages
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully and data saved to the database!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email or saving data.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
