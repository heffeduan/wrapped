
import userData from '../data.json';

const TierSlide = () => {
  const { socialAndStatus, flyMetrics } = userData.my2024;
  
  const formatFlyBalance = (value: number) => {
    return (value / 1000).toFixed(1) + ' K';
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('/lovable-uploads/384b1a1d-51c4-4e6c-ac90-43aba734909c.png')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/14 via-black/21 to-black/28" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 animate-fade-in">
        <div className="text-center">
          <h1 className="font-didot text-5xl md:text-6xl font-bold mb-16">
            Your
            <br />
            Blackbird Tier.
          </h1>
          
          <div className="mb-12">
            <div className="font-didot text-7xl md:text-8xl font-bold mb-4">{socialAndStatus.currentStatus}</div>
            <div className="font-didot text-4xl md:text-5xl font-bold mb-4">STATUS</div>
            <div className="font-inter text-xl md:text-2xl font-light text-white/90">
              TOP OF THE FLOCK
            </div>
          </div>
          
          <div className="space-y-4 font-inter text-lg mb-16">
            <p>{socialAndStatus.rewardsUnlocked} Rewards Unlocked</p>
            <p>{socialAndStatus.bbPayUsage} BB Pay</p>
            <p>{socialAndStatus.referralsMade} Referrals → {socialAndStatus.friendsIntroducedToBlackbird} Friends</p>
          </div>
          
          <div>
            <p className="font-didot text-3xl md:text-4xl font-bold">{formatFlyBalance(flyMetrics.flyBalance)} FLY Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TierSlide;
