import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-intro">
        We'd love to hear from you! Whether you have a question about our products, need assistance,
        or just want to give feedback — feel free to reach out.
      </p>

      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Store Information</h3>
          <p><strong>Kurtha Kouture</strong></p>
          <p>123 Fashion Street, Kochi, Kerala</p>
          <p>Email: support@kurthakouture.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Business Hours: Mon - Sat, 10AM - 7PM</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
