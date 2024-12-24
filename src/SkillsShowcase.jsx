import React from "react";
import "./App.css";


const skills = [
  
  "JavaScript",
  "React.js",
  "Node.js",
  "TypeScript",
  "Python",
  "CSS",
  "HTML",
  "Git",
  "iOS Development",
  "Swift",

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