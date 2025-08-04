import { Link, useLocation } from 'react-router-dom';

const MobileBottomNav = () => {
  const location = useLocation();

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
              <span className={`text-xs font-mono ${isActive ? 'text-white' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav; 