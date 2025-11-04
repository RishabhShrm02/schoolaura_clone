import React from "react";
import "./WeAreSpreading.css";
import girlImg from "../assets/girl.png"; // 👈 yahan apni image import karo

const WeAreSpreading = () => {
  return (
    <section className="spreading-section">
      <div className="spreading-container">
        {/* Left Side Image */}
        <div className="left-img">
          <div className="bg-box dark"></div>
          <div className="bg-box light"></div>
          <img src={girlImg} alt="Student" className="main-img" />
        </div>

        {/* Right Side Content */}
        <div className="right-content">
          <h2>
            <span className="blue-text">WE</span> <br />
            <span className="orange-text">ARE SPREADING</span>
          </h2>
          <div className="underline"></div>

          <div className="stats-grid">
            <div className="stat-item fade1">
              <i className="fa-solid fa-graduation-cap"></i>
              <h3>108+</h3>
              <p>Happy School</p>
            </div>
            <div className="stat-item fade2">
              <i className="fa-solid fa-user-graduate"></i>
              <h3>58030+</h3>
              <p>Students</p>
            </div>
            <div className="stat-item fade3">
              <i className="fa-solid fa-people-group"></i>
              <h3>5360+</h3>
              <p>Happy Parents</p>
            </div>
            <div className="stat-item fade4">
              <i className="fa-solid fa-chalkboard-user"></i>
              <h3>10+</h3>
              <p>Happy Tutors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreSpreading;
