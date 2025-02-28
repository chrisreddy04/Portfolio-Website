import React, { useEffect, useRef } from "react";
import MeCard from "./MeCard";

const AboutSection = () => {
  const videoRef = useRef(null);
  const textMaskRef = useRef(null);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const loadAnimations = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Video animation
      gsap.fromTo(videoRef.current,
        { yPercent: 0 },
        {
          yPercent: 65,
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
          yPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: "#about",
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    };

    loadAnimations();
  }, []);

  return (
    <div className="page-wrapper">
      <section id="about" className="about-section" style={{ position: "relative", height: "100vh" }}>
        {/* SVG Mask - Keep in same DOM tree as video */}
        <svg 
          ref={textMaskRef}
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            pointerEvents: 'none'
          }}
        >
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                fill="black"
                fontSize="48rem"
                textAnchor="middle"
                dominantBaseline="middle"
              >
                CHRIS
              </text>
            </mask>
          </defs>
        </svg>

        {/* Video Element */}
        <video
          ref={videoRef}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            mask: 'url(#text-mask)',
            WebkitMask: 'url(#text-mask)',
          }}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Portfolio/images/afterh.mov" type="video/mp4" />
        </video>
      </section>

      <section ref={nextSectionRef} className="next-section">
        <MeCard />
      </section>
    </div>
  );
};

export default AboutSection;