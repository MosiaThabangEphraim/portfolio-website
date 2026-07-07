/* eslint-disable no-undef */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('');
  const [documentRequests, setDocumentRequests] = useState([]);
  const [documentOtherSpecify, setDocumentOtherSpecify] = useState('');
  const [otherSpecify, setOtherSpecify] = useState('');
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
    if (subject === 'Request Documents' && documentRequests.length === 0) {
      next.documentRequests = 'Please select at least one document.';
    }
    if (
      subject === 'Request Documents' &&
      documentRequests.includes('Other') &&
      !documentOtherSpecify.trim()
    ) {
      next.documentOtherSpecify = 'Please specify what document you need.';
    }
    if (subject === 'Other (Specify)' && !otherSpecify.trim()) {
      next.otherSpecify = 'Please specify the subject.';
    }
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
          contactNumber,
          company,
          subject,
          documentRequests: documentRequests.join(', '),
          documentOtherSpecify,
          otherSpecify,
          message,
          to_email: 'mosiathabangephraim2@gmail.com',
        },
        process.env.REACT_APP_EMAILJS_PUBLIC
      );
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      setName('');
      setEmail('');
      setContactNumber('');
      setCompany('');
      setSubject('');
      setDocumentRequests([]);
      setDocumentOtherSpecify('');
      setOtherSpecify('');
      setMessage('');
      setErrors({});
    } catch (err) {
      setErrors({
        submit: `Failed to send message. Error: ${err.text || err.message || 'Unknown error'}`,
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="section-heading">Contact</div>

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-label">Email</div>
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
          <div className="contact-label">Contact Number</div>
          <div className="contact-value">+27717814859</div>
        </div>
      </div>

      <div className="form-heading">Contact Me</div>
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="form-row">
          <div className={`form-group ${errors.name ? 'invalid' : ''}`}>
            <label>Name *</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className={`form-group ${errors.email ? 'invalid' : ''}`}>
            <label>Email Address *</label>
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
        <div className="form-row">
          <div className="form-group">
            <label>Contact Number (Optional)</label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Company (Optional)</label>
            <input
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>
        <div className="form-row single">
          <div className={`form-group ${errors.subject ? 'invalid' : ''}`}>
            <label>Subject *</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-invalid={!!errors.subject}
            >
              <option value="">Select a subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Internship / Graduate Opportunity">
                Internship / Graduate Opportunity
              </option>
              <option value="Request Documents">Request Documents</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other (Specify)">Other (Specify)</option>
            </select>
            {errors.subject && (
              <div className="error-message">{errors.subject}</div>
            )}
          </div>
        </div>
        {subject === 'Request Documents' && (
          <div
            className={`form-row single ${errors.documentRequests ? 'invalid' : ''}`}
          >
            <div className="form-group">
              <label>Select Documents *</label>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="CV"
                    checked={documentRequests.includes('CV')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDocumentRequests([...documentRequests, 'CV']);
                      } else {
                        setDocumentRequests(
                          documentRequests.filter((item) => item !== 'CV')
                        );
                      }
                    }}
                  />
                  CV
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="Academic Transcript"
                    checked={documentRequests.includes('Academic Transcript')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDocumentRequests([
                          ...documentRequests,
                          'Academic Transcript',
                        ]);
                      } else {
                        setDocumentRequests(
                          documentRequests.filter(
                            (item) => item !== 'Academic Transcript'
                          )
                        );
                      }
                    }}
                  />
                  Academic Transcript
                </label>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    value="Other"
                    checked={documentRequests.includes('Other')}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setDocumentRequests([...documentRequests, 'Other']);
                      } else {
                        setDocumentRequests(
                          documentRequests.filter((item) => item !== 'Other')
                        );
                      }
                    }}
                  />
                  Other (Specify)
                </label>
              </div>
              {errors.documentRequests && (
                <div className="error-message">{errors.documentRequests}</div>
              )}
              {documentRequests.includes('Other') && (
                <div
                  className={`form-group ${errors.documentOtherSpecify ? 'invalid' : ''}`}
                >
                  <label>Please Specify *</label>
                  <input
                    value={documentOtherSpecify}
                    onChange={(e) => setDocumentOtherSpecify(e.target.value)}
                    aria-invalid={!!errors.documentOtherSpecify}
                  />
                  {errors.documentOtherSpecify && (
                    <div className="error-message">
                      {errors.documentOtherSpecify}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
        {subject === 'Other (Specify)' && (
          <div
            className={`form-row single ${errors.otherSpecify ? 'invalid' : ''}`}
          >
            <div className="form-group">
              <label>Please Specify *</label>
              <input
                value={otherSpecify}
                onChange={(e) => setOtherSpecify(e.target.value)}
                aria-invalid={!!errors.otherSpecify}
              />
              {errors.otherSpecify && (
                <div className="error-message">{errors.otherSpecify}</div>
              )}
            </div>
          </div>
        )}
        <div className="form-row single">
          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Submit
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
