import React from "react";
import "./OnlineSolution.css";
import students from "../assets/students.png";

const OnlinSolution = () => {
  return (
    <section className="online-section">
      <div className="online-container">
        {/* LEFT BLUE BOX */}
        <div className="blue-box">
          <ul>
            <li>- 256 Courses</li>
            <li>- Expert Teachers</li>
            <li>- Online Education</li>
          </ul>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="text-content">
          <h2>Why Online Study With SchoolAura</h2>
          <p>
            The world is changing for the better. Because of the advancement of
            technology, geek minds have grown tired of doing more work, and
            carrying books, notebooks and how much to buy books?
          </p>
          <p>
            <strong>Solution:</strong> Now you can find a simple solution with
            schoolaura. In these days almost everyone has a Smartphone, Tab or
            Laptop. So just open your device and start your study from anywhere
            anytime while you are travelling, sitting in the park, and etc.
          </p>
          <p>
            Now use your time and gain knowledge in every second and use your
            device for right things not for waste your time.
          </p>
        </div>
      </div>

      {/* STUDENT IMAGE BELOW CONTENT */}
      <div className="online-image">
        <img src={students} alt="students" />
      </div>
    </section>
  );
};

export default OnlinSolution;
