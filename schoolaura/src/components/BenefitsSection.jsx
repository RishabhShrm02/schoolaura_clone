import React from "react";
import "./BenefitsSection.css";
import { FaTasks, FaEye, FaLink, FaArrowRight } from "react-icons/fa";
import { AiFillFileText } from "react-icons/ai";
import { FaInfo } from "react-icons/fa6";

const BenefitsSection = () => {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">
        BENEFITS OF SCHOOLAURA <br />
        <span>FOR STUDENT</span>
      </h2>

      <div className="benefits-grid">
        <div className="benefit-card">
          <FaTasks className="benefit-icon" />
          <h3>Task Activities</h3>
          <p>
            Daily assignments and tasks can be easily completed through online
            availability of information. Subject wise homework can be submitted
            online which helps students to finish their tasks online.
          </p>
        </div>

        <div className="benefit-card">
          <AiFillFileText className="benefit-icon" />
          <h3>Exam Results</h3>
          <p>
            Exam and assessment results of each individual student can be seen.
            The report cards will be generated online for each individual
            student.
          </p>
        </div>

        <div className="benefit-card">
          <FaInfo className="benefit-icon" />
          <h3>Notice Updates</h3>
          <p>
            The necessary announcements and updates will reach to the students
            and parents quickly.
          </p>
        </div>

        <div className="benefit-card">
          <FaEye className="benefit-icon" />
          <h3>Monitoring</h3>
          <p>
            All the essential academic and administrative tasks can be easily
            monitored, such as students profile, exam results, fee details,
            transportation details etc.
          </p>
        </div>

        <div className="benefit-card">
          <FaLink className="benefit-icon" />
          <h3>Connectivity</h3>
          <p>
            When all the information is available online, and is shared
            regularly with parents and students transparency will be maintained.
          </p>
        </div>

        <div className="benefit-card">
          <FaArrowRight className="benefit-icon" />
          <h3>Planning & Sharing</h3>
          <p>
            It becomes important nowadays for students to share their thoughts
            and ideas. SchoolAura Smart Education Platform will provide you a
            perfect stage to showcase and share your brilliant ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
