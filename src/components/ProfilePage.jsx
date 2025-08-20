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
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue text-white font-mono relative">
      {/* Back Button */}
      <div className="absolute top-12 left-4 z-50">
        <Link 
          to="/app" 
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* Mobile Layout - Hidden on Desktop */}
      <div className="lg:hidden max-w-md mx-auto">
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
                <circle cx="12" cy="12" r="10" fill="black"/>
                <path d="M12 4L14 10L20 12L14 14L12 20L10 14L4 12L10 10L12 4Z" fill="white"/>
                <circle cx="18" cy="6" r="2" fill="#00ff00"/>
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
                to="/app/quests"
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
                  to="/app/quests"
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
      </div>

      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-8 pt-24 max-w-7xl">
          {/* Desktop Header Section */}
          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* Left Column - User Info */}
            <div className="space-y-6">
              {/* User Header - Desktop Version */}
              <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-6 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-neon-cyan">
                    <img 
                      src="/images/profile-picture.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h1 className="text-2xl font-pixel text-neon-cyan mb-2">@aikoflux</h1>
                  <p className="text-gray-400 font-mono text-sm mb-3">Last live just now</p>
                  <p className="text-white font-mono text-sm mb-4">
                    Digital creator & lifestyle enthusiast. Sharing authentic moments from around the world.
                  </p>
                  <div className="text-green-400 font-mono text-sm">Single • Los Angeles, CA</div>
                </div>
              </div>

              {/* Action Buttons - Desktop */}
              <div className="space-y-3">
                <button 
                  onClick={() => setIsLiked(!isLiked)}
                  className={`w-full flex items-center justify-center space-x-3 py-3 rounded-lg font-mono transition-all ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-cyber-black border border-neon-blue text-neon-cyan hover:bg-neon-blue/20'
                  }`}
                >
                  <svg className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>{isLiked ? 'LIKED' : 'LIKE'}</span>
                </button>

                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className={`w-full flex items-center justify-center space-x-3 py-3 rounded-lg font-mono transition-all ${
                    isMuted 
                      ? 'bg-neon-magenta text-white' 
                      : 'bg-cyber-black border border-neon-blue text-neon-cyan hover:bg-neon-blue/20'
                  }`}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  )}
                  <span>{isMuted ? 'MUTED' : 'MUTE'}</span>
                </button>

                <button 
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`w-full flex items-center justify-center space-x-3 py-3 rounded-lg font-mono font-bold transition-all ${
                    isSubscribed 
                      ? 'bg-neon-green text-black shadow-lg shadow-neon-green/30' 
                      : 'bg-cyber-black border border-neon-green text-neon-green hover:bg-neon-green/20'
                  }`}
                >
                  <span className="text-lg">✦</span>
                  <span>{isSubscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}</span>
                </button>
              </div>

              {/* Social Links - Desktop */}
              <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-neon-cyan font-mono text-sm font-bold mb-3">SOCIAL LINKS</h3>
                <div className="space-y-2">
                  <a href="#" className="flex items-center space-x-3 text-neon-green hover:text-white transition-colors">
                    <span className="w-6 h-6 bg-neon-green rounded flex items-center justify-center text-black text-xs font-bold">X</span>
                    <span className="text-sm">@aikoflux</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-red-500 hover:text-white transition-colors">
                    <span className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-white text-xs font-bold">YT</span>
                    <span className="text-sm">@aikoflux</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 text-pink-500 hover:text-white transition-colors">
                    <span className="w-6 h-6 bg-pink-500 rounded flex items-center justify-center text-white text-xs font-bold">IG</span>
                    <span className="text-sm">@aikoflux</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Center Column - Quest Progress & AI */}
            <div className="space-y-6">
              {/* Quest Progress - Desktop */}
              <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-neon-cyan font-pixel text-lg font-bold">🎯 VISION QUEST PROGRESS</h3>
                  <Link 
                    to="/app/quests"
                    className="text-neon-cyan font-mono text-sm hover:text-white transition-colors"
                  >
                    VIEW ALL →
                  </Link>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-dark-blue border border-neon-blue rounded-lg p-4 text-center">
                    <div className="text-neon-green font-mono text-2xl font-bold">{questStats.totalPoints}</div>
                    <div className="text-gray-400 text-sm">TOTAL POINTS</div>
                  </div>
                  <div className="bg-dark-blue border border-neon-blue rounded-lg p-4 text-center">
                    <div className="text-neon-cyan font-mono text-2xl font-bold">{questStats.totalCompleted}</div>
                    <div className="text-gray-400 text-sm">COMPLETED</div>
                  </div>
                </div>

                {/* Recent Achievements */}
                {completedQuests.length > 0 ? (
                  <div>
                    <div className="text-gray-400 text-sm mb-3">RECENT QUEST:</div>
                    <div className="bg-dark-blue border border-neon-blue rounded-lg p-4 flex items-center space-x-4">
                      <span className="text-3xl">{completedQuests[completedQuests.length - 1]?.brandIcon || '🏆'}</span>
                      <div className="flex-1">
                        <div className="text-white font-mono text-sm">
                          {completedQuests[completedQuests.length - 1]?.title || 'No quests completed'}
                        </div>
                        <div className="text-neon-green text-sm">
                          +{completedQuests[completedQuests.length - 1]?.reward || 0} pts
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <div className="text-gray-500 text-sm mb-2">No stream quests completed yet</div>
                    <Link 
                      to="/app/quests"
                      className="text-neon-green font-mono text-sm hover:text-white transition-colors"
                    >
                      Start streaming to earn points!
                    </Link>
                  </div>
                )}
              </div>

              {/* AI Assistant - Desktop */}
              <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-neon-cyan font-pixel text-lg font-bold mb-4">🤖 FEEDS AI ASSISTANT</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  Get instant answers about products, locations, and recommendations from your streams.
                </p>
                <button 
                  onClick={() => setIsAIOpen(true)}
                  className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue text-black py-3 rounded-lg font-mono font-bold hover:shadow-lg hover:shadow-neon-cyan/30 transition-all"
                >
                  OPEN AI CHAT
                </button>
              </div>
            </div>

            {/* Right Column - Gallery Grid */}
            <div>
              <div className="bg-cyber-black/90 border border-neon-blue rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-neon-cyan font-pixel text-lg font-bold mb-4">MY FEED GALLERY</h3>
                <div className="space-y-4">
                  {/* Featured Feed */}
                  <div className="relative">
                    <div className="aspect-video bg-dark-blue rounded-lg overflow-hidden border border-neon-blue">
                      <img 
                        src="/images/visvim-shopping.png"
                        alt="Featured Feed"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-neon-green text-black px-2 py-1 rounded text-xs font-mono font-bold">
                        NEW
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-white font-mono text-sm">Shopping at Visvim in Carmel</div>
                      <div className="text-gray-400 font-mono text-xs">12.4K views</div>
                    </div>
                  </div>

                  {/* Recent Feeds Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {feeds.filter(feed => feed.category === 'MY CIRCLE').slice(0, 4).map((feed, index) => (
                      <div key={feed.id} className="relative">
                        <div className="aspect-video bg-dark-blue rounded-lg overflow-hidden border border-neon-blue">
                          <img 
                            src={feed.thumbnail}
                            alt={feed.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="mt-2">
                          <div className="text-white font-mono text-xs truncate">{feed.title}</div>
                          <div className="text-gray-400 font-mono text-xs">{feed.viewCount}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feeds AI Chat Widget */}
      <FeedsAI 
        isOpen={isAIOpen} 
        onClose={() => setIsAIOpen(false)}
      />
    </div>
  );
};

export default ProfilePage; 