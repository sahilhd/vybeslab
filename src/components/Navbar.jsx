import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black border-b-2 border-neon-blue shadow-lg shadow-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl font-pixel neon-text text-neon-cyan glitch-hover">
              FEEDS
            </div>
          </Link>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="SEARCH"
                className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-2 font-mono text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/20"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neon-cyan hover:text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="text-neon-cyan font-mono">
              语用化
            </div>

            {/* Action Buttons */}
            <Link 
              to="/upload"
              className="border border-neon-magenta text-neon-magenta px-4 py-2 font-mono text-sm rounded hover:bg-neon-magenta hover:text-black transition-all"
            >
              UPLOAD
            </Link>
            
                    <Link
          to="/glasses"
          className="cyber-button px-4 py-2 font-mono text-sm rounded hover:scale-105 transition-transform flex items-center space-x-2"
        >
          <span>🕶️</span>
          <span>BUY</span>
        </Link>
            
            <button className="border border-neon-green text-neon-green px-4 py-2 font-mono text-sm rounded hover:bg-neon-green hover:text-black transition-all">
              SIGN IN
            </button>

            {/* Profile Icon */}
            <Link 
              to="/profile"
              className="w-8 h-8 bg-neon-magenta rounded border border-neon-magenta flex items-center justify-center hover:bg-neon-magenta/80 transition-colors"
            >
              <span className="text-white font-mono text-xs">👤</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 