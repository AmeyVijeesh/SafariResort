'use client';
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './style.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
  });

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3,
      }
    );

    // Form animation
    gsap.fromTo(
      formRef.current,
      { opacity: 0, x: -40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      }
    );

    // Info animation
    gsap.fromTo(
      infoRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.6,
      }
    );
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <>
      <div className="contactPage">
        <div className="contactHero" ref={heroRef}>
          <h1 className="contactTitle">Begin Your Journey</h1>
          <p className="contactSubtitle">
            Request rates and availability for your bespoke safari experience
          </p>
        </div>

        <div className="contactContent">
          <div className="contactForm" ref={formRef}>
            <h2 className="formTitle">Request Pricing</h2>
            <form onSubmit={handleSubmit}>
              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="formInput"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="formInput"
                    required
                  />
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="formInput"
                  />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Number of Guests *</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="formInput"
                    required
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="formRow">
                <div className="formGroup">
                  <label className="formLabel">Check-In Date *</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="formInput"
                    required
                  />
                </div>
                <div className="formGroup">
                  <label className="formLabel">Check-Out Date *</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="formInput"
                    required
                  />
                </div>
              </div>

              <div className="formGroup">
                <label className="formLabel">
                  Special Requests or Questions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="formTextarea"
                  rows="5"
                  placeholder="Tell us about your ideal safari experience..."
                ></textarea>
              </div>

              <button type="submit" className="formButton">
                Request Pricing
              </button>
            </form>
          </div>

          <div className="contactInfo" ref={infoRef}>
            <div className="infoCard">
              <h3 className="infoTitle">Direct Inquiries</h3>
              <p className="infoText">
                For immediate assistance, our reservations team is available to
                discuss your bespoke safari.
              </p>
              <div className="infoDetail">
                <span className="infoLabel">Email</span>
                <a href="mailto:reservations@zarari.com" className="infoLink">
                  reservations@zarari.com
                </a>
              </div>
              <div className="infoDetail">
                <span className="infoLabel">Phone</span>
                <a href="tel:+254123456789" className="infoLink">
                  +254 123 456 789
                </a>
              </div>
            </div>

            <div className="infoCard">
              <h3 className="infoTitle">Location</h3>
              <p className="infoText">
                Zarari,
                <br />
                Okavango Delta,
                <br />
                Botswana
              </p>
            </div>

            <div className="infoCard">
              <h3 className="infoTitle">What to Expect</h3>
              <p className="infoText">
                Our team will respond within 24 hours with a tailored proposal
                including rates, availability, and personalized recommendations
                for your safari experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
