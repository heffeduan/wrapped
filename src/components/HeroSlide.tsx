
import { Facebook, Twitter, Linkedin, MessageSquare } from "lucide-react";

interface HeroSlideProps {
  onNextSlide?: () => void;
}

const HeroSlide = ({ onNextSlide }: HeroSlideProps) => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center text-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/dfb09bb1-45d4-4a3a-814e-4ca3651fe628.png')`,
        backgroundPosition: 'center 70%'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50" />
      
      {/* Social Share Section */}
      <div className="absolute top-8 right-8 z-50">
        <div className="flex items-center space-x-6">
          <span className="font-inter text-lg font-medium text-white/80">SHARE</span>
          <div className="w-16 h-px bg-white/40"></div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/blackbirdlabsxyz#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://x.com/blackbird_xyz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/blackbirdlabsinc/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://www.blackbird.xyz/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-8 animate-fade-in">
        <h1 className="font-didot text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-none">
          Blackbird
        </h1>
        <h2 className="font-didot text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-none">
          Wrapped
        </h2>
        <h3 className="font-didot text-5xl md:text-6xl lg:text-7xl font-bold mb-12 leading-none">
          2024
        </h3>
        
        <p className="font-inter text-2xl md:text-3xl font-light mb-16 text-white/90">
          Year in Review
        </p>
        
        <div className="inline-block">
          <button 
            onClick={onNextSlide}
            className="font-inter text-lg font-medium px-8 py-3 border-b-2 border-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Begin
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
