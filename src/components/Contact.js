import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaTerminal, FaCode } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);

    fetch('https://formspree.io/f/xjkobegq', {
      method: 'POST',
      body: formDataToSend,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then((response) => {
      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSuccess(false);
      }
    })
    .catch((error) => {
      setSuccess(false);
    })
    .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let's collaborate on something amazing</p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="code-header">
              <span className="code-keyword">const</span> <span className="code-string">contactInfo</span> = {'{'}
            </div>
            
            <h3>Ready to Build Together?</h3>
            <p>
              I'm always excited about new opportunities, interesting projects, and meaningful collaborations. 
              Whether you want to discuss a project, share ideas, or just say hello, I'd love to hear from you!
            </p>
            
            <div className="code-block">
              <div className="code-comment">// Contact Information</div>
              <div><span className="code-keyword">email</span>: <span className="code-string">"dsathvik204@gmail.com"</span>,</div>
              <div><span className="code-keyword">phone</span>: <span className="code-string">"+91 7396484816"</span>,</div>
              <div><span className="code-keyword">location</span>: <span className="code-string">"India"</span>,</div>
              <div><span className="code-keyword">availability</span>: <span className="code-string">"Open to opportunities"</span></div>
              {'}'}
            </div>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>dsathvik204@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>+91 7396484816</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-text">
                  <h4>Location</h4>
                  <p>India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <div className="form-header">
              <FaCode className="form-icon" />
              <h3>Send Message</h3>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              {success === true && (
                <div className="success-message">Message sent successfully!</div>
              )}
              {success === false && (
                <div className="error-message">Failed to send message. Please try again.</div>
              )}
              <button type="submit" className="btn btn-primary submit-btn" disabled={sending}>
                <FaPaperPlane />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 