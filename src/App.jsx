import React, { useEffect, useState } from "react";
import "./App.css";
import Timeline_Icon from './images/circleIcon.png';
import instagramIcon from './images/instagram.png';
import linkedinIcon from './images/linkedin.png';
import SkillsShowcase from "./SkillsShowcase";
import AboutSection from "./AboutSection";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll(".section, .about-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnimation);
    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuSelection = () => {
        setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
  <div className="navbar">
    <div className="navbar-left">
      <h1 className = "clickable" onClick={() => window.location.href = '/'}>PORTFOLIO</h1>
      <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">☰</button>
    </div>
    
    <nav className={`navbar-center ${isMenuOpen ? "open": ""}`}>
      <ul>
        <li><a href="#about" onClick={handleMenuSelection}>ABOUT ME</a></li>
        <li><a href="#projects" onClick={handleMenuSelection}>PROJECTS</a></li>
        <li><a href="#experience" onClick={handleMenuSelection}>EXPERIENCE</a></li>
        <li><a href="#skills" onClick={handleMenuSelection}>SKILLS</a></li>
        <li><a href="#contact" onClick={handleMenuSelection}>CONTACT</a></li>
      </ul>
    </nav>
    <div className="navbar-right">

    <a href="https://www.linkedin.com/in/bala-christuraj-gopu-69a89a179/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/chrisreddy.__/?igsh=MW15dWlmazFxYnRteQ%3D%3D" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" className="social-icon" />
      </a>
    </div>
  </div>
</header>


      <main>
        <AboutSection />

        <section id="projects" className="container section">
          <div className="ProjectsTitle"> <h2>Projects</h2> </div>
          
          <div className="projects-container">
            <div className="project-card"
            style={{ backgroundImage: `url(${require('./images/pw_Image.png')})`}}
            >
            
              <h3>Portfolio Website</h3>
              <p>An interactive personal portfolio website built using React.js to showcase my projects, experience, and skills. Hosted on GitHub Pages for accessibility and ease of use.</p>
            </div>
            <div className="project-card"
            style={{ backgroundImage: `url(${require('./images/datingApp.png')})`}}
            >
              <h3>Swift iOS App</h3>
              <p>A cutting-edge dating app crafted with Swift and Xcode, offering seamless user experiences through a sleek and intuitive design. This app ensures top-tier security with robust user authentication and fortified data protection.</p>
            </div>
            <div className="project-card"
            style={{ backgroundImage: `url(${require('./images/flowerImage1.avif')})`}}
            >
              <h3>Flowers and Bouquets Website</h3>
              <p>Developed a responsive e-commerce website for showcasing floral arrangements, allowing users to securely purchase products and leave reviews, built with Ruby on Rails, JavaScript, and CSS. Integrated RESTful APIs and a robust database to manage real-time inventory, orders, and user data, ensuring seamless performance and scalability.</p>
            </div>
            <div className="project-card"
            style={{ backgroundImage: `url(${require('./images/intraImage2.avif')})`}}
            >
              <h3>Intra-Bundle Web App</h3>
              <p>A React.js-based collaboration platform for teams to manage projects and share resources effectively.</p>
            </div>
            <div className="project-card"
            style={{ backgroundImage: `url(${require('./images/iosmeta2.webp')})`}}
            >
              <h3>iOS Application Development (Coursera – Meta)</h3>
              <p>Developed a feature-rich iOS app as a Capstone Project, leveraging Git for seamless collaboration, implementing advanced Swift programming and efficient data handling techniques, designing intuitive and accessible UI/UX with Swift UI.</p>
            </div>
          </div>
        </section>

        <section id="experience" className="work-experience-section">
  <h2>Work Experience</h2>
  <div className="timeline">
    <div className="timeline-item">
      <div className="timeline-icon">
        <img src= {Timeline_Icon} alt="Software Engineer Icon" />
      </div>
      <div className="timeline-content">
        <h3>Web Developer</h3>
        <h4>University of Memphis</h4>
        <p className="timeline-date">Mar 2024 – Sept 2024</p>
        <ul>
          <li>Developed and optimized internal tools for evaluating application performance, improving efficiency by 51%.</li>
          <li>Designed dashboards to monitor CI/CD pipelines and deployment metrics, streamlining workflows for the university website.</li>
          <li>Defined automated workflows using Jenkins and Docker, enhancing deployment reliability and reducing downtime.</li>
          <li>Collaborated with researchers to identify and resolve system issues, ensuring compliance with organizational standards.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-icon">
        <img src= {Timeline_Icon} alt="Intern Icon" />
      </div>
      <div className="timeline-content">
        <h3>Graduate Junior Software Developer</h3>
        <h4>Xlenz | Internship</h4>
        <p className="timeline-date">July 2023 – Sept 2023</p>
        <ul>
          <li>Designed and implemented tools and dashboards using React JS for real-time system monitoring and evaluation.</li>
          <li>Troubleshoot and resolve root causes of system issues, improving reliability and reducing downtime by 30%.</li>
          <li>Collaborated with cross-functional teams, including AI researchers and backend developers, to develop scalable and secure APIs.</li>
          <li>Automated log analysis and data evaluation using Python and PostgreSQL, improving troubleshooting efficiency.</li>
          <li>Deployed applications to AWS and integrated monitoring solutions using Splunk, ensuring optimal uptime and performance.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section id="skills" className="container section">
  <h2>Skills</h2>
  <SkillsShowcase/>

</section>


<section id="contact" className="contact-section">
  <div className="contact-container">
    <h2>Contact Me</h2>
    <div className="contact-info">
      <div className="contact-item">
        <span className="icon">📞</span>
        <a href="tel:+16628639295">+1 (662)-863-9295</a>
      </div>
      <div className="contact-item">
        <span className="icon">📧</span>
        <a href="mailto:christurajreddy@gmail.com">christurajreddy@gmail.com</a>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer>
        <p>&copy; 2024 Bala Christu Raj Gopu. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
