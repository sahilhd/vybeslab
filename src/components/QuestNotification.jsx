import { useState, useEffect } from 'react';

const QuestNotification = ({ quest, onComplete, onClose }) => {
  const [stage, setStage] = useState('detecting'); // detecting -> found -> rewarded
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!quest) return;

    // Simulate AI detection process
    const detectionTimer = setTimeout(() => {
      setStage('found');
    }, 3000); // 3 seconds to "detect"

    const rewardTimer = setTimeout(() => {
      setStage('rewarded');
      if (onComplete) {
        onComplete(quest);
      }
    }, 5000); // 2 more seconds to show reward

    const closeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 500); // Allow for fade out animation
    }, 8000); // Close after total 8 seconds

    return () => {
      clearTimeout(detectionTimer);
      clearTimeout(rewardTimer);
      clearTimeout(closeTimer);
    };
  }, [quest, onComplete, onClose]);

  if (!quest || !isVisible) return null;

  const getStageContent = () => {
    switch (stage) {
      case 'detecting':
        return {
          icon: '🔍',
          title: 'AI ANALYZING...',
          message: `Validating your ${quest.detectProduct} activity`,
          color: 'text-yellow-400',
          bgColor: 'from-yellow-500/20 to-orange-500/20',
          animation: 'animate-pulse'
        };
      case 'found':
        return {
          icon: '✅',
          title: 'ACTIVITY VALIDATED!',
          message: `${quest.detectProduct} confirmed in your stream!`,
          color: 'text-neon-green',
          bgColor: 'from-green-500/20 to-neon-green/20',
          animation: 'animate-bounce'
        };
      case 'rewarded':
        return {
          icon: '🎉',
          title: 'QUEST COMPLETED!',
          message: `+${quest.reward} Points Earned!`,
          color: 'text-neon-cyan',
          bgColor: 'from-neon-cyan/20 to-blue-500/20',
          animation: 'animate-pulse'
        };
      default:
        return null;
    }
  };

  const content = getStageContent();
  if (!content) return null;

  return (
    <div className={`fixed top-24 right-4 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
      <div className={`bg-gradient-to-r ${content.bgColor} backdrop-blur border border-neon-blue rounded-lg p-4 max-w-sm shadow-lg shadow-neon-blue/20`}>
        {/* Quest Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-mono text-gray-400">VISION QUEST</span>
            <span className="text-xs bg-neon-blue/20 text-neon-cyan px-2 py-1 rounded">
              {quest.brand}
            </span>
          </div>
          <button 
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose && onClose(), 500);
            }}
            className="text-gray-400 hover:text-white text-xs"
          >
            ✕
          </button>
        </div>

        {/* Main Content */}
        <div className="text-center">
          <div className={`text-4xl mb-2 ${content.animation}`}>
            {content.icon}
          </div>
          <h3 className={`font-pixel ${content.color} text-lg mb-2`}>
            {content.title}
          </h3>
          <p className="text-white font-mono text-sm mb-3">
            {content.message}
          </p>

          {/* Progress Bar */}
          {stage === 'detecting' && (
            <div className="w-full bg-gray-700 rounded-full h-2 mb-3">
              <div className="bg-yellow-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
          )}

          {/* Quest Details */}
          <div className="bg-cyber-black/50 rounded p-2 text-xs font-mono">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">{quest.title}</span>
              <span className={content.color}>+{quest.reward} PTS</span>
            </div>
          </div>
        </div>

        {/* Action Button for final stage */}
        {stage === 'rewarded' && (
          <button 
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose && onClose(), 500);
            }}
            className="w-full mt-3 bg-neon-cyan text-black font-mono text-sm py-2 rounded hover:bg-neon-cyan/80 transition-colors"
          >
            CONTINUE STREAMING
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestNotification; 