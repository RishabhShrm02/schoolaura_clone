import React from "react";
import "./ParentSays.css";

const ParentSays = () => {
  const testimonials = [
    {
      name: "Varun Kasyap",
      location: "Uttar Pradesh",
      image: "https://i.pravatar.cc/150?img=12",
      text: "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!",
    },
    {
      name: "Vishal Kumar",
      location: "Delhi",
      image: "https://i.pravatar.cc/150?img=32",
      text: `"My daughter used to despise math, but now she can confidently take math tests." She's become enamoured with math, which is fantastic! Thank You School Aura for your tremendous support.`,
    },
    {
      name: "Ravi Kaushal",
      location: "Indore, Madhya Pradesh",
      image: "https://i.pravatar.cc/150?img=23",
      text: `Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer."`,
    },
    {
      name: "Rasmi Panday",
      location: "Delhi",
      image: "https://i.pravatar.cc/150?img=45",
      text: `I have seen my son go from hating math to absolutely loving it. His marks have improved so much from last year. He looks forward to attending math sessions taken by .... Thank you, School Aura, for making math so much fun for my child! :)`,
    },
  ];

  return (
    <section className="parent-section">
      <h2 className="section-title">
        WHAT <span>PARENT SAYS</span>
      </h2>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="profile">
              <img src={item.image} alt={item.name} />
              <div className="info">
                <h3>{item.name}</h3>
                <p className="location">{item.location}</p>
              </div>
            </div>
            <p className="feedback">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="indicator">
        <span className="active"></span>
        <span></span>
      </div>
    </section>
  );
};

export default ParentSays;
