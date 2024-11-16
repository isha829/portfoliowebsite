import React, { useState, useEffect } from 'react';
import './ContactData.css'; 

const ContactData = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    
    const fetchContacts = async () => {
      const response = await fetch('http://localhost:5000/api/contact');
      const data = await response.json();
      setContacts(data);
    };

    fetchContacts();
  }, []);

  return (
    <div className="contact-data">
      <h2>Contact Form Submissions</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date Submitted</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>{new Date(contact.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactData;
