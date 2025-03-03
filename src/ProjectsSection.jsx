// components/ProjectCard.js
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import VanillaTilt from 'vanilla-tilt';

const ProjectCard = ({ title, description, image }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 300,
        glare: true,
        "max-glare": 0.4,
        scale: 1.02
      });
    }
    
    // Cleanup function
    return () => {
      if (tiltRef.current?.vanillaTilt) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  return (
    <div ref={tiltRef} className="project-card">
      <div className="image-container">
        <Image
          src={image}
          alt={title}
          fill
          className="project-image"
          unoptimized
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;