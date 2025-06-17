
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroSlide from "@/components/HeroSlide";
import StatsSlide from "@/components/StatsSlide";
import TopTablesSlide from "@/components/TopTablesSlide";
import FlavorWheelSlide from "@/components/FlavorWheelSlide";
import LocationsSlide from "@/components/LocationsSlide";
import TierSlide from "@/components/TierSlide";
import PageTurnAnimation from "@/components/PageTurnAnimation";

const slides = [
  { id: 'hero', component: HeroSlide },
  { id: 'stats', component: StatsSlide },
  { id: 'tables', component: TopTablesSlide },
  { id: 'flavor', component: FlavorWheelSlide },
  { id: 'locations', component: LocationsSlide },
  { id: 'tier', component: TierSlide },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        {currentSlide === 0 ? (
          <HeroSlide onNextSlide={nextSlide} />
        ) : (
          <CurrentComponent />
        )}
      </div>

      {/* Page Turn Animation - only show on slides other than the first one */}
      {currentSlide !== 0 && <PageTurnAnimation onPageTurn={nextSlide} />}

      {/* Navigation Controls - only show on slides other than the first one */}
      {currentSlide !== 0 && (
        <div className="absolute bottom-8 left-8 flex items-center space-x-4 z-50">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="text-white hover:bg-white/10 transition-colors"
            disabled={isAnimating}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="text-white hover:bg-white/10 transition-colors"
            disabled={isAnimating}
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </div>
      )}

      {/* Slide Indicators - only show on slides 2-6 in top right corner */}
      {currentSlide !== 0 && (
        <div className="absolute top-8 right-8 flex space-x-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Index;
