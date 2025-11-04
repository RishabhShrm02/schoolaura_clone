import React, { useState } from "react";
import "./LoginBox.css";

const LoginBox = () => {
  const [activeTab, setActiveTab] = useState("student");

  return (
    <div className="login-box">
      <div className="tab-buttons">
        <button
          className={activeTab === "student" ? "active" : ""}
          onClick={() => setActiveTab("student")}
        >
          Student
        </button>
        <button
          className={activeTab === "parent" ? "active" : ""}
          onClick={() => setActiveTab("parent")}
        >
          Parent
        </button>
      </div>

      {activeTab === "student" ? (
        <form className="login-form">
          <h3>Student Login</h3>
          <input type="text" placeholder="Student ID / Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
          <a href="#" className="forgot">Forgot Password?</a>
        </form>
      ) : (
        <form className="login-form">
          <h3>Parent Login</h3>
          <input type="text" placeholder="Parent ID / Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="login-btn">Login</button>
          <a href="#" className="forgot">Forgot Password?</a>
        </form>
      )}
    </div>
  );
};

export default LoginBox;
