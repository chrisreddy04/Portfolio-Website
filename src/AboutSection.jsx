import React, { useEffect, useRef } from "react";
import MeCard from "./MeCard";

const AboutSection = () => {
  const textRef = useRef(null);
  const nextSectionRef = useRef(null);
  const videoRef = useRef(null);
  const textMaskRef = useRef(null);

  const gsap = useRef(null);
  const ScrollTrigger = useRef(null);

  useEffect(() => {
    let ctx;
    
    const initializeAnimations = async () => {
      try {
        const gsap = (await import("gsap")).gsap;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Text animation
          gsap.fromTo(textRef.current,
            { yPercent: 0 },
            {
              yPercent: 30, // Moves text downward as you scroll
              ease: "none",
              scrollTrigger: {
                trigger: "#about",
                start: "top bottom", // When top of #about hits bottom of viewport
                end: "bottom top",   // When bottom of #about hits top of viewport
                scrub: true,
                markers: false // Set to true for visual debugging
              }
            }
          );

          gsap.fromTo(nextSectionRef.current,
            { autoAlpha: 0, y: 100 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".next-section",
                start: "top 90%", // Adjust these values to
                end: "top 30%",   // control fade-in timing
                scrub: 1,
              }
            }
          );
        });

      } catch (error) {
        console.error("Error loading GSAP:", error);
      }
    };

    initializeAnimations();

    return () => {
      // Cleanup
      if (ctx) ctx.revert();
     
    };
  }, []);

  return (
    <div className="page-wrapper">
      <section 
        id="about" 
        className="about-section" 
        style={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <h1 
          ref={textRef}
          style={{
            fontSize: "clamp(15rem, 53vw, 48rem)",
            fontFamily: "'Iceland', sans-serif",
            position: "absolute",
            zIndex: 2,
            willChange: "transform", 
            margin: 0
          }}
        >
          CHRIS
        </h1>
      </section>
      
      <section ref={nextSectionRef} className="next-section">
        <MeCard />
      </section>
    </div>
  );
};

export default AboutSection;