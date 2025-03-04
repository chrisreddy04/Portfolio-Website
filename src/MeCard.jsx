import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const BASE_PATH = process.env.NODE_ENV === "production" ? "/Portfolio-Website" : "";

export default function MeCard() {
  const words = [
    'Developer',
    'Designer',
    'Creator',
    'Problem Solver',
    'Tech Enthusiast',
    'Collaborator',
    'Team Player',
    'Innovator',
    'Learner',
    'Optimist',
    'Dreamer',
    'Coder',
    'Architect', 
    'Engineer',
    'Full-Stack Developer',
    'UI/UX Designer',
    'Frontend Maestro',
    'Backend Wizard',
  'Mobile Developer',
  'DevOps Engineer',
  'AI Explorer',
  ];

  const wordRef = useRef(null);
  const wordsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    
    // Set initial state
    gsap.set(wordsRef.current, {
      opacity: 0,
      y: 40,
      immediateRender: false
    });
  
    // Create animation sequence
    wordsRef.current.forEach((word, index) => {
      tl.to(word, {
        duration: 0.1,
        opacity: 1,
        y: 0,
        ease: 'power4.out'
      })
      .to(word, {
        duration: 0.16,
        opacity: 0,
        y: -40,
        ease: 'power4.in',
        delay: 0.2
      }, '>+=0.5'); // Overlap animations slightly
    });
  
    return () => tl.kill();
  }, []);

  return (
    <div 
  className="bg-black/90 backdrop-blur-lg rounded-2xl overflow-hidden relative"
  style={{
    boxShadow: 'var(--shadow)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateZ(0)' // Force hardware acceleration
  }}
>
<div className="absolute inset-0 rounded-2xl shadow-[0_0_60px_15px_rgba(31,38,135,0.37)] z-[-1]" />

  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-6xl mx-auto p-6 md:p-8">
    {/* Profile Image Container */}
    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 hover-float">
      <Image
        src={`${BASE_PATH}/Portfolio/images/ppimage1.JPG`}
        alt="Profile"
        fill
        className="object-cover object-center hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, 50vw"
        unoptimized
      />
    </div>

    {/* Text Content */}
    <div className="flex-1 space-y-4 md:space-y-6">
  <div className="text-3xl md:text-4xl xl:text-5xl font-bold">
    <div className="overflow-hidden relative">
      <span className="block text-lg md:text-xl font-medium text-gray-500 mb-2">
        Hello, I'm a
      </span>
      <div ref={wordRef} className="relative min-h-[4rem] min-w-[10rem] md:min-h-[5rem]  overflow-visible">
        {words.map((word, index) => (
          <span
            key={word}
            ref={el => (wordsRef.current[index] = el)}
            className="absolute top-0 left-0 w-full
                       text-2xl md:text-3xl lg:text-5xl
                       leading-tight md:leading-normal 
                       will-change-transform 
                      bg-gradient-to-l from-blue-600 to-purple-600 bg-clip-text text-transparent
                      transition-[opacity,transform] duration-500"
            style={{ 
              zIndex: index + 1,
              opacity: index === 0 ? 1 : 0,
              transform: index === 0 ? 'translateY(0)' : 'translateY(40px)'
            }}
            aria-hidden={index !== 0}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  </div>
</div>
  </div>
</div>
  );
}