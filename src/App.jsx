import React, { useEffect } from "react";
import "./App.css";

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
            <div className="project-card">
              <h3>Portfolio Website</h3>
              <p>An interactive personal portfolio website built using React.js to showcase my projects, experience, and skills. Hosted on GitHub Pages for accessibility and ease of use.</p>
            </div>
            <div className="project-card">
              <h3>Swift iOS App</h3>
              <p>A dating app built using Swift and Xcode, featuring secure user authentication and optimized performance.</p>
            </div>
            <div className="project-card">
              <h3>Flowers and Bouquets Website</h3>
              <p>A responsive e-commerce site showcasing floral arrangements, built with React.js and CSS.</p>
            </div>
            <div className="project-card">
              <h3>Intra-Bundle Web App</h3>
              <p>A React.js-based collaboration platform for teams to manage projects and share resources effectively.</p>
            </div>
            <div className="project-card">
              <h3>iOS Application Development (Coursera – Meta)</h3>
              <ul>
                <li>Implemented robust version control practices using Git to ensure seamless collaboration and project tracking.</li>
                <li>Built a feature-rich iOS app using Swift, applying core programming principles and best practices for clean and maintainable code.</li>
                <li>Designed an intuitive user interface focusing on accessibility and aesthetics, using principles of UX/UI Design.</li>
                <li>Created seamless user experiences using Swift UI, building visually appealing layouts and efficient navigation.</li>
                <li>Optimized app performance, reducing memory usage and load times through advanced Swift programming techniques.</li>
                <li>Integrated efficient data handling and persistence techniques to seamlessly fetch, store, and manage information.</li>
                <li>Leveraged JavaScript skills to complement iOS functionality for smooth mobile development processes.</li>
                <li>Gained foundational React Native skills and explored cross-platform app development techniques.</li>
                <li>Delivered a fully functional iOS application as a Capstone Project, showcasing comprehensive Swift, UI/UX design, and data management expertise.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="container section">
          <h2>Experience</h2>
          <p><strong>Web Developer (Part-Time)</strong> - University of Memphis (Aug 2022 - Dec 2023)</p>
          <ul>
            <li>Improved user interfaces using React.js, increasing efficiency by 51%.</li>
            <li>Developed and managed JavaScript for the university website.</li>
          </ul>
          <p><strong>Software Developer Intern</strong> - Xlenz (Jan 2020 - Apr 2022)</p>
          <ul>
            <li>Built responsive applications using React and Angular.</li>
            <li>Collaborated with the AR/VR team to enhance application features.</li>
          </ul>
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
