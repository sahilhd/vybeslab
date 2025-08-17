import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import FeedsAI from './FeedsAI';

const MobileBottomNav = () => {
  const location = useLocation();
  const [isAIOpen, setIsAIOpen] = useState(false);

  const tabs = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: (isActive) => (
        <svg className={`w-6 h-6 ${isActive ? 'text-neon-cyan' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'upload',
      label: 'Upload',
      path: '/upload',
      icon: (isActive) => (
        <svg className={`w-6 h-6 ${isActive ? 'text-neon-magenta' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      )
    },

    {
      id: 'glasses',
      label: 'Shop',
      path: '/glasses',
      icon: (isActive) => (
        <div className={`text-2xl ${isActive ? 'text-neon-green' : 'text-gray-500'}`}>
          🕶️
        </div>
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      path: '/profile',
      icon: (isActive) => (
        <div className={`w-6 h-6 rounded-full overflow-hidden border-2 ${isActive ? 'border-neon-magenta' : 'border-gray-500'}`}>
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  ];

  // Only show on mobile and tablet
  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-cyber-black/95 backdrop-blur-sm border-t border-neon-blue/50 z-50">
        <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className="flex flex-col items-center py-2 px-3 min-w-[60px]"
              >
                <div className="mb-1">
                  {tab.icon(isActive)}
                </div>
                <span className={`text-xs font-mono ${isActive ? 'text-white' : 'text-gray-500'} truncate`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
          
          {/* AI Button */}
          <button
            onClick={() => setIsAIOpen(true)}
            className="flex flex-col items-center py-2 px-3 min-w-[60px]"
          >
            <div className="mb-1">
              <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${isAIOpen ? 'bg-neon-cyan border-neon-cyan text-black' : 'bg-gray-700 border-gray-500 text-gray-400'}`}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  {/* Glow Effect */}
                  <circle cx="12" cy="12" r="11" fill="url(#glow)" opacity="0.6"/>
                  {/* Main Circle with Gradient */}
                  <circle cx="12" cy="12" r="10" fill="url(#mainGradient)"/>
                  {/* Four-pointed Star/Diamond */}
                  <path d="M12 4L14 10L20 12L14 14L12 20L10 14L4 12L10 10L12 4Z" fill="black"/>
                  {/* Notification Dot */}
                  <circle cx="18" cy="6" r="2" fill="#00ff00"/>
                  {/* Gradients */}
                  <defs>
                    <linearGradient id="mainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#4facfe"/>
                      <stop offset="100%" stopColor="#00f2fe"/>
                    </linearGradient>
                    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#4facfe" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#4facfe" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <span className={`text-xs font-mono ${isAIOpen ? 'text-white' : 'text-gray-500'} truncate`}>
              AI
            </span>
          </button>
        </div>
      </div>

      {/* Feeds AI Chat Widget */}
      <FeedsAI 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)}
      />
    </>
  );
};

export default MobileBottomNav; 