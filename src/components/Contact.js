import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => setFormData({ ...formData, [event.target.name]: event.target.value });
  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);
    setSuccess(null);
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => payload.append(key, value));
    try {
      const response = await fetch('https://formspree.io/f/xjkobegq', { method: 'POST', body: payload, headers: { Accept: 'application/json' } });
      if (!response.ok) throw new Error('Message could not be sent');
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSuccess(false);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-heading"><p className="mono eyebrow">07 / OPEN CHANNEL</p><h2>LET'S<br /><em>BUILD</em><br />SOMETHING<span>.</span></h2><p>Open to internships, software opportunities, and interesting projects.</p></div>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Sathvik Dandu</h3>
            <div className="contact-details">
              <a className="contact-item" href="mailto:dsathvik204@gmail.com"><span className="contact-icon"><FaEnvelope /></span><span className="contact-text"><strong>Email</strong><span>dsathvik204@gmail.com</span></span></a>
              <div className="contact-item"><span className="contact-icon"><FaMapMarkerAlt /></span><span className="contact-text"><strong>Location</strong><span>Hyderabad, India</span></span></div>
              <a className="contact-item" href="https://www.linkedin.com/in/sathvik-dandu/" target="_blank" rel="noopener noreferrer"><span className="contact-icon" aria-hidden="true">in</span><span className="contact-text"><strong>LinkedIn</strong><span>Connect with me</span></span></a>
            </div>
          </div>
          <div className="contact-form-container">
            <div className="form-header"><h3>Send a message</h3></div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group"><label htmlFor="contact-name">Name</label><input id="contact-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required /></div>
              <div className="form-group"><label htmlFor="contact-email">Email</label><input id="contact-email" type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required /></div>
              <div className="form-group"><label htmlFor="contact-subject">Subject</label><input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required /></div>
              <div className="form-group"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={handleChange} required /></div>
              {success === true && <p className="success-message" role="status">Message sent successfully.</p>}
              {success === false && <p className="error-message" role="alert">Message could not be sent. Please try again or email me directly.</p>}
              <button type="submit" className="btn btn-primary submit-btn" disabled={sending}><FaPaperPlane aria-hidden="true" />{sending ? 'Sending…' : 'Send message'}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
