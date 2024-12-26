import React from "react";
import "./App.css";


const skills = [
  
  "JavaScript",
  "React.js",
  "Node.js",
  "TypeScript",
  "Python",
  "CSS",
  "HTML5",
  "iOS Development",
  "Swift",
  "SQL",
  "Angular",
  "Redux",
  "GitHub",
  "CI/CD",
  "Firebase",
  "XCode",
  "Core Data",
  "Cypress",
  "Puppeteer",
  "UI/UX",
  "Storyboard UI",
  "SwiftUI",
  "RESTful APIs",
  "Agile Methodologies",
  "Database Management", 
  "RBAC"

];

const SkillsShowcase = () => {

    const extendedSkills = [...skills, ...skills];
    return (
        <div className= "skills-carousel">
        <div className="carousel-track">
        {extendedSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
                {skill}
            </div>    
        ))}
      </div>
     </div>
    );
};

export default SkillsShowcase;