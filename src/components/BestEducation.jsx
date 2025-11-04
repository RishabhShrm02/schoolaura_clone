import React from "react";
import "./BestEducation.css";
import classImg from "../assets/class-icon.png"; // apni image daalna

const BestEducation = () => {
  return (
    <section className="education-section">
      <div className="education-header">
        <h2>
          PROVIDE <br />
          <span>BEST EDUCATIONAL</span>
        </h2>
      </div>

      <div className="education-container">
        <div className="sidebar">
          <div className="sidebar-item active">School</div>
          <div className="sidebar-item">Competitive</div>
          <div className="sidebar-item">Entrance</div>
          <div className="sidebar-item">Tutors</div>
        </div>

        <div className="class-grid">
          {[
            { title: "11th Class", count: "182+" },
            { title: "12th Class", count: "178+" },
            { title: "6th Class", count: "151+" },
            { title: "7th Class", count: "150+" },
            { title: "10th Class", count: "150+" },
            { title: "9th Class", count: "141+" },
            { title: "8th Class", count: "135+" },
            { title: "5th Class", count: "87+" },
          ].map((item, index) => (
            <div key={index} className="class-card">
              <img src={classImg} alt={item.title} />
              <div className="class-info">
                <h4>{item.title}</h4>
                <p>{item.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestEducation;
