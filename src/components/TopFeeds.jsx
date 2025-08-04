import { topFeeds } from '../mockData';

const TopFeeds = () => {
  return (
    <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-3 lg:p-4">
      <h3 className="font-pixel text-neon-cyan text-base lg:text-lg mb-3 lg:mb-4 neon-text">TOP FEEDS</h3>
      
      <div className="space-y-3">
        {topFeeds.map((feed, index) => (
          <div key={feed.id} className="flex items-start space-x-3 p-2 rounded hover:bg-neon-blue/10 transition-colors cursor-pointer">
            <div className="flex-shrink-0 w-6 h-6 bg-neon-blue rounded flex items-center justify-center">
              <span className="font-mono text-xs text-white">{index + 1}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-mono text-white text-sm truncate hover:text-neon-cyan transition-colors">
                {feed.title}
              </h4>
              <div className="flex items-center justify-between mt-1">
                <span className="text-gray-400 font-mono text-xs">{feed.viewCount}</span>
                <span className="text-neon-green font-mono text-xs">{feed.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="w-full mt-4 border border-neon-cyan text-neon-cyan font-mono text-xs py-2 rounded hover:bg-neon-cyan hover:text-black transition-all">
        SHOW MORE
      </button>
    </div>
  );
};

export default TopFeeds; 