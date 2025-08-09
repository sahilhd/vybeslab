import { Link } from 'react-router-dom';

const TopPremiumBanner = () => {
  const topPremiumUsers = [
    {
      id: 1,
      username: '@charlixcx',
      subscribers: '2.4M',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c6d96a50?w=40&h=40&fit=crop&crop=face',
      isVerified: true,
      tier: 'PLATINUM'
    },
    {
      id: 2,
      username: '@lifestylevibes',
      subscribers: '890K',
      avatar: '/images/profile-picture.jpg',
      isVerified: true,
      tier: 'GOLD'
    },
    {
      id: 3,
      username: '@rickythompson',
      subscribers: '567K',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      isVerified: true,
      tier: 'GOLD'
    },
    {
      id: 4,
      username: '@evelynha',
      subscribers: '234K',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      isVerified: true,
      tier: 'SILVER'
    },
    {
      id: 5,
      username: '@threadguy',
      subscribers: '189K',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      isVerified: true,
      tier: 'SILVER'
    }
  ];

  const getTierColor = (tier) => {
    switch (tier) {
      case 'PLATINUM': return 'from-purple-500 to-pink-500';
      case 'GOLD': return 'from-yellow-400 to-orange-500';
      case 'SILVER': return 'from-gray-300 to-gray-500';
      default: return 'from-gray-400 to-gray-600';
    }
  };

  const getTierIcon = (tier) => {
    switch (tier) {
      case 'PLATINUM': return '💎';
      case 'GOLD': return '🏆';
      case 'SILVER': return '🥈';
      default: return '⭐';
    }
  };

  return (
    <div className="bg-gradient-to-r from-purple-900 to-indigo-900 border border-purple-500/30 rounded-lg p-4 mb-6 shadow-lg shadow-purple-500/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">👑</span>
          <h3 className="font-pixel text-purple-300 text-lg">TOP PREMIUM</h3>
        </div>
        <div className="text-purple-400 font-mono text-xs">
          Most Subscribed
        </div>
      </div>

      {/* Premium Users List */}
      <div className="space-y-3">
        {topPremiumUsers.map((user, index) => (
          <Link
            key={user.id}
            to="/profile"
            className="flex items-center space-x-3 p-2 rounded-lg bg-black/30 hover:bg-black/50 transition-colors group"
          >
            {/* Rank */}
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
              {index === 0 ? (
                <div className="text-yellow-400 text-lg font-bold">👑</div>
              ) : (
                <div className="text-purple-300 font-mono text-sm font-bold">
                  #{index + 1}
                </div>
              )}
            </div>

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-white text-sm font-bold truncate">
                  {user.username}
                </span>
                {user.isVerified && (
                  <span className="text-blue-400 text-xs">✓</span>
                )}
              </div>
              <div className="text-purple-300 font-mono text-xs">
                {user.subscribers} subscribers
              </div>
            </div>

            {/* Hover Arrow */}
            <div className="flex-shrink-0 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
              →
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-purple-500/20">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-purple-400">Updated every hour</span>
          <Link 
            to="/premium" 
            className="text-purple-300 hover:text-white transition-colors flex items-center space-x-1"
          >
            <span>View All</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPremiumBanner; 