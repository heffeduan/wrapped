
import userData from '../data.json';

const TopTablesSlide = () => {
  const { restaurantMetrics } = userData.my2024;
  const topRestaurants = restaurantMetrics.topRestaurantsBySpend.slice(0, 3);
  const featuredRestaurant = restaurantMetrics.longestStreakAtSameRestaurant;
  
  const formatCurrency = (value: number) => {
    return '$' + (value / 1000).toFixed(1) + 'k';
  };

  // Find Tartine restaurant data to calculate average check
  const tartineData = restaurantMetrics.topRestaurantsBySpend.find(
    restaurant => restaurant.name === "Tartine"
  );
  
  const averageCheck = tartineData 
    ? formatCurrency(tartineData.totalSpent.value / tartineData.checkIns)
    : '$1.3k'; // fallback

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/7cccb6e8-4465-4ae3-92ba-419cf5152841.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 animate-fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="font-didot text-5xl md:text-6xl font-bold mb-16">
              Your Top
              <br />
              Tables.
            </h1>
            
            <div className="space-y-8">
              {topRestaurants.map((restaurant, index) => (
                <div key={index} className="font-inter">
                  <div className="text-2xl md:text-3xl font-medium mb-2">
                    {restaurant.name} - {restaurant.checkIns} visits · {formatCurrency(restaurant.totalSpent.value)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="text-left">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/lovable-uploads/0944397b-8889-4055-8c79-534ee6f2590f.png" 
                  alt="Tartine Brunch Club" 
                  className="h-24 w-auto"
                />
                <div className="font-inter text-lg text-white/80">Brunch Club, West Village</div>
              </div>
              <div className="w-full h-0.5 bg-white mb-4"></div>
              <div className="font-inter text-lg mb-2">{featuredRestaurant.streak}-night streak · {featuredRestaurant.period}</div>
              <div className="font-inter text-lg mb-2">Average check {averageCheck}</div>
              <div className="font-inter text-lg">French cuisine</div>
            </div>
          </div>
        </div>
        
        <p className="font-inter text-2xl md:text-3xl font-light text-center mt-20 text-white/90">
          YOUR APPETITE, QUANTIFIED.
        </p>
      </div>
    </div>
  );
};

export default TopTablesSlide;
