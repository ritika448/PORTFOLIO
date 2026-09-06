import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import './ContactMe.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://portfolio-backend-s832.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact error:', err);
      setStatus('error');
    } finally {
      setTimeout(() => setStatus(''), 5000);
    }
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="section-padding"
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="hero-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info-wrapper">
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Let's talk!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: '1.7' }}>
              I am actively seeking full-time opportunities and strategic freelance engagements. 
              With a strong foundation in the MERN stack and a passion for crafting efficient, 
              scalable digital solutions, I am dedicated to delivering exceptional value. 
              Let's connect to discuss how my expertise can align with your vision.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.6)',
                  padding: '1rem',
                  borderRadius: '50%',
                  color: 'var(--primary)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Email</h4>
                  <p style={{ fontWeight: '600' }}>bhangaderitika80@gmail.com</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.6)',
                  padding: '1rem',
                  borderRadius: '50%',
                  color: 'var(--primary)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Phone</h4>
                  <p style={{ fontWeight: '600' }}>+91 76948 71571</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  background: 'rgba(255,255,255,0.6)',
                  padding: '1rem',
                  borderRadius: '50%',
                  color: 'var(--primary)',
                  border: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Location</h4>
                  <p style={{ fontWeight: '600' }}>Indore, India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form-wrapper">
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea
                name="message"
                className="form-textarea"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
              ></textarea>
            </div>
            <button
              className="btn-primary"
              disabled={status === 'sending'}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.8rem',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer'
              }}
            >
              {status === 'sending' ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  SENDING...
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={18} />
                  MESSAGE SENT!
                </>
              ) : status === 'error' ? (
                <>
                  <AlertCircle size={18} />
                  FAILED! TRY AGAIN
                </>
              ) : (
                <>
                  <Send size={18} />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
