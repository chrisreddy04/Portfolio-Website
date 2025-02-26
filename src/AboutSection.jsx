import React, { useEffect, useRef } from "react";
import MeCard from "./MeCard";

const AboutSection = () => {
  const videoRef = useRef(null);
  const textMaskRef = useRef(null);
  const nextSectionRef = useRef(null);
  const gsapRef = useRef(null);
  const ScrollTriggerRef = useRef(null);

  useEffect(() => {
    let ctx;
    
    const initializeAnimations = async () => {
      try {
        // Dynamically import GSAP and plugins
        const gsap = (await import("gsap")).gsap;
        const ScrollTrigger = (await import("gsap/ScrollTrigger")).ScrollTrigger;
        
        // Store in refs for cleanup
        gsapRef.current = gsap;
        ScrollTriggerRef.current = ScrollTrigger;

        // Register plugins
        gsap.registerPlugin(ScrollTrigger);

        // Animation context
        ctx = gsap.context(() => {
          // Video animation
          gsap.fromTo(videoRef.current,
            { yPercent: 0 },
            {
              yPercent: 28,
              ease: "none",
              scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );

          // Text mask animation
          gsap.fromTo(textMaskRef.current,
            { yPercent: 0 },
            {
              yPercent: -40,
              ease: "none",
              scrollTrigger: {
                trigger: "#about",
                start: "top bottom",
                end: "bottom top",
                scrub: true
              }
            }
          );
         

          // Next section animation
          gsap.fromTo(nextSectionRef.current,
            { autoAlpha: 0.9, y: 0 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "power2.out",
              scrollTrigger: {
                trigger: ".next-section",
                start: "top 80%",
                end: "top 20%",
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
      if (ScrollTriggerRef.current) {
        ScrollTriggerRef.current.getAll().forEach(instance => instance.kill());
      }
    };
  }, []);

  return (
    <div className="page-wrapper">
      <section id="about" className="about-section">
        <svg 
          ref={textMaskRef}
          width="100%" 
          height="100%" 
          style={{ position: 'absolute', zIndex: 2 }}
        >
          <defs>
            <mask id="text-mask" x="0" y="0" width="100%" height="100%">
              <rect width="100%" height="100%" fill="black" />
              <text
                x="-20%"
                y="40%"
                dy=".35em"
                textAnchor="start"
                fontSize="clamp(15rem, 53vw, 48rem)"
                fontFamily="Iceland"
                fill="white"
                className="animate-slow-scroll"
              >
                CHRIS
              </text>
            </mask>
          </defs>
        </svg>

        <div className="video-text-container">
          <video 
            ref={videoRef}
            className="video-bg"
            src="/assets/images/afterh.mov"  
            autoPlay
            muted
            loop
            style={{ 
              position: "absolute",
              width: "100%",
              height: "200%",
              objectFit: "cover",
              mask: "url(#text-mask)"
            }}
          />
        </div>
      </section>
      
      <section ref={nextSectionRef} className="next-section">
       <MeCard />
      </section>
     

    
    </div>
  );
};

export default AboutSection;