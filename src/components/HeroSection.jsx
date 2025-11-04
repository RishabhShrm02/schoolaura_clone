import React, { useState } from "react";
import "./HeroSection.css";
import userIcon from "../assets/hero-student.png"; // your login avatar image

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <section className="hero-section">
      <div className="hero-inner">
        {/* Left side */}
        <div className="hero-left">
          <h1>
            BE A <span>SMART STUDENT</span>
          </h1>
          <p className="subtext">SchoolAura Is A Smart Education Platform</p>

          <div className="solutions-row">
            <div className="solution-box">
              <h3>
                ENTERANCE <br /> Solution
              </h3>
              <button className="exam-btn">Exam</button>
              <button className="course-btn">Courses</button>
              <p className="read-more">READ MORE ➜</p>
            </div>

            <div className="solution-box">
              <h3>
                COMPETITIVE <br /> Solution
              </h3>
              <button className="exam-btn">Exam</button>
              <button className="course-btn">Courses</button>
              <p className="read-more">READ MORE ➜</p>
            </div>

            <div className="solution-box">
              <h3>
                KG - 12<sup>TH</sup> <br /> SCHOOL
              </h3>
              <button className="exam-btn">Exam</button>
              <button className="course-btn">Courses</button>
              <p className="read-more">READ MORE ➜</p>
            </div>

            <div className="solution-box">
              <h3>
                TUTOR <br /> SOLUTION
              </h3>
              <button className="exam-btn">Find Tutors</button>
              <button className="course-btn">Become Tutor</button>
              <p className="read-more">READ MORE ➜</p>
            </div>
          </div>
        </div>

        {/* Right side login */}
        <div className="hero-login">
          <img src={userIcon} alt="User" className="login-avatar" />
          <div className="login-tabs">
            <span
              className={activeTab === "student" ? "active-tab" : ""}
              onClick={() => setActiveTab("student")}
            >
              Student Login
            </span>
            <span
              className={activeTab === "parent" ? "active-tab" : ""}
              onClick={() => setActiveTab("parent")}
            >
              Parents Login
            </span>
          </div>

          <div className="login-form">
            <input type="text" placeholder="Mobile Number or Key" />
            <div className="password-field">
              <input type="password" placeholder="Student Password" />
              <i className="fa fa-eye-slash"></i>
            </div>
            <button className="login-btn">Login</button>
          </div>

          <div className="login-links">
            <a href="#">Forgot Password</a>
            <a href="#">Create Account</a>
          </div>
        </div>
      </div>

      {/* Wavy white bottom */}
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
      >
        <path
          fill="#fff"
          fillOpacity="1"
          d="M0,64L60,69.3C120,75,240,85,360,74.7C480,64,600,32,720,26.7C840,21,960,43,1080,64C1200,85,1320,107,1380,117.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default HeroSection;
