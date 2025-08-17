import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import FeedsAI from './FeedsAI';

const BottomTabBar = () => {
  const location = useLocation();
  const [isAIOpen, setIsAIOpen] = useState(false);

  const tabs = [
    {
      id: 'home',
      label: 'Home',
      path: '/',
      icon: (isActive) => (
        <svg className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      id: 'browse',
      label: 'Browse',
      path: '/browse',
      icon: (isActive) => (
        <svg className={`w-6 h-6 ${isActive ? 'text-white' : 'text-gray-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      id: 'live',
      label: 'Live',
      path: '/glasses',
      icon: (isActive) => (
        <div className={`text-2xl ${isActive ? 'text-green-500' : 'text-gray-500'}`}>
          🕶️
        </div>
      )
    },
    {
      id: 'ai',
      label: 'AI',
      path: '/ai',
      icon: (isActive) => (
        <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${isActive ? 'bg-cyan-500 border-cyan-400 text-black' : 'bg-gray-700 border-gray-500 text-gray-400'}`}>
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
      )
    },
    {
      id: 'profile',
      label: 'Profile',
      path: '/profile',
      icon: (isActive) => (
        <div className={`w-6 h-6 rounded-full overflow-hidden border-2 ${isActive ? 'border-white' : 'border-gray-500'}`}>
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      )
    }
  ];

  return (
    <>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-black/90 backdrop-blur-sm border-t border-gray-800">
        <div className="flex items-center justify-around py-2 px-4">
          {tabs.map((tab) => {
            const isActive = tab.id === 'ai' ? isAIOpen : location.pathname === tab.path;
            
            if (tab.id === 'ai') {
              return (
                <button
                  key={tab.id}
                  onClick={() => setIsAIOpen(true)}
                  className="flex flex-col items-center py-2 px-3 min-w-[60px]"
                >
                  <div className="mb-1">
                    {tab.icon(isActive)}
                  </div>
                  <span className={`text-xs font-mono ${isActive ? 'text-white' : 'text-gray-500'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            }
            
            return (
              <Link
                key={tab.id}
                to={tab.path}
                className="flex flex-col items-center py-2 px-3 min-w-[60px]"
              >
                <div className="mb-1">
                  {tab.icon(isActive)}
                </div>
                <span className={`text-xs font-mono ${isActive ? 'text-white' : 'text-gray-500'}`}>
                  {tab.label}
                </span>
              </Link>
            );
          })}
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

export default BottomTabBar; 