/* eslint-disable no-undef */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const next = {};
    if (!name.trim()) next.name = 'Name is required.';
    if (!email.trim()) {
      next.email = 'Email address is required.';
    } else {
      const emailOk = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email.trim());
      if (!emailOk) next.email = 'Please enter a valid email address.';
    }
    if (!subject.trim()) next.subject = 'Subject is required.';
    if (!message.trim()) next.message = 'Message is required.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await emailjs.send(
        // eslint-disable-next-line no-undef
        process.env.REACT_APP_EMAILJS_SERVICE,
        process.env.REACT_APP_EMAILJS_TEMPLATE,
        {
          name,
          email,
          subject,
          message,
          to_email: 'mosiathabangephraim2@gmail.com',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC
      );
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setErrors({});
    } catch (err) {
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <div className="contact-container">
      <div className="section-heading">Contact</div>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-label">Primary Email</div>
          <div className="contact-value">
            <a
              className="contact-link"
              href="mailto:mosiathabangephraim2@gmail.com"
            >
              mosiathabangephraim2@gmail.com
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label">Alternative Email</div>
          <div className="contact-value">
            <a className="contact-link" href="mailto:54607949@mynwu.ac.za">
              54607949@mynwu.ac.za
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-label">Mobile</div>
          <div className="contact-value">+27717814859</div>
        </div>
      </div>

      <div className="form-heading">Contact Me</div>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <div className="error-message">{errors.email}</div>
            )}
          </div>
        </div>
        <div className="form-row single">
          <div className={`form-group ${errors.subject ? 'invalid' : ''}`}>
            <label>Subject</label>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <div className="error-message">{errors.subject}</div>
            )}
          </div>
        </div>
        <div className="form-row single">
          <div className={`form-group ${errors.message ? 'invalid' : ''}`}>
            <label>Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <div className="error-message">{errors.message}</div>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Send
          </button>
        </div>
        {sent && (
          <div className="confirm">
            Message sent! I will get back to you shortly.
          </div>
        )}
        {errors.submit && <div className="error-message">{errors.submit}</div>}
      </form>
    </div>
  );
}

export default Contact;
