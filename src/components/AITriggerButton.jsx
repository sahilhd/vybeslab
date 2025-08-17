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
            {/* Gemini AI Icon */}
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
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