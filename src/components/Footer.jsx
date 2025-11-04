import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* ====== Newsletter Section ====== */}
      <div className="newsletter">
        <h2>
          SUBSCRIBE OUR <span>NEWSLETTER</span>
        </h2>
        <div className="newsletter-input">
          <input type="email" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="error-msg">This field is required.</div>
      </div>

      {/* ====== Main Footer Content ====== */}
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About US</h3>
          <p>
            SchoolAura Smart Education Platform is a step towards making learning better and effective for the students and help to achieving their goals.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>Benefits</li>
            <li>Blogs</li>
            <li>Testimonials</li>
            <li>Features</li>
          </ul>
        </div>

        <div className="footer-section help">
          <h3>Help & Support</h3>
          <ul>
            <li>Services</li>
            <li>Support</li>
            <li>Terms & condition</li>
            <li>Privacy Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <hr className="divider" />

      {/* ====== Contact Info ====== */}
      <div className="contact-info">
        <div className="contact-box">
          <FaPhoneAlt className="icon" />
          <div>
            <h4>CaLL US</h4>
            <p>+91-9540349392</p>
          </div>
        </div>

        <div className="contact-box">
          <FaEnvelope className="icon" />
          <div>
            <h4>MAIL US</h4>
            <p>contact@schoolaura.com</p>
          </div>
        </div>

        <div className="contact-box">
          <FaMapMarkerAlt className="icon" />
          <div>
            <h4>Office Address</h4>
            <p>
              E 44/3, Pocket D, Okhla Phase II, Okhla Industrial Area, New Delhi, Delhi 110020, India
            </p>
          </div>
        </div>
      </div>

      {/* ====== Copyright ====== */}
      <div className="footer-bottom">
        <p>2021 © SchoolAura. All Right Reserved</p>
        <p>
          Design & Development by <a href="#">Insoftlink Software</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
