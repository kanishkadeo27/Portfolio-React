import React, { useState } from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaGithubSquare,
  FaHackerrank,
  FaNetworkWired,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_ltjux0u", // Replace with your EmailJS Service ID
        "template_3nfsjg6", // Replace with your EmailJS Template ID
        formData,
        "5Uvg5oqx6UxY9zO0O" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setSuccess(true);
          setLoading(false);
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
          setTimeout(() => setSuccess(false), 5000); // Hide success message after 5 seconds
        },
        (error) => {
          console.error("Failed to send email:", error);
          setError(true);
          setLoading(false);
          setTimeout(() => setError(false), 5000); // Hide error message after 5 seconds
        }
      );
  };
  return (
    <>
      <section className="contact section">
        <h2 className="section__title">
          Get In <span>Touch</span>
        </h2>

        <div className="contact__container container grid">
          <div className="contact__data">
            <h3 className="contact__title">Don't be Shy !</h3>
            <p className="contact__description">
              Feel free to get in touch with me. I am always open to discuss new
              projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            <div className="contact__info">
              <div className="info__item">
                <FaEnvelopeOpen className="info__icon" />
                <div>
                  <span className="info__title">Mail Me:</span>
                  <h4 className="info__description">
                    kanishkadeo27012002@gmail.com
                  </h4>
                </div>
              </div>
              <div className="info__item">
                <FaPhoneSquareAlt className="info__icon" />
                <div>
                  <span className="info__title">Call me:</span>
                  <h4 className="info__description">+916264547523</h4>
                </div>
              </div>
            </div>
            <div className="contact__socials">
              <a
                href="https://www.hackerrank.com/profile/kanishkadeo92022"
                className="contact__social__link"
              >
                <FaHackerrank />
              </a>
              <a
                href="https://app.netlify.com/teams/kanishkadeo27-cps7jci/sites"
                className="contact__social__link"
              >
                <FaNetworkWired />
              </a>
              <a
                href="https://github.com/kanishkadeo27"
                className="contact__social__link"
              >
                <FaGithubSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/kanishka-deo-077280201/"
                className="contact__social__link"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  className="form__control"
                  placeholder="Your Name..."
                  required
                  value={formData?.name}
                />
              </div>
              <div className="form__input-div">
                <input
                  name="email"
                  onChange={handleChange}
                  value={formData?.email}
                  type="email"
                  className="form__control"
                  placeholder="Your Email..."
                  required
                />
              </div>
              <div className="form__input-div">
                <input
                  name="subject"
                  onChange={handleChange}
                  value={formData?.subject}
                  required
                  type="text"
                  className="form__control"
                  placeholder="Your Subject..."
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                name="message"
                onChange={handleChange}
                value={formData?.message}
                required
                className="form__control textarea"
                placeholder="Your Message..."
              ></textarea>
            </div>

            <button className="button" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
            {success && (
              <p className="success-message">Message sent successfully!</p>
            )}
            {error && (
              <p className="error-message">
                Failed to send message. Try again!
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
