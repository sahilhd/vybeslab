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
          <span className="font-mono font-bold text-xs">AI</span>
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