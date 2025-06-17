
import userData from '../data.json';

const LocationsSlide = () => {
  const { geographic } = userData.my2024;
  const [newYork, sanFrancisco] = geographic.topCities;
  const [topNeighborhoodNY, topNeighborhoodSF] = [
    geographic.topNeighborhoods[0], // West Village
    geographic.topNeighborhoods[4]  // Mission
  ];
  
  const formatCurrency = (value: number) => {
    return '$' + (value / 1000).toFixed(1) + 'k';
  };

  return (
    <div className="relative w-full h-full overflow-hidden min-h-screen">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        {/* Left - New York */}
        <div 
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/9a340a42-1c3f-4484-bac8-aae47334e00a.png')`
          }}
        />
        
        {/* Grey Seam - Very Low Opacity */}
        <div className="w-1 bg-gray-400/10" />
        
        {/* Right - San Francisco */}
        <div 
          className="w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/2438d598-7e09-403a-8496-086d5fe428ed.png')`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-16 lg:px-24">
        <div className="text-center animate-fade-in">
          <h1 className="font-didot text-5xl md:text-6xl font-bold mb-24 text-white leading-tight">
            Coast-to-Coast
            <br />
            Appetite.
          </h1>
          
          <div className="flex items-start justify-center gap-72 mb-16">
            <div className="text-center space-y-6">
              <h1 className="font-didot text-4xl md:text-5xl font-bold text-white">{newYork.name}</h1>
              <h2 className="font-inter text-xl text-white">Home Base</h2>
              <p className="font-inter text-2xl font-medium text-white">
                {newYork.checkIns} check-ins · {formatCurrency(newYork.spent.value)}
              </p>
              <p className="font-inter text-xl text-white/90">
                {topNeighborhoodNY.name} - {topNeighborhoodNY.checkIns}
              </p>
            </div>
            
            <div className="text-center space-y-6">
              <h1 className="font-didot text-4xl md:text-5xl font-bold text-white">{sanFrancisco.name}</h1>
              <h2 className="font-inter text-xl text-white">Destination</h2>
              <p className="font-inter text-2xl font-medium text-white">
                {sanFrancisco.checkIns} check-ins · {formatCurrency(sanFrancisco.spent.value)}
              </p>
              <p className="font-inter text-xl text-white/90">
                {topNeighborhoodSF.name} - {topNeighborhoodSF.checkIns}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSlide;
