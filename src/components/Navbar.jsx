import { useState } from 'react';
import { Link } from 'react-router-dom';
import FeedsAI from './FeedsAI';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-0">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-20">
          {/* Logo - aligned with categories */}
          <Link to="/" className="flex items-center group -ml-4">
            <div className="text-3xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan group-hover:from-white group-hover:to-neon-cyan transition-all duration-500 neon-text-enhanced">
              FEEDS
            </div>
          </Link>

          {/* Center Section - Search */}
          <div className="flex-1 max-w-md mx-12">
            <div className="relative group">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search feeds..."
                className="w-full bg-black/40 border border-neon-cyan/30 rounded-full px-6 py-3 font-mono text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:bg-black/60 transition-all duration-300 backdrop-blur-sm"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neon-cyan hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons - Clean & Minimal */}
          <div className="flex items-center space-x-3 pr-6">
            {/* GO LIVE Button */}
            <Link 
              to="/app/live"
              className="relative group bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 font-mono text-sm rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                <span>GO LIVE</span>
              </span>
            </Link>

            {/* BUY GLASSES Button */}
            <Link
              to="/app/glasses"
              className="relative group bg-gradient-to-r from-neon-cyan to-neon-blue text-white px-4 py-2 font-mono text-sm rounded-full shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <span>🕶️</span>
                <span>BUY</span>
              </span>
            </Link>

            {/* QUESTS Button */}
            <Link 
              to="/app/quests"
              className="relative group bg-gradient-to-r from-neon-magenta to-purple-600 text-white px-4 py-2 font-mono text-sm rounded-full shadow-lg shadow-neon-magenta/30 hover:shadow-neon-magenta/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-2">
                <span>🎯</span>
                <span>QUESTS</span>
              </span>
            </Link>

            {/* Profile Button - Clean & Elegant */}
            <Link 
              to="/app/profile"
              className="relative group w-12 h-12 rounded-full overflow-hidden shadow-lg shadow-neon-green/30 hover:shadow-neon-green/50 transition-all duration-300"
            >
              <img 
                src="/images/profile-picture.jpg"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group -ml-4">
            <div className="text-2xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan group-hover:from-white group-hover:to-neon-cyan transition-all duration-500 neon-text-enhanced">
              FEEDS
            </div>
          </Link>

          {/* Mobile Actions - Clean & Minimal */}
          <div className="flex items-center space-x-3 pr-6">
            {/* GO LIVE Button */}
            <Link 
              to="/app/live"
              className="relative group bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 font-mono text-xs rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                <span>LIVE</span>
              </span>
            </Link>
            
            {/* BUY GLASSES Button */}
            <Link
              to="/app/glasses"
              className="relative group bg-gradient-to-r from-neon-cyan to-neon-blue text-white px-3 py-2 font-mono text-xs rounded-full shadow-lg shadow-neon-cyan/30 hover:shadow-neon-cyan/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-1">
                <span>🕶️</span>
                <span>BUY</span>
              </span>
            </Link>

            {/* QUESTS Button */}
            <Link 
              to="/app/quests"
              className="relative group bg-gradient-to-r from-neon-magenta to-purple-600 text-white px-3 py-2 font-mono text-xs rounded-full shadow-lg shadow-neon-magenta/30 hover:shadow-neon-magenta/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-neon-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center space-x-1">
                <span>🎯</span>
                <span>QUESTS</span>
              </span>
            </Link>

            {/* Menu Toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-10 h-10 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full shadow-lg shadow-gray-600/30 hover:shadow-gray-600/50 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="relative w-5 h-5 mx-auto mt-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Profile Icon */}
            <Link 
              to="/app/profile"
              className="relative group w-10 h-10 rounded-full overflow-hidden shadow-lg shadow-neon-green/30 hover:shadow-neon-green/50 transition-all duration-300"
            >
              <img 
                src="/images/profile-picture.jpg"
                alt="Profile"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Mobile Search Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-neon-cyan/20 bg-black/90 backdrop-blur-xl p-6">
            <div className="relative mb-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search feeds..."
                className="w-full bg-black/40 border border-neon-cyan/30 rounded-full px-6 py-3 font-mono text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:bg-black/60 transition-all duration-300 backdrop-blur-sm"
              />
            </div>
            
            {/* Mobile Action Buttons - Clean Grid */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/app/upload"
                className="bg-gradient-to-r from-neon-magenta to-purple-600 text-white px-4 py-3 font-mono text-sm rounded-lg text-center hover:shadow-lg hover:shadow-neon-magenta/30 transition-all duration-300"
              >
                UPLOAD
              </Link>
              
              <Link
                to="/app/glasses"
                className="bg-gradient-to-r from-neon-cyan to-neon-blue text-white px-4 py-3 font-mono text-sm rounded-lg text-center hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
              >
                BUY GLASSES
              </Link>
              
              <Link
                to="/app/quests"
                className="bg-gradient-to-r from-neon-green to-emerald-600 text-white px-4 py-3 font-mono text-sm rounded-lg text-center hover:shadow-lg hover:shadow-neon-green/30 transition-all duration-300 col-span-2"
              >
                🎯 VISION QUESTS
              </Link>
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