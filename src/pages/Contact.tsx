import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration from config file
      const { serviceId, templateId, publicKey, toEmail } = emailConfig;

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: toEmail,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Sorry, there was an error sending your message. Please try again..');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch</h1>
        <p>Have questions about AgroAIPod? We'd love to hear from you and help you start your smart farming journey.</p>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="technical-support">Technical Support</option>
                <option value="partnership">Partnership Opportunities</option>
                <option value="media">Media & Press</option>
                <option value="general">General Questions</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-cards">
            <div className="info-card">
              <h3>📧 Email Us</h3>
              <p>
                General Inquiries: jithinjose2025@gmail.com<br/>
                {/* Support: support@agroaipod.com<br/>
                Press: media@agroaipod.com */}
              </p>
            </div>

            <div className="info-card">
              <h3>📞 Call Us</h3>
              <p>
                {/* Sales: +1 (555) 123-4567<br/> */}
                Support: +91 8111875561<br/>
                {/* Toll-free: 1-800-AGROAI */}
              </p>
            </div>

            <div className="info-card">
              <h3>📍 Visit Us</h3>
              <p>
                AgroAI Headquarters<br/>
                Kerala , India<br/>
                {/* Silicon Valley, CA 94105<br/>
                United States */}
              </p>
            </div>
          </div>

          {/* <div className="office-hours">
            <h3>⏰ Office Hours</h3>
            <ul className="hours-list">
              <li>
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM PST</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>10:00 AM - 4:00 PM PST</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div> */}

          {/* <div className="social-links">
            <a href="https://twitter.com/agroaipod" className="social-link" aria-label="Twitter">
              🐦
            </a>
            <a href="https://facebook.com/agroaipod" className="social-link" aria-label="Facebook">
              📘
            </a>
            <a href="https://instagram.com/agroaipod" className="social-link" aria-label="Instagram">
              📷
            </a>
            <a href="https://linkedin.com/company/agroaipod" className="social-link" aria-label="LinkedIn">
              💼
            </a>
            <a href="https://youtube.com/agroaipod" className="social-link" aria-label="YouTube">
              📺
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
