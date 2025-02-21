import React from "react";
import Profile from "../../assets/home_2.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";
const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Kanishka Deo.</span>
            <br />
            Frontend Developer
          </h1>
          <p className="home__description">
            I am a hard-working and ambitious individual with a strong
            career-oriented mindset, always eager to learn and embrace
            innovative ideas to achieve positive outcomes. With a proven ability
            to transform client concepts into aesthetically pleasing and
            functional designs, I thrive on challenges and strive to deliver
            exceptional results. My dedication to continuous learning and
            improvement fuels my passion for turning ideas into impactful
            solutions.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home;
