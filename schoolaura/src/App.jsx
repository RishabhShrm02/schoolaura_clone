import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OnlineSolution from "./components/OnlineSolution";
import TutorSolution from "./pages/TutorSolution";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import MobileAppSection from "./components/MobileAppSection";
import EducationBenefitsSection from "./components/EducationBenefitsSection"; 
import WeAreSpreading from "./components/WeAreSpreading";
import VisitCampus from "./components/VisitCampus";
import ParentSays from "./components/ParentSays";
import BestEducation from "./components/BestEducation";


function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSection />
      <OnlineSolution />
      <BestEducation />
      <BenefitsSection />
      <MobileAppSection />
      <EducationBenefitsSection />
      <WeAreSpreading />
      <VisitCampus />
      <ParentSays />
      
      
      
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exam-solution" element={<ExamSolution />} />
          <Route path="/online-study" element={<OnlineStudy />} />
          <Route path="/tutor-solution" element={<TutorSolution />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

      
      <Footer />
      </>
    
  );
}

export default App;
