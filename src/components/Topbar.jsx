import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <a href="tel:+917017635700" className="topbar-contact">
          <i className="fa-solid fa-phone"></i> +91-7017635700
        </a>
        <a href="mailto:info@schoolaura.com" className="topbar-contact">
          <i className="fa-solid fa-envelope"></i> info@schoolaura.com
        </a>
      </div>

      <div className="topbar-right">
        <button className="btn whatsapp-btn">
          <i className="fa-brands fa-whatsapp"></i> WhatsApp
        </button>
        <button className="btn mobile-btn">
          <i className="fa-solid fa-mobile-screen"></i> Mobile App
        </button>
        <button className="btn login-btn">
          <i className="fa-solid fa-right-to-bracket"></i> Login
        </button>
        <button className="btn register-btn">
          <i className="fa-solid fa-user-plus"></i> Register
        </button>
      </div>
    </div>
  );
};

export default Topbar;
