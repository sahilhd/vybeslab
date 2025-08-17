import { Link } from 'react-router-dom';

const FeedCard = ({ feed }) => {
  return (
          <Link to={`/app/stream/${feed.id}`} className="block group h-full">
      <div className="feed-thumbnail bg-dark-blue rounded-lg overflow-hidden border border-neon-blue/50 hover:border-neon-cyan transition-all duration-300 hover:shadow-xl hover:shadow-neon-cyan/20 h-full flex flex-col">
        {/* Premium Badge */}
        {feed.isPremium && (
          <div className="absolute top-2 left-2 z-10 premium-badge px-2 py-1 rounded text-xs font-mono text-white">
            PREMIUM
          </div>
        )}

        {/* Quest Badge */}
        {feed.isQuest && (
          <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-neon-magenta to-purple-600 px-2 py-1 rounded text-xs font-mono text-white shadow-lg shadow-neon-magenta/30 flex items-center space-x-1">
            <span>🎯</span>
            <span>QUEST</span>
          </div>
        )}

        {/* Thumbnail Image */}
        <div className="relative aspect-video flex-shrink-0">
          <img 
            src={feed.thumbnail} 
            alt={feed.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Video Overlay */}
          <div className="absolute inset-0 video-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-white">
                <span className="font-mono text-sm">{feed.viewCount} views</span>
                <div className="w-8 h-8 bg-neon-green/80 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Info */}
        <div className="p-3 lg:p-4 flex-grow flex flex-col justify-between min-h-[80px]">
          <h3 className="font-mono text-white text-xs sm:text-sm mb-2 group-hover:text-neon-cyan transition-colors line-clamp-2 flex-grow leading-tight">
            {feed.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-neon-cyan font-mono text-xs truncate max-w-[60%]">{feed.creator}</span>
            <span className="text-gray-400 font-mono text-xs">{feed.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FeedCard; 