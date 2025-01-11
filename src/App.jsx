import React, { useEffect, useState } from "react";
import "./App.css";
import Timeline_Icon from './images/circleIcon.png';
import instagramIcon from './images/instagram.png';
import linkedinIcon from './images/linkedin.png';
import SkillsShowcase from "./SkillsShowcase";
import AboutSection from "./AboutSection";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage] = React.useState("Home");
  useEffect(() => {

    const handleScrollAnimation = () => {
      const sections = document.querySelectorAll(".section, .about-section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          section.classList.add("visible");

          //Document title
          
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
  
  // UseEffect 2: Update the document title
  useEffect(() => {
    document.title = `Portfolio Website - ${currentPage}`;
  }, [currentPage]); 

  

  return (
    <div className="App">
      <header className="App-header">
  <div className="navbar">
    <div className="navbar-left">
    <h1 className="clickable" 
    onClick={() => 
      window.location.href = process.env.PUBLIC_URL + '/'}>
      PORTFOLIO</h1>
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
        <h3>Software Developer</h3>
        <h4>University of Memphis</h4>
        <p className="timeline-date">August 2022 – December 2022</p>
        <ul>
          <li>Built and maintained features for student registration, course enrollment, and grade management, supporting over 5000+ daily users with 99% uptime during peak periods. Developed modular web components using JavaScript, HTML/CSS, and REST APIs.</li>
          <li>Improved database performance and enhanced the UI by optimizing queries and simplifying navigation, reducing page load times by 30% and increasing student usage. Created custom views and wrote queries using Active Record with MySQL.</li>
          <li>Set up CI/CD pipelines using Jenkins and Docker to automate deployments, reducing release times by 50% and ensuring consistent updates with minimal downtime in an Agile development environment.</li>
          <li>Implemented access controls and security features to safeguard student data and ensure compliance with institutional policies. Worked closely with teams to address system issues and deploy fixes effectively.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-icon">
        <img src= {Timeline_Icon} alt="Intern Icon" />
      </div>
      <div className="timeline-content">
        <h3>Junior Software Developer</h3>
        <h4>Xlenz | Internship</h4>
        <p className="timeline-date">January 2021 – April 2022</p>
        <ul>
          <li>Developed and updated website pages using React JS to support AR/VR project features, improving navigation and access to project details. Managed version control with Git, handled builds using Jenkins, and conducted unit tests to ensure functionality before release.</li>
          <li>Built a project tracking tool using React and PostgreSQL to display pending and approved projects, implementing role-based access controls and grouped data views to improve workflow visibility and reduce manual tracking efforts. </li>
          <li>Integrated REST APIs to display real-time status updates for testing team project approvals and conducted integration tests to ensure performance and reliability, improving data flow and reducing approval delays by 25%.</li>
          <li>Resolved a role-based access issue causing delays by debugging permission logic and optimizing database queries, reducing errors by 40%. Used Docker to create a consistent testing environment and ensure smooth deployments across teams.</li>
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
        <p>&copy; 2025 Bala Christu Raj Gopu. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
