import { Link } from 'react-router-dom';
import { mockFeeds } from '../mockData';

const TopFeeds = () => {
  // Use the first 5 feeds from our demo in order
  const topFeeds = mockFeeds.slice(0, 5);

  return (
    <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-3 lg:p-4">
      <h3 className="font-pixel text-neon-cyan text-base lg:text-lg mb-3 lg:mb-4 neon-text">TOP FEEDS</h3>
      
      <div className="space-y-3">
        {topFeeds.map((feed, index) => (
          <Link 
            key={feed.id} 
            to={`/stream/${feed.id}`}
            className="flex items-start space-x-3 p-2 rounded hover:bg-neon-blue/10 transition-colors cursor-pointer group"
          >
            <div className="flex-shrink-0 w-6 h-6 bg-neon-blue rounded flex items-center justify-center group-hover:bg-neon-cyan transition-colors">
              <span className="font-mono text-xs text-white group-hover:text-black">{index + 1}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-mono text-white text-sm truncate group-hover:text-neon-cyan transition-colors">
                {feed.title}
              </h4>
              <div className="mt-1">
                <span className="text-gray-400 font-mono text-xs">{feed.viewCount} views</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* See More Button */}
      <Link 
        to="/"
        className="block w-full mt-4 border border-neon-cyan text-neon-cyan font-mono text-xs py-2 rounded hover:bg-neon-cyan hover:text-black transition-all text-center"
      >
        SHOW MORE
      </Link>
    </div>
  );
};

export default TopFeeds; 