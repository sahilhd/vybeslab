import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeedsAI from './FeedsAI';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-black border-b-2 border-neon-blue shadow-lg shadow-neon-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-16">
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
            
            <button
              onClick={() => setIsAIOpen(true)}
              className="border border-neon-cyan text-neon-cyan px-4 py-2 font-mono text-sm rounded hover:bg-neon-cyan hover:text-black transition-all flex items-center space-x-2"
            >
              <span>🤖</span>
              <span>AI</span>
            </button>

            <Link 
              to="/quests"
              className="border border-neon-magenta text-neon-magenta px-4 py-2 font-mono text-sm rounded hover:bg-neon-magenta hover:text-black transition-all flex items-center space-x-2"
            >
              <span>🎯</span>
              <span>QUESTS</span>
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

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-xl font-pixel neon-text text-neon-cyan">
              FEEDS
            </div>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-3">
            {/* Search Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neon-cyan text-lg"
            >
              🔍
            </button>
            
            {/* Profile Icon */}
            <Link 
              to="/profile"
              className="w-8 h-8 bg-neon-magenta rounded border border-neon-magenta flex items-center justify-center"
            >
              <span className="text-white font-mono text-xs">👤</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neon-blue/50 bg-cyber-black p-4">
            <div className="relative mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="SEARCH"
                className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-2 font-mono text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan transition-colors"
              />
            </div>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-wrap gap-2">
              <Link
                to="/upload"
                className="border border-neon-magenta text-neon-magenta px-3 py-2 font-mono text-xs rounded flex-1 text-center"
              >
                UPLOAD
              </Link>
              
              <Link
                to="/quests"
                className="border border-neon-magenta text-neon-magenta px-3 py-2 font-mono text-xs rounded flex items-center justify-center space-x-1 flex-1"
              >
                <span>🎯</span>
                <span>QUESTS</span>
              </Link>

              <Link
                to="/glasses"
                className="cyber-button px-3 py-2 font-mono text-xs rounded flex items-center justify-center space-x-1 flex-1"
              >
                <span>🕶️</span>
                <span>BUY</span>
              </Link>
              
              <button className="border border-neon-green text-neon-green px-3 py-2 font-mono text-xs rounded flex-1">
                SIGN IN
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Feeds AI Chat Widget */}
      <FeedsAI 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)}
      />
    </nav>
  );
};

export default Navbar; 