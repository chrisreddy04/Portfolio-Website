import React, { useEffect, useState} from "react";

const ScrollIndicator = () => {
    const [bottomSize, setBottomSize] = useState(30); 
    
    const getBottomSize = () => {
        if (typeof window === "undefined") return 30;
        return window.innerWidth < 768 ? 90 : window.innerWidth > 1200 ? 10 : 10;
      };

      useEffect(() => {
        const handleResize = () => {
          setBottomSize(getBottomSize());
        };
        
        // Set initial value
        setBottomSize(getBottomSize());
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-wave {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      .slide-text {
        position: relative;
        color: #888;
        overflow: hidden;
      }

      .slide-text::after {
        content: "SCROLL DOWN";
        position: absolute;
        top: 0;
        left: 0;
        background: linear-gradient(
          90deg,
          transparent 0%,
          rgba(255,255,255,1) 50%,
          transparent 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: slide-wave 4s linear infinite;
      }

      .slide-arrow {
        position: relative;
        width: 20px;
        height: 20px;
        overflow: hidden;
      }

      .slide-arrow::before {
        content: "";
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        animation: slide-wave 3s linear infinite;
      }

      .slide-arrow::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 12px;
        height: 12px;
        border-right: 2px solid #888;
        border-bottom: 2px solid #888;
        transform: translate(-50%, -60%) rotate(45deg);
        
      }
    `;
    document.head.appendChild(style);
    
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="fixed left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-3"
    style={{ bottom: `${bottomSize}px`}}
    >
      {/* Text */}
      <div className="slide-text text-[clamp(1rem,3vw,1rem)]  font-light min-w-[140px] tracking-widest relative ">
        SCROLL DOWN
      </div>

      {/* Arrow */}
      <div className="slide-arrow" />
    </div>
  );
};

export default ScrollIndicator;