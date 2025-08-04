import { topCreators } from '../mockData';

const TopCreators = () => {
  return (
    <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-3 lg:p-4">
      <h3 className="font-pixel text-neon-cyan text-base lg:text-lg mb-3 lg:mb-4 neon-text">TOP CREATORS</h3>
      
      <div className="space-y-3">
        {topCreators.map((creator, index) => (
          <div key={creator.id} className="flex items-center space-x-3 p-2 rounded hover:bg-neon-blue/10 transition-colors cursor-pointer">
            <div className="flex-shrink-0 w-6 h-6 bg-neon-magenta rounded flex items-center justify-center">
              <span className="font-mono text-xs text-white">{index + 1}</span>
            </div>
            
            <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-neon-cyan">
              <img 
                src={creator.avatar} 
                alt={creator.username}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-mono text-white text-sm truncate hover:text-neon-cyan transition-colors">
                {creator.username}
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
    </div>
  );
};

export default TopCreators; 