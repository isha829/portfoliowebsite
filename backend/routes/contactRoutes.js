const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');


router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({
    name,
    email,
    message,
  });

  try {
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit contact form.' });
  }
});


router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch contact data.' });
  }
});

module.exports = router;
