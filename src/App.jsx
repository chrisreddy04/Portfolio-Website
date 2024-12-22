import React, { useEffect } from "react";
import "./App.css";
import Timeline_Icon from './images/circleIcon.png'

const App = () => {
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

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Bala Christu Raj Gopu</h1>
          <p>Web Developer | Software Engineer | Tech Enthusiast</p>
          <nav>
            <ul>
              <li><a href="#about">About Me</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="about-section">
          <div className="about-container">
            <h2>About Me</h2>
            <p>
              I am a passionate developer with expertise in creating web and mobile applications. My journey began with a strong interest in technology, leading to a Master's degree in Computer Science and hands-on experience in web development, CI/CD practices, and iOS development.
            </p>
          </div>
        </section>

        <section id="projects" className="container section">
          <h2>Projects</h2>
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
              <p>A dating app built using Swift and Xcode, featuring secure user authentication and optimized performance.</p>
            </div>
            <div className="project-card"
            style={{ backgroundImage: `url(${require('./images/flowerImage1.avif')})`}}
            >
              <h3>Flowers and Bouquets Website</h3>
              <p>A responsive e-commerce site showcasing floral arrangements, built with React.js and CSS.</p>
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
        <h3>Software Engineer</h3>
        <h4>Bluechip Technologies | Internship</h4>
        <p className="timeline-date">Mar 2024 – Sept 2024</p>
        <ul>
          <li>Developed responsive sidebars for an API marketplace web app using ChakraUI.</li>
          <li>Built reusable table components reducing code by 15% and improving maintainability.</li>
          <li>Collaborated with senior engineers using GitHub to streamline development.</li>
          <li>Fixed bugs and added new features in a Learning Management System using Bootstrap.</li>
          <li>Integrated seven endpoints in the RBAC module to streamline CRUD operations.</li>
          <li>Created HTML templates for partner companies, including KPMG.</li>
        </ul>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-icon">
        <img src= {Timeline_Icon} alt="Intern Icon" />
      </div>
      <div className="timeline-content">
        <h3>Intern</h3>
        <h4>NNPC | Internship</h4>
        <p className="timeline-date">July 2023 – Sept 2023</p>
        <ul>
          <li>Designed cross-functional login and sign-up pages used within the company.</li>
          <li>Streamlined front-end user interfaces to improve user experience.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


        <section id="contact" className="container section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:bala@example.com">bala@example.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/bala">linkedin.com/in/bala</a></p>
          <p>GitHub: <a href="https://github.com/bala">github.com/bala</a></p>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Bala Christu Raj Gopu. Built with ❤️ and hosted on <a href="https://pages.github.com/">GitHub Pages</a>.</p>
      </footer>
    </div>
  );
};

export default App;
