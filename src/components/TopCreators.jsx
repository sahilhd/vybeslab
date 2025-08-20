import { useState } from 'react';
import { topCreators } from '../mockData';
import Stories from './Stories';

const TopCreators = () => {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);

  const handleCreatorClick = (creator) => {
    console.log('Creator clicked:', creator);
    console.log('Has stories:', creator.hasStories);
    if (creator.hasStories) {
      console.log('Opening stories for:', creator.username);
      alert(`Opening stories for ${creator.username}!`); // Temporary test
      setSelectedCreator(creator);
      setIsStoriesOpen(true);
    }
  };

  const handleCloseStories = () => {
    setIsStoriesOpen(false);
    setSelectedCreator(null);
  };

  return (
    <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-3 lg:p-4">
      <div className="flex items-center justify-between mb-3 lg:mb-4">
        <h3 className="font-pixel text-neon-cyan text-base lg:text-lg neon-text">TOP CREATORS</h3>
        {topCreators.some(creator => creator.hasStories) && (
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            <span className="text-neon-cyan font-mono text-xs">STORIES AVAILABLE</span>
          </div>
        )}
      </div>
      
      <div className="space-y-3">
        {topCreators.map((creator, index) => (
          <div 
            key={creator.id} 
            className={`flex items-center space-x-3 p-2 rounded transition-colors ${
              creator.hasStories 
                ? 'hover:bg-neon-cyan/10 cursor-pointer' 
                : 'hover:bg-neon-blue/10 cursor-default'
            }`}
            onClick={() => handleCreatorClick(creator)}
          >
            <div className="flex-shrink-0 w-6 h-6 bg-neon-magenta rounded flex items-center justify-center">
              <span className="font-mono text-xs text-white">{index + 1}</span>
            </div>
            
            <div className="flex-shrink-0 relative">
              <div className={`w-8 h-8 rounded-full overflow-hidden border-2 ${
                creator.hasStories 
                  ? 'border-neon-cyan ring-2 ring-neon-cyan/50' 
                  : 'border-neon-blue'
              }`}>
                <img 
                  src={creator.avatar} 
                  alt={creator.username}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Story Ring Indicator */}
              {creator.hasStories && (
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan animate-spin opacity-75">
                  <div className="absolute inset-0.5 rounded-full bg-black"></div>
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className={`font-mono text-sm truncate transition-colors ${
                creator.hasStories 
                  ? 'text-neon-cyan hover:text-white' 
                  : 'text-white hover:text-neon-cyan'
              }`}>
                {creator.username}
                {creator.hasStories && (
                  <span className="ml-2 text-xs">📱</span>
                )}
              </h4>
              <p className="text-gray-400 font-mono text-xs truncate">
                {creator.subscribers}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <button className="w-full mt-4 border border-neon-magenta text-neon-magenta font-mono text-xs py-2 rounded hover:bg-neon-magenta hover:text-black transition-all">
        VIEW ALL
      </button>

      {/* Stories Component */}
      <Stories 
        creator={selectedCreator}
        isOpen={isStoriesOpen}
        onClose={handleCloseStories}
      />
    </div>
  );
};

export default TopCreators; 