
import { useState } from "react";

interface PageTurnAnimationProps {
  onPageTurn: () => void;
}

const PageTurnAnimation = ({ onPageTurn }: PageTurnAnimationProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isHovered) {
      onPageTurn();
    }
  };

  return (
    <div 
      className="absolute bottom-0 right-0 w-48 h-48 cursor-pointer z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Page curl effect */}
      <div className="relative w-full h-full overflow-hidden">
        {/* Base shadow */}
        <div 
          className={`absolute bottom-0 right-0 transition-all duration-300 ease-out ${
            isHovered ? 'w-36 h-36' : 'w-16 h-16'
          }`}
          style={{
            background: 'linear-gradient(135deg, transparent 45%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
            clipPath: 'polygon(100% 100%, 100% 0%, 0% 100%)'
          }}
        />
        
        {/* Curled page */}
        <div 
          className={`absolute bottom-0 right-0 bg-white/15 backdrop-blur-sm transition-all duration-300 ease-out ${
            isHovered ? 'w-36 h-36' : 'w-16 h-16'
          }`}
          style={{
            clipPath: 'polygon(100% 100%, 100% 0%, 0% 100%)',
            transform: isHovered ? 'rotate(-20deg)' : 'rotate(-5deg)',
            transformOrigin: 'bottom right'
          }}
        />
        
        {/* Highlight effect */}
        <div 
          className={`absolute bottom-0 right-0 bg-white/25 transition-all duration-300 ease-out ${
            isHovered ? 'w-32 h-32' : 'w-8 h-8'
          }`}
          style={{
            clipPath: 'polygon(100% 100%, 100% 15%, 15% 100%)',
            transform: isHovered ? 'rotate(-20deg)' : 'rotate(-5deg)',
            transformOrigin: 'bottom right'
          }}
        />
      </div>
    </div>
  );
};

export default PageTurnAnimation;
