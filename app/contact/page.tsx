'use client'

import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      // Success
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again later.')
      console.error('Error submitting form:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">Get in Touch - We're Here to Help</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about studying abroad? Need assistance with visa applications? 
                Our team is ready to help you every step of the way.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <h3>Phone</h3>
                  <p>Office: 76000 92449</p>
                  <p>Office: 70414 15851</p>
                  <p>Dhruval Brahmbhatt: 8490892700</p>
                  <p>Gunjan Brahmbhatt: 9898968745</p>
                </div>

                <div className="address-cards-wrapper">
                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <h3>Office 1</h3>
                    <p>B-109, Joyos Hubtown,</p>
                    <p>Modhera Circle,</p>
                    <p>Mehsana - 384001</p>
                  </div>

                  <div className="info-card">
                    <div className="info-icon">📍</div>
                    <h3>Office 2</h3>
                    <p>810, Satyamev Eminence</p>
                    <p>B/S. Saptak Bungalows</p>
                    <p>Science City Road, Sola</p>
                    <p>Ahmedabad - 380060</p>
                  </div>
                </div>

                <div className="info-card">
                  <div className="info-icon">🏢</div>
                  <h3>Branches</h3>
                  <p>Mehsana, Ahmedabad, Unjha,</p>
                  <p>Visnagar, Patan</p>
                </div>
              </div>

              <div className="office-hours">
                <h3>Office Hours</h3>
                <p>Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              {submitted ? (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                  <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '10px' }}>
                    A confirmation email has been sent to your inbox.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  {error && (
                    <div className="error-message">
                      <span className="error-icon">⚠️</span>
                      <span>{error}</span>
                    </div>
                  )}
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
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
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="student-visa">Student Visa</option>
                      <option value="work-visa">Work Visa</option>
                      <option value="visitor-visa">Visitor Visa</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="map-section section">
        <div className="container">
          <h2 className="section-title">Visit Our Office</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">📍</div>
              <h3>B-109, Joyos Hubtown, Modhera Circle</h3>
              <p>810, Satyamev Eminence, B/S. Saptak Bungalows, Science City Road, Sola, Ahmedabad - 380060</p>
              <p>For more information, visit our office</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
