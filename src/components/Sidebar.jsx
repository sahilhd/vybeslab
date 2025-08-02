import { categories } from '../mockData';

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="w-64 bg-cyber-black/90 border-r border-neon-blue h-full overflow-y-auto">
      <div className="p-4">
        <h2 className="text-xl font-pixel neon-text text-neon-cyan mb-6">
          CATEGORIES
        </h2>
        
        <div className="space-y-2">
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`w-full text-left px-4 py-3 font-mono text-sm transition-all duration-200 rounded glitch-hover ${
              selectedCategory === 'ALL'
                ? 'bg-neon-blue text-white shadow-lg shadow-neon-blue/50 neon-border'
                : 'text-neon-cyan hover:bg-neon-blue/20 hover:text-white border border-transparent hover:border-neon-cyan'
            }`}
          >
            ALL FEEDS
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-full text-left px-4 py-3 font-mono text-sm transition-all duration-200 rounded glitch-hover ${
                selectedCategory === category
                  ? 'bg-neon-blue text-white shadow-lg shadow-neon-blue/50 neon-border'
                  : 'text-neon-cyan hover:bg-neon-blue/20 hover:text-white border border-transparent hover:border-neon-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Premium Section */}
        <div className="mt-8 p-4 bg-gradient-to-br from-electric-purple/20 to-neon-magenta/20 border border-neon-magenta rounded">
          <h3 className="font-pixel text-neon-magenta mb-2">TOP PREMIUM</h3>
          <div className="text-xs font-mono text-gray-300 space-y-1">
            <div>@lana - 13.3M subscribers</div>
            <div>@theonegamng - 8.2M subscribers</div>
            <div>@venueworld - 4.8M subscribers</div>
            <div>@eliekmn - 3.1M subscribers</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 