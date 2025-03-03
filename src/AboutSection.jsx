import React, { useEffect, useRef, useState } from "react";
import MeCard from "./MeCard";
import ScrollIndicator from "./ScrollIndicator";


const AboutSection = () => {
  const textRef = useRef(null);
  const nextSectionRef = useRef(null);
  const videoRef = useRef(null);
  const textMaskRef = useRef(null);


  const gsap = useRef(null);
  const ScrollTrigger = useRef(null);

  

// Add global styles
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


   // Responsive yPercent calculation
   const getYPercent = () => {
    if (typeof window === "undefined") return 30;
    return window.innerWidth < 768 ? 100 : window.innerWidth > 1200 ? 25 : 25;
  };

  useEffect(() => {
    let ctx;
    
    const initializeAnimations = async () => {
      try {
        const gsap = (await import("gsap")).gsap;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Text animation
          gsap.fromTo('.scroll-indicator',
            { autoAlpha: 1},
            {
              autoAlpha: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: "#about",
                start: "top 0%",
                end: "bottom 0%",
                scrub: true,
          
               
              }
            }
          );
          gsap.fromTo(textRef.current,
            { yPercent: 0 },
            {
              yPercent: () => getYPercent(), // Moves text downward as you scroll
              ease: "none",
              scrollTrigger: {
                trigger: "#about",
                start: "top bottom", // When top of #about hits bottom of viewport
                end: "bottom top",   // When bottom of #about hits top of viewport
                scrub: true,
                onRefresh: self => {
                  // Update animation when screen size changes
                  self.animation.progress(self.progress)
                }
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
        // Handle window resize
        const onResize = () => {
          ScrollTrigger.refresh();
        };
        
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);

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
          justifyContent: "center",

        }}
      >
        <h1 
      ref={textRef}
      style={{
        fontSize: "clamp(15rem, 53vw, 48rem)",
        fontFamily: "'Iceland', sans-serif",
        background: "linear-gradient(45deg, #ff3366, #ff6b6b, #4834d4, #686de0)",
        backgroundSize: "400% 400%",
        animation: "gradient-scroll 6s linear infinite",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        position: "absolute",
        zIndex: 2,
        margin: 0,
        pointerEvents: "none",
        lineHeight: 1,
        willChange: "background-position"
      }}
    >
      CHRIS

    </h1>

    <div className="scroll-indicator absolute bottom-0 left-1/2 -translate-x-1/2 z-[3]">
          <ScrollIndicator />
        </div>
  
      </section>

   
    

      <section ref={nextSectionRef} className="next-section">
        <MeCard />
      </section>
    </div>
  );
};

export default AboutSection;