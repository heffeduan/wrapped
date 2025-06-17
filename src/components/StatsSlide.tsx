
import userData from '../data.json';

const StatsSlide = () => {
  const { spendingPatterns, timeAndFrequency, flyMetrics } = userData.my2024;
  
  const formatCurrency = (value: number) => {
    return (value / 1000).toFixed(0) + 'K';
  };

  const formatFlyAmount = (value: number) => {
    return (value / 1000).toFixed(0) + 'K';
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/97d1a250-0a8b-40ab-a1fd-684f8b1f3701.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/7 to-black/12" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center animate-fade-in">
        <h1 className="font-didot text-4xl md:text-5xl font-bold mb-4">
          A <span className="text-6xl md:text-7xl">${formatCurrency(spendingPatterns.totalSpent.value)}</span>
        </h1>
        <h2 className="font-didot text-5xl md:text-6xl font-bold mb-16">
          Year in Taste.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-4xl mx-auto">
          <div className="text-center animate-slide-in">
            <div className="font-didot text-6xl md:text-7xl font-bold mb-4">{timeAndFrequency.totalCheckIns}</div>
            <div className="font-inter text-xl md:text-2xl font-light">
              Check Ins
              <div className="w-24 h-0.5 bg-white mx-auto mt-2"></div>
            </div>
          </div>
          
          <div className="text-center animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="font-didot text-6xl md:text-7xl font-bold mb-4">{formatFlyAmount(flyMetrics.totalFlyEarned)}</div>
            <div className="font-inter text-xl md:text-2xl font-light">
              $FLY earned
              <div className="w-24 h-0.5 bg-white mx-auto mt-2"></div>
            </div>
          </div>
        </div>
        
        <p className="font-inter text-2xl md:text-3xl font-light mt-20 text-white/90">
          YOUR APPETITE, SKY HIGH.
        </p>
      </div>
    </div>
  );
};

export default StatsSlide;
