import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import Link from "next/link";
import SkillsShowcase from "../src/SkillsShowcase";
import AboutSection from "../src/AboutSection";
import ProjectCard from "../src/ProjectsSection";
import LazyProjectCard from "../src/LazyProjectCard";

// Use BASE_PATH so that in production the URL becomes "/Portfolio-Website/Portfolio/images/..."
const BASE_PATH = process.env.NODE_ENV === "production" ? "/Portfolio-Website" : "";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage] = useState("Home");
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
    @keyframes gradient-scroll {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `;
    document.head.appendChild(style);
  
    return () => document.head.removeChild(style);
  }, []);

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

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScrollAnimation);
      return () => window.removeEventListener("scroll", handleScrollAnimation);
    }
  }, []);

  useEffect(() => {
    document.title = `Portfolio Website - ${currentPage}`;
  }, [currentPage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuSelection = () => {
    setIsMenuOpen(false);
  };
  const projects = [
    {
      title: "Portfolio Website",
      description: "A dynamic and responsive personal portfolio website developed with React.js and Next.js, featuring lazy loading for optimized performance and styled with Tailwind CSS, GSAP animations, and Vanilla JS designed to showcase my projects, experience, and technical skills. Deployed seamlessly on GitHub Pages for global accessibility and efficient hosting.",
      image: `${BASE_PATH}/Portfolio/images/pw_Image.png`
    },
    {
      title: "Swift iOS App",
      description: "A cutting-edge dating app crafted with Swift and Xcode, offering seamless user experiences through a sleek and intuitive design.This app ensures top-tier security with robust user authentication and fortified data protection.",
      image: `${BASE_PATH}/Portfolio/images/datingApp.png`
    },
    {
      title: "C-Linq",
      description: "C-Linq is a contact manager that handles 15,000+ contacts with efficient CRUD operations, search functionality, and fast data retrieval, built with React, Ruby on Rails, and PostgreSQL.",
      image: `${BASE_PATH}/Portfolio/images/techImageBG2.jpg`
    },
    {
      title: "Flowers and Bouquets Website",
      description: "Developed a responsive e-commerce website for showcasing floral arrangements, allowing users to securely purchase products and leave reviews, built with Ruby on Rails, JavaScript, and CSS. Integrated RESTful APIs and a robust database to manage real-time inventory, orders, and user data, ensuring seamless performance and scalability.",
      image: `${BASE_PATH}/Portfolio/images/flowerImage1.avif`
    },
    {
      title: "Intra-Bundle Web App",
      description: "A React.js-based collaboration platform for teams to manage projects and share resources effectively.",
      image: `${BASE_PATH}/Portfolio/images/intraImage2.avif`
    },
    {
      title: "iOS Application Development (Coursera – Meta)",
      description: "Developed a feature-rich iOS app as a Capstone Project, leveraging Git for seamless collaboration, implementing advanced Swift programming and efficient data handling techniques, designing intuitive and accessible UI/UX with Swift UI.",
      image: `${BASE_PATH}/Portfolio/images/iosmeta2.webp`
    }
    
    
  ];
 
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className="navbar-left">
            <h1
              className="clickable"
              onClick={() => (window.location.href = BASE_PATH + "/")}
              style={{
                background: "linear-gradient(45deg, #ff3366, #ff6b6b, #4834d4, #686de0)",
                backgroundSize: "400% 400%",
                animation: "gradient-scroll 6s linear infinite",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                pointerEvents: "none",
               willChange: "background-position"
              }}
            >
              PORTFOLIO
            </h1>
            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          <nav className={`navbar-center ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#about" onClick={handleMenuSelection}>
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="#projects" onClick={handleMenuSelection}>
                  PROJECTS
                </a>
              </li>
              <li>
                <a href="#experience" onClick={handleMenuSelection}>
                  EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#skills" onClick={handleMenuSelection}>
                  SKILLS
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleMenuSelection}>
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>

          <div className="navbar-right">
            <a
              href="https://www.linkedin.com/in/christu-gopu-69a89a179/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`${BASE_PATH}/Portfolio/images/linkedin.png`}
                alt="LinkedIn"
                width={32}
                height={32}
                className="social-icon"
                unoptimized
              />
            </a>
            <a
              href="https://www.instagram.com/chrisreddy.__/?igsh=MW15dWlmazFxYnRteQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={`${BASE_PATH}/Portfolio/images/instagram.png`}
                alt="Instagram"
                width={32}
                height={32}
                className="social-icon"
                unoptimized
              />
            </a>
          </div>
        </div>
      </header>

      <main>
        <AboutSection />

        <section id="projects" className="">
  <div className="ProjectsTitle">
    <h2>Projects</h2>
  </div>

  <div className="projects-container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {projects.map((project, index) => (
      <LazyProjectCard
        key={index}
        title={project.title}
        description={project.description}
        image={project.image}
      />
    ))}
  </div>
</section>
        <section id="experience" className="work-experience-section">
          <h2>Work Experience</h2>
          <div className="timeline">
          <div className="timeline-item">
              <div className="timeline-icon">
                <Image
                  src={`${BASE_PATH}/Portfolio/images/circleIcon.png`}
                  alt="Intern Icon"
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
              <div className="timeline-content">
                <h3>Business Analyst</h3>
                <h4>Multiplied Solutions</h4>
                <p className="timeline-date">December 2024 – Present</p>
                <ul>
                  <li>
                  Led requirements gathering and analysis, collaborating with stakeholders to define
                  business needs, resulting in a 20% improvement in project delivery efficiency.
                  </li>
                  <li>
                  Developed and optimized data-driven reports and dashboards using tools like Excel,
                  SQL, and Power BI, enhancing decision-making for key business units.
                  </li>
                  <li>
                  Facilitated cross-functional communication between technical and non-technical teams,
                  ensuring seamless project execution and alignment with business goals.
                  </li>
                  <li>
                  Conducted market research and competitor analysis, providing strategic insights
                  influencing product development and business strategies.
                  </li>
                </ul>
              </div>
            </div>


            <div className="timeline-item">
              <div className="timeline-icon">
                <Image
                  src={`${BASE_PATH}/Portfolio/images/circleIcon.png`}
                  alt="Software Engineer Icon"
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
              <div className="timeline-content">
                <h3>Software Developer</h3>
                <h4>University of Memphis</h4>
                <p className="timeline-date">August 2022 – December 2022</p>
                <ul>
                  <li>
                    Enhanced student features with React, TypeScript, and jQuery,
                    improving navigation for 5,000+ users.
                  </li>
                  <li>
                    Restructured backend data workflows, cutting student record access
                    time by 30% and optimizing page load times.
                  </li>
                  <li>
                    Coordinated feature rollouts, ensuring zero downtime and reducing
                    post-deployment bugs by 20%.
                  </li>
                  <li>
                    Collaborated with stakeholders to define feature requirements and
                    deliver user-focused features.
                  </li>
                  <li>
                    Authored and maintained API documentation, reducing onboarding time
                    by 30% and enhancing integration workflows.
                  </li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-icon">
                <Image
                  src={`${BASE_PATH}/Portfolio/images/circleIcon.png`}
                  alt="Intern Icon"
                  width={50}
                  height={50}
                  unoptimized
                />
              </div>
              <div className="timeline-content">
                <h3>Junior Software Developer</h3>
                <h4>Xlenz</h4>
                <p className="timeline-date">January 2021 – April 2022</p>
                <ul>
                  <li>
                    Built internal project tracking dashboards using React, Angular, and
                    Vue with WebSocket connections for real-time updates, reducing manual
                    monitoring efforts by 40%.
                  </li>
                  <li>
                    Implemented Redis and Memcached caching, improving response times by
                    40% and handling 1,000+ concurrent requests.
                  </li>
                  <li>
                    Designed REST APIs with Node.js, improving data retrieval by 35% through
                    optimized queries and PostgreSQL database tuning.
                  </li>
                  <li>
                    Upgraded system architecture with Docker, ensuring reliable performance
                    and zero downtime.
                  </li>
                  <li>
                    Designed 12+ mobile layouts with lazy loading, reducing load times by 30%
                    and boosting engagement.
                  </li>
                  <li>
                    Documented 40+ API endpoints with Swagger, streamlining integration for
                    25+ team members and reducing downtime by 15%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

     

        <section id="skills" className="">
          <h2>Skills</h2>
          <SkillsShowcase />
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
                <a href="mailto:christurajreddy@gmail.com">
                  christurajreddy@gmail.com
                </a>
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
