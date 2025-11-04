import React from "react";
import "./EducationBenefitsSection.css";
import manImg from "../assets/man.png"; // replace with your image

const EducationBenefitsSection = () => {
  return (
    <section className="benefits-section">
      <div className="benefits-content">
        <div className="left-side">
          <h2>
            <span className="black-text">Benefits of </span>
            <span className="orange-text">Online Education</span>
          </h2>
          <div className="underline"></div>

          <p>
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>

          <ul>
            <li>Time and Location Flexibility</li>
            <li>Find Unlimited Course Category</li>
            <li>No Need to Carry Books</li>
            <li>Get Access in any mobile, Tab, Laptop with your credential</li>
            <li>Use your time when you are traveling, Outing and free time</li>
            <li>Exam Practice before exam</li>
          </ul>
        </div>

        <div className="right-side">
          <img src={manImg} alt="Happy Student" />
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-item">
          <h3>10000+</h3>
          <p>Total Exams</p>
        </div>
        <div className="stat-item">
          <h3>600+</h3>
          <p>Courses</p>
        </div>
        <div className="stat-item">
          <h3>3000+</h3>
          <p>Success Stories</p>
        </div>
        <div className="stat-item">
          <h3>4.5/5</h3>
          <p>Rating</p>
        </div>
      </div>
    </section>
  );
};

export default EducationBenefitsSection;
