// import Logo from "../../assets/logo.png";
import Logo from "../../assets/Logo.png";
import HeroSectionImg from "../../assets/hero-section.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaFire,
  FaShieldAlt,
  FaMapMarkedAlt,
  FaRoute,
  FaVideo,
  FaExclamationTriangle,
  FaClock,
  FaLink,
  FaChartLine,
  FaBell,
  FaSearchLocation,
  FaBrain,
  FaRunning,
  FaCheckCircle,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { MdSecurity, MdEmergency } from "react-icons/md";
import { BsCameraVideoFill } from "react-icons/bs";

import { FaReact } from "react-icons/fa";
import {
  SiOpencv,
  SiMongodb,
  SiRaspberrypi,
  SiFastapi,
  SiPytorch,
} from "react-icons/si";

import "./LandingPage.css";

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenuOpen(false);
  };

  return (
    <>
    {/* HEADER */}
      <header className="navbar">

        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
            <img src={Logo} alt="SafeGuard" />

            <div className="logo-text">
              <h2>
                Safe<span>Guard</span>

                <br />

                <p className="logo-subtitle">
                  Detect . Alert . Protect . Response
                </p>
              </h2>
            </div>

        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul>

            <li onClick={() => scrollToSection("home")}>
              Home
            </li>

            <li onClick={() => scrollToSection("problem")}>
              Problem
            </li>

            <li onClick={() => scrollToSection("solution")}>
              Solution
            </li>

            <li onClick={() => scrollToSection("features")}>
              Features
            </li>

            <li onClick={() => scrollToSection("technology")}>
              Technology
            </li>

            <li onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </li>

          </ul>
        </nav>

        <button
          className="signup-btn"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </header>


    {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-left">

          <div className="hero-badge">
            AI Powered Security Platform
          </div>

          <h1>
            AI-Powered <span>Threat</span>
            <br />
            & <span>Fire Detection</span> for
            <br />
            Public Spaces
          </h1>

          <p>
            Real-time monitoring, intelligent alerts, and emergency
            evacuation guidance powered by AI and IoT.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => navigate("/dashboard")}
            >
              Launch Dashboard
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("how-it-works")}
            >
              View Live Demo
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
            src={HeroSectionImg}
            alt="AI Surveillance"
          />

        </div>

      </section>


   {/* Problem section */}
      <section
        className="problem-section"
        id="problem"
      >

        <div className="section-title">

          <span className="section-label">
            THE PROBLEM
          </span>

          <h2>
            Traditional Security Systems
            <span> Are Not Enough</span>
          </h2>

          <p>
            Conventional surveillance systems are often reactive,
            disconnected, and heavily dependent on manual monitoring.
          </p>

        </div>


        <div className="problem-grid">

          <div className="problem-card">

            <div className="problem-icon icon-delay">
              <FaClock />
            </div>

            <h3>
              Delayed Response
            </h3>

            <p>
              Security teams may discover incidents too late,
              increasing the risk to people and property.
            </p>

          </div>


          <div className="problem-card">

            <div className="problem-icon icon-location">
              <FaSearchLocation />
            </div>

            <h3>
              Location Challenges
            </h3>

            <p>
              Finding the exact location of an incident across
              multiple cameras can be difficult.
            </p>

          </div>


          <div className="problem-card">

            <div className="problem-icon icon-system">
              <FaLink />
            </div>

            <h3>
              Separate Systems
            </h3>

            <p>
              Cameras, alerts, emergency systems, and maps often
              operate independently.
            </p>

          </div>


          <div className="problem-card">

            <div className="problem-icon icon-monitor">
              <FaVideo />
            </div>

            <h3>
              Manual Monitoring
            </h3>

            <p>
              Operators cannot continuously watch every camera
              and identify every threat manually.
            </p>

          </div>


          <div className="problem-card">

            <div className="problem-icon icon-risk">
              <MdEmergency />
            </div>

            <h3>
              High Cost & Risk
            </h3>

            <p>
              Manual security operations increase workload,
              response time, and operational risk.
            </p>

          </div>

        </div>

      </section>


      {/* SOLUTION  SECTION */}
      <section
        className="solution-section"
        id="solution"
      >

        <div className="section-title">

          <span className="section-label">
            OUR SOLUTION
          </span>

          <h2>
            Intelligent Security
            <span> In One Platform</span>
          </h2>

          <p>
            SafeGuard combines AI, computer vision, IoT,
            intelligent monitoring and emergency response
            into one unified security platform.
          </p>

        </div>


        <div className="solution-flow">

          <div className="solution-step">

            <div className="solution-icon solution-camera">
              <BsCameraVideoFill />
            </div>

            <h3>
              CCTV Cameras
            </h3>

            <p>
              Continuous video monitoring
            </p>

          </div>


          <FaArrowRight className="solution-arrow" />


          <div className="solution-step">

            <div className="solution-icon solution-ai">
              <FaBrain />
            </div>

            <h3>
              AI Processing
            </h3>

            <p>
              Intelligent threat detection
            </p>

          </div>


          <FaArrowRight className="solution-arrow" />


          <div className="solution-step">

            <div className="solution-icon solution-threat">
              <MdSecurity />
            </div>

            <h3>
              Threat Detection
            </h3>

            <p>
              Identify dangerous events
            </p>

          </div>


          <FaArrowRight className="solution-arrow" />


          <div className="solution-step">

            <div className="solution-icon solution-location">
              <FaMapMarkedAlt />
            </div>

            <h3>
              Localization
            </h3>

            <p>
              Locate incidents precisely
            </p>

          </div>


          <FaArrowRight className="solution-arrow" />


          <div className="solution-step">

            <div className="solution-icon solution-alert">
              <FaBell />
            </div>

            <h3>
              Alert & Response
            </h3>

            <p>
              Notify and respond instantly
            </p>

          </div>

        </div>


        <div className="solution-features">

          <span>
            <FaCheckCircle />
            Real-time Detection
          </span>

          <span>
            <FaCheckCircle />
            Precise Localization
          </span>

          <span>
            <FaCheckCircle />
            Instant Alerts
          </span>

          <span>
            <FaCheckCircle />
            Smart Evacuation
          </span>

          <span>
            <FaCheckCircle />
            Evidence Logging
          </span>

        </div>

      </section>

    {/* Features section */}
      <section
        className="features"
        id="features"
      >

        <div className="section-title">

          <span className="section-label">
            OUR FEATURES
          </span>

          <h2>
            Powerful Features
            <span> For Complete Safety</span>
          </h2>

          <p>
            SafeGuard provides intelligent tools for detecting,
            locating, monitoring and responding to security threats.
          </p>

        </div>


        <div className="features-grid">

          <div className="feature-card">

            <div className="feature-icon">
              <FaFire className="fire" />
            </div>

            <h3>
              Fire Detection
            </h3>

            <p>
              Detect fire in real-time and instantly notify
              security teams.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <MdSecurity className="weapon" />
            </div>

            <h3>
              Weapon Detection
            </h3>

            <p>
              Identify dangerous weapons using AI-powered
              object detection.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaRunning className="snatching" />
            </div>

            <h3>
              Snatching Detection
            </h3>

            <p>
              Detect suspicious snatching activities and
              generate immediate alerts.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaShieldAlt className="missing" />
            </div>

            <h3>
              Missing Child Detection
            </h3>

            <p>
              Assist security teams in locating missing
              children through intelligent monitoring.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <BsCameraVideoFill className="camera" />
            </div>

            <h3>
              Smart Monitoring
            </h3>

            <p>
              Monitor multiple CCTV cameras through one
              intelligent dashboard.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaMapMarkedAlt className="map" />
            </div>

            <h3>
              Threat Localization
            </h3>

            <p>
              Locate incidents using indoor maps and
              camera positioning.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaRoute className="route" />
            </div>

            <h3>
              Smart Evacuation
            </h3>

            <p>
              Generate safer evacuation routes during
              emergency situations.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaBell className="alert" />
            </div>

            <h3>
              Instant Alerts
            </h3>

            <p>
              Send real-time notifications to administrators
              and security staff.
            </p>

          </div>


          <div className="feature-card">

            <div className="feature-icon">
              <FaChartLine className="analytics" />
            </div>

            <h3>
              Evidence & Analytics
            </h3>

            <p>
              Analyze incidents, view historical events and
              generate detailed security reports.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT'S WORK SECTION */}
      <section
        className="how-it-works"
        id="how-it-works"
      >

        <div className="section-title">

          <span className="section-label">
            HOW IT WORKS
          </span>

          <h2>
            From Detection
            <span> To Protection</span>
          </h2>

          <p>
            SafeGuard follows a simple intelligent workflow
            to detect threats and support rapid emergency response.
          </p>

        </div>


        <div className="workflow">

          <div className="workflow-line"></div>


          <div className="workflow-step">

            <div className="workflow-number">
              01
            </div>

            <div className="workflow-icon workflow-monitor">
              <FaVideo />
            </div>

            <h3>
              Monitor
            </h3>

            <p>
              CCTV cameras continuously monitor
              the environment.
            </p>

          </div>


          <div className="workflow-step">

            <div className="workflow-number">
              02
            </div>

            <div className="workflow-icon workflow-analyze">
              <FaBrain />
            </div>

            <h3>
              Analyze
            </h3>

            <p>
              AI models analyze video streams
              in real-time.
            </p>

          </div>


          <div className="workflow-step">

            <div className="workflow-number">
              03
            </div>

            <div className="workflow-icon workflow-detect">
              <FaExclamationTriangle />
            </div>

            <h3>
              Detect
            </h3>

            <p>
              Threats such as fire, weapons and
              suspicious activity are detected.
            </p>

          </div>


          <div className="workflow-step">

            <div className="workflow-number">
              04
            </div>

            <div className="workflow-icon workflow-alert">
              <FaBell />
            </div>

            <h3>
              Alert
            </h3>

            <p>
              Security teams receive instant
              alerts with incident details.
            </p>

          </div>


          <div className="workflow-step">

            <div className="workflow-number">
              05
            </div>

            <div className="workflow-icon workflow-response">
              <FaRoute />
            </div>

            <h3>
              Respond
            </h3>

            <p>
              SafeGuard helps teams take action
              with localization and evacuation guidance.
            </p>

          </div>

        </div>

      </section>


      {/* ==================================================
          TECHNOLOGIES
      ================================================== */}

      <section
        className="technologies"
        id="technology"
      >

        <h2>
          Built with
          <span> Modern Technologies</span>
        </h2>

        <div className="tech-list">

          <span>
            <FaReact className="tech-icon react" />
            React
          </span>

          <span>
            <SiPytorch className="tech-icon yolo" />
            YOLOv8
          </span>

          <span>
            <SiOpencv className="tech-icon opencv" />
            OpenCV
          </span>

          <span>
            <SiFastapi className="tech-icon fastapi" />
            FastAPI
          </span>

          <span>
            <SiMongodb className="tech-icon mongodb" />
            MongoDB
          </span>

          <span>
            <SiRaspberrypi className="tech-icon raspberry" />
            Raspberry Pi
          </span>

        </div>

      </section>


      {/* ==================================================
          FOOTER
      ================================================== */}

      <footer className="footer">

        <div className="footer-top">

          <div className="safeguard-section">

            <div className="safeguard-about">

              <div className="safeguard-icon">
                <img
                  src={Logo}
                  alt="SafeGuard"
                />
              </div>

              <h4>
                Safe<span>Guard</span>
              </h4>

            </div>

            <p>
              Making public spaces safer with the power
              of AI, IoT & Intelligent monitoring.
            </p>

          </div>


          <div className="quick-links">

            <h4>
              Quick Links
            </h4>

            <ul>

              <li onClick={() => scrollToSection("home")}>
                Home
              </li>

              <li onClick={() => scrollToSection("problem")}>
                Problem
              </li>

              <li onClick={() => scrollToSection("solution")}>
                Solution
              </li>

              <li onClick={() => scrollToSection("features")}>
                Features
              </li>

              <li onClick={() => scrollToSection("technology")}>
                Technologies
              </li>

              <li onClick={() => scrollToSection("how-it-works")}>
                How It Works
              </li>

            </ul>

          </div>


          <div className="social-icons">

            <h4>
              Follow Us
            </h4>

            <div className="icons">

              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaInstagram />

            </div>

          </div>

        </div>


        <div className="footer-bottom">
          © 2026 SafeGuard | Final Year Project |
          University of Sindh - Department of Software Engineering
        </div>

      </footer>
    </>
  );
}

export default LandingPage;