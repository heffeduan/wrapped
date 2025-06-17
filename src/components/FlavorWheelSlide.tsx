
import userData from '../data.json';

const FlavorWheelSlide = () => {
  const { cuisineAndPreferences } = userData.my2024;
  
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/59c9b19e-4b4a-4a16-a72a-6489fc0b8ef4.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center animate-fade-in">
        <h1 className="font-didot text-5xl md:text-6xl font-bold mb-4">
          Your
        </h1>
        <h2 className="font-didot text-5xl md:text-6xl font-bold mb-16">
          Flavor Wheel.
        </h2>
        
        <div className="relative max-w-md mx-auto mb-16">
          {/* Flavor Wheel PNG */}
          <div className="relative w-80 h-80 mx-auto">
            <img 
              src="/lovable-uploads/3ff07ecc-0a21-4d47-b641-dda02facafe1.png" 
              alt="Flavor Wheel showing Italian, French, Japanese, and American cuisines"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <div className="space-y-4 mb-16">
          <p className="font-inter text-xl">{cuisineAndPreferences.totalCuisineTypes} Cuisines</p>
          <p className="font-inter text-xl">{cuisineAndPreferences.comfortFoodRatio.split(', ')[1]}</p>
          <p className="font-inter text-xl font-medium">{cuisineAndPreferences.mostAdventurousMonth.split(' ')[0]} = Peak Discovery</p>
        </div>
      </div>
    </div>
  );
};

export default FlavorWheelSlide;
