import React from "react";
import "./VisitCampus.css";

const VisitCampus = () => {
  return (
    <section className="visit-section">
      <div className="visit-container">
        {/* Left Side - Video */}
        <div className="video-side fade-left">
          <div className="video-frame">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              title="Campus Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-side fade-right">
          <h2>
            VISIT OUR CAMPUS <br />
            WITH <span className="highlight">IMAGE GALLERY</span>
          </h2>
          <div className="underline"></div>
          <p>
            Even slightly believable. If you are going use a passage of Lorem
            Ipsum need.
          </p>
          <h3>OR WATCH WITH VIDEO</h3>

          <div className="play-btn">
            <i className="fas fa-play"></i>
            <span>PLAY NOW</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitCampus;
