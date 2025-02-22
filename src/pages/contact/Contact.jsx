import React from "react";

import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedinIn,
  FaGithubSquare,
  FaHackerrank,
  FaNetworkWired,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import "./contact.css";
const Contact = () => {
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

          <form className="contact__form">
            <div className="form__input-group">
              <div className="form__input-div">
                <input
                  type="text"
                  className="form__control"
                  placeholder="Your Name..."
                />
              </div>
              <div className="form__input-div">
                <input
                  type="email"
                  className="form__control"
                  placeholder="Your Email..."
                />
              </div>
              <div className="form__input-div">
                <input
                  type="text"
                  className="form__control"
                  placeholder="Your Subject..."
                />
              </div>
            </div>

            <div className="form__input-div">
              <textarea
                className="form__control textarea"
                placeholder="Your Message..."
              ></textarea>
            </div>

            <button className="button">
              Send Message
              <span className="button__icon contact__button-icon">
                <FiSend />
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
