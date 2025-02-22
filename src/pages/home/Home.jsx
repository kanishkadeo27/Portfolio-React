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
            Hard-working and ambitious Frontend Developer with a strong
            career-oriented mindset and a passion for learning and innovation.
            Skilled in React.js, JavaScript, HTML and CSS, with experience in
            building responsive UI, state management, API integration, and
            performance optimization ensuring efficient development practices.
            Dedicated to transforming ideas into impactful solutions and eager
            to contribute to a dynamic organization.
          </p>
          <Link to="/about" className="button">
            Know More{" "}
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
