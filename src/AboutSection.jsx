import React, { useEffect, useState } from "react";
import "./App.css";
import ResumeFile from "./Resume/Christu_Resume_SoftDev.pdf";

const AboutSection = () => {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFinished(true); // Mark the animation as finished
    }, 3000); // Duration of the typing animation (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Typing Animation */}
        <h1 className={`typing-animation ${finished ? "finished" : ""}`}>
          About Me
        </h1>
        <p>
        I am Bala Christu Raj, a passionate and determined developer, building my expertise brick by brick to transform ideas into impactful digital experiences. With a Master’s degree in Computer Science and hands-on experience in web development, CI/CD practices, and iOS development, I approach challenges as opportunities to innovate. Fueled by creativity and resilience, I believe in crafting solutions that not only function but inspire.
        </p>
        <a href={ResumeFile} download="Christuraj_SoftwareDev_Resume.pdf" className="download-resume-btn">
      Download Resume
    </a>
      </div>
    </section>
  );
};

export default AboutSection;
