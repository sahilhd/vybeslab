import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './UserHeader';
import GalleryGrid from './GalleryGrid';
import BottomTabBar from './BottomTabBar';
import FeedsAI from './FeedsAI';

const ProfilePage = ({ feeds = [] }) => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [completedQuests, setCompletedQuests] = useState([]);
  const [questStats, setQuestStats] = useState({ totalPoints: 0, totalCompleted: 0 });

  useEffect(() => {
    // Load completed quests from localStorage
    const completed = JSON.parse(localStorage.getItem('completedQuests') || '[]');
    setCompletedQuests(completed);
    
    // Calculate stats
    const totalPoints = completed.reduce((sum, quest) => sum + quest.reward, 0);
    setQuestStats({
      totalPoints,
      totalCompleted: completed.length
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative max-w-md mx-auto">
      {/* Back Button */}
      <div className="absolute top-12 left-4 z-50">
        <Link 
          to="/" 
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* User Header */}
      <UserHeader />

      {/* Action Buttons */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          {/* Like Button */}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-3 min-w-[70px] justify-center"
          >
            <svg className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          {/* AI Button */}
          <button 
            onClick={() => setIsAIOpen(true)}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg px-4 py-3 min-w-[70px] justify-center border border-cyan-400 hover:scale-105 transition-transform"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
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
          </button>

          {/* Mute Button */}
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-3 min-w-[70px] justify-center"
          >
            {isMuted ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>

        {/* Subscribe Button - Full Width Below */}
        <button 
          onClick={() => setIsSubscribed(!isSubscribed)}
          className={`w-full flex items-center justify-center space-x-2 rounded-lg px-6 py-3 font-bold ${
            isSubscribed 
              ? 'bg-green-500 text-black' 
              : 'bg-gray-800 text-white border border-green-500'
          }`}
        >
          <span className="text-lg">✦</span>
          <span className="text-sm font-mono">
            {isSubscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
          </span>
        </button>
      </div>

      {/* Quest Progress Section */}
      <div className="px-6 mb-6">
        <div className="bg-gray-900 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-green-400 font-mono text-sm font-bold">🎯 VISION QUEST PROGRESS</h3>
            <Link 
              to="/quests"
              className="text-green-400 font-mono text-xs hover:text-green-300 transition-colors"
            >
              VIEW ALL →
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-black rounded p-3 text-center">
              <div className="text-green-400 font-mono text-lg font-bold">{questStats.totalPoints}</div>
              <div className="text-gray-400 text-xs">TOTAL POINTS</div>
            </div>
            <div className="bg-black rounded p-3 text-center">
              <div className="text-cyan-400 font-mono text-lg font-bold">{questStats.totalCompleted}</div>
              <div className="text-gray-400 text-xs">COMPLETED</div>
            </div>
          </div>

          {/* Recent Achievements */}
          {completedQuests.length > 0 ? (
            <div>
              <div className="text-gray-400 text-xs mb-2">RECENT QUEST:</div>
              <div className="bg-black rounded p-2 flex items-center space-x-3">
                <span className="text-xl">{completedQuests[completedQuests.length - 1]?.brandIcon || '🏆'}</span>
                <div className="flex-1">
                  <div className="text-white text-xs font-mono">
                    {completedQuests[completedQuests.length - 1]?.title || 'No quests completed'}
                  </div>
                  <div className="text-green-400 text-xs">
                    +{completedQuests[completedQuests.length - 1]?.reward || 0} pts
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <div className="text-gray-500 text-xs">No stream quests completed yet</div>
              <Link 
                to="/quests"
                className="text-green-400 font-mono text-xs hover:text-green-300 transition-colors"
              >
                Start streaming to earn points!
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid feeds={feeds} />

      {/* Bottom Tab Bar */}
      <BottomTabBar />

      {/* Feeds AI Chat Widget */}
      <FeedsAI 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)}
      />
    </div>
  );
};

export default ProfilePage; 