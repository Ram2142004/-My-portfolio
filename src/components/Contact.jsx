import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Phone,
  Smartphone,
  Send,
  Github,
  Linkedin,
  FileText,
  CheckCircle,
  Copy,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMessage) setErrorMessage('');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_oiridp7';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if EmailJS template & key are configured
    if (!templateId || !publicKey) {
      setIsSubmitting(false);
      setErrorMessage(
        'EmailJS Service (service_oiridp7) is connected! To complete sending, please configure your Template ID and Public Key in your .env file.'
      );
      return;
    }

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
        message: formData.message,
        to_name: personalInfo.fullName,
        to_email: personalInfo.email
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setIsSubmitting(false);
      setSubmitted(true);

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback gracefully
      }
    } catch (err) {
      console.error('EmailJS send error:', err);
      setIsSubmitting(false);
      setErrorMessage(
        `Failed to send email via EmailJS (${err?.text || err?.message || 'Error occurred'}). Please try again or use direct email.`
      );
    }
  };

  return (
    <section id="contact" className="py-5 position-relative">
      <div className="container py-4">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Let's Connect</span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have a full-time Data Analyst opportunity, an analytics project, or want to discuss data strategy, my inbox and phone are always open!
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="row g-5">
          {/* Left Column: Direct Contact Details & Socials */}
          <div className="col-lg-5">
            <div className="card-glass p-4 p-md-5 h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="fs-4 fw-bold font-heading mb-3 text-high-contrast-title">
                  Let's Discuss Opportunities
                </h3>
                <p className="text-high-contrast-body small mb-4" style={{ lineHeight: '1.7' }}>
                  I'm actively seeking <strong>Data Analyst</strong>, <strong>Business Intelligence</strong>, <strong>SQL/Python Analytics</strong>, or related data roles. I look forward to contributing my technical skills and dedication to your analytics organization.
                </p>

                {/* Contact List */}
                <div className="d-flex flex-column gap-3 mb-4">
                  {/* Email */}
                  <div className="contact-item-box">
                    <div className="d-flex align-items-center gap-3 min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="contact-logo-box" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(99, 102, 241, 0.25) 100%)', border: '1px solid rgba(59, 130, 246, 0.45)', color: '#60a5fa' }}>
                        <Mail size={22} />
                      </div>
                      <div className="min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="text-high-contrast-muted fw-bold" style={{ fontSize: '0.74rem', letterSpacing: '0.7px' }}>EMAIL ADDRESS</div>
                        <a href={`mailto:${personalInfo.email}`} className="fw-bold small text-decoration-none text-break d-block" style={{ color: 'var(--accent-color)', fontSize: '0.92rem' }}>
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="btn btn-sm btn-outline-secondary py-1.5 px-2.5 border-0 text-high-contrast-muted flex-shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? <CheckCircle size={18} className="text-success" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* Mobile / Phone */}
                  <div className="contact-item-box">
                    <div className="d-flex align-items-center gap-3 min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="contact-logo-box" style={{ background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.25) 100%)', border: '1px solid rgba(6, 182, 212, 0.45)', color: '#38bdf8' }}>
                        <Smartphone size={22} />
                      </div>
                      <div className="min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="text-high-contrast-muted fw-bold" style={{ fontSize: '0.74rem', letterSpacing: '0.7px' }}>MOBILE / PHONE</div>
                        <a href={`tel:${personalInfo.phone}`} className="text-info fw-bold small text-decoration-none text-break d-block" style={{ fontSize: '0.92rem' }}>
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyPhone}
                      className="btn btn-sm btn-outline-secondary py-1.5 px-2.5 border-0 text-high-contrast-muted flex-shrink-0"
                      title="Copy phone to clipboard"
                    >
                      {copiedPhone ? <CheckCircle size={18} className="text-success" /> : <Copy size={18} />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="contact-item-box">
                    <div className="d-flex align-items-center gap-3 min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="contact-logo-box" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(20, 184, 166, 0.25) 100%)', border: '1px solid rgba(16, 185, 129, 0.45)', color: '#34d399' }}>
                        <MapPin size={22} />
                      </div>
                      <div className="min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="text-high-contrast-muted fw-bold" style={{ fontSize: '0.74rem', letterSpacing: '0.7px' }}>LOCATION</div>
                        <div className="fw-bold small text-high-contrast-title" style={{ fontSize: '0.92rem' }}>{personalInfo.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Quick Chat */}
                  <a
                    href="https://wa.me/919843451530?text=Hi%20Ram,%20I%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item-box text-decoration-none text-reset transition-all"
                  >
                    <div className="d-flex align-items-center gap-3 min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                      <div className="contact-logo-box text-white flex-shrink-0" style={{ background: '#25D366', boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)' }}>
                        <MessageSquare size={22} />
                      </div>
                      <div className="min-w-0 flex-grow-1" style={{ minWidth: 0 }}>
                        <div className="text-high-contrast-muted fw-bold" style={{ fontSize: '0.74rem', letterSpacing: '0.7px' }}>INSTANT MESSAGING</div>
                        <div className="fw-bold small text-success text-break" style={{ fontSize: '0.92rem' }}>Chat on WhatsApp (+91 9843451530)</div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Resume & Social Footnote */}
              <div className="pt-3 border-top border-secondary border-opacity-15">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn"
                    title="LinkedIn"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-btn text-success"
                    title="Google Drive Resume"
                  >
                    <FileText size={18} />
                  </a>
                </div>
                <div className="small text-muted" style={{ fontSize: '0.78rem' }}>
                  Open for full-time Data Analyst positions across Bengaluru, Chennai, Hyderabad, and remote opportunities.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="col-lg-7">
            <div className="card-glass p-4 p-md-5 h-100">
              <h3 className="fs-4 fw-bold font-heading mb-2">Send a Message</h3>
              <p className="text-secondary small mb-4">
                Have a job opening or consulting inquiry? Fill out the form and I'll respond within 24 hours.
              </p>

              {submitted ? (
                <div className="alert alert-success border-0 rounded-4 p-4 text-center my-auto" style={{ background: 'rgba(16, 185, 129, 0.15)' }}>
                  <div className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-success text-white mb-3">
                    <CheckCircle size={32} />
                  </div>
                  <h4 className="fs-5 fw-bold text-success mb-2">Message Received!</h4>
                  <p className="text-secondary small mb-3">
                    Thank you for reaching out, {formData.name}. I'll review your note and respond to <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="btn btn-sm btn-outline-success px-4 py-2"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-secondary">
                        Your Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. John Doe"
                        className="form-input-custom"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-secondary">
                        Your Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="e.g. john@company.com"
                        className="form-input-custom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-secondary">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Data Analyst Opportunity at [Company]"
                      className="form-input-custom"
                    />
                  </div>

                  <div>
                    <label className="form-label small fw-semibold text-secondary">
                      Message <span className="text-danger">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Share project requirements, job description, or message..."
                      className="form-input-custom"
                      style={{ resize: 'vertical' }}
                    ></textarea>
                  </div>

                  {errorMessage && (
                    <div
                      className="alert alert-warning border-0 rounded-3 p-3 small d-flex flex-column gap-2"
                      style={{ background: 'rgba(245, 158, 11, 0.15)', border: '1px solid rgba(245, 158, 11, 0.3)' }}
                    >
                      <div className="d-flex align-items-start gap-2">
                        <AlertCircle size={18} className="text-warning flex-shrink-0 mt-0.5" />
                        <span className="text-high-contrast-title">{errorMessage}</span>
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent(`Hi Ram,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`}
                        className="btn btn-sm btn-outline-warning mt-1 text-decoration-none align-self-start py-1.5 px-3"
                      >
                        <Mail size={14} className="me-1.5" />
                        <span>Send directly via Email App</span>
                      </a>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow-primary justify-content-center py-3 mt-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
