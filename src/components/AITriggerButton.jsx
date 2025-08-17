import { useState } from 'react';
import FeedsAI from './FeedsAI';

const AITriggerButton = ({ currentStreamId = null }) => {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <>
      {/* Floating AI Button */}
      <button
        onClick={() => setIsAIOpen(true)}
        className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-40 group"
        title="Ask Feeds AI about products"
      >
        <div className="relative">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 bg-neon-cyan rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse"></div>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center border-2 border-neon-cyan/50 hover:scale-110 transition-transform duration-300 shadow-xl shadow-neon-cyan/30">
            {/* Custom AI Logo */}
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
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
            
            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-neon-green rounded-full border-2 border-cyber-black flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Hover Label */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-cyber-black border border-neon-cyan text-neon-cyan px-3 py-1 rounded font-mono text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Ask about products
          </div>
        </div>
      </button>

      {/* Feeds AI Chat Widget */}
      <FeedsAI 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)}
        currentStreamId={currentStreamId}
      />
    </>
  );
};

export default AITriggerButton; 