import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MobileBottomNav from './MobileBottomNav';
import AITriggerButton from './AITriggerButton';
import QuestNotification from './QuestNotification';

const StreamView = ({ feeds }) => {
  const { id } = useParams();
  const [feed, setFeed] = useState(null);
  const [progress, setProgress] = useState(67); // Mock progress
  const [isLive, setIsLive] = useState(true);
  const [activeQuest, setActiveQuest] = useState(null);
  const [showQuestNotification, setShowQuestNotification] = useState(false);

  useEffect(() => {
    const foundFeed = feeds.find(f => f.id === parseInt(id));
    setFeed(foundFeed);

    // Check for active quest when component loads
    const questData = localStorage.getItem('activeQuest');
    if (questData) {
      const quest = JSON.parse(questData);
      setActiveQuest(quest);
      
      // Start AI detection simulation after a delay
      const detectionTimer = setTimeout(() => {
        console.log('Starting quest detection for:', quest.title);
        setShowQuestNotification(true);
      }, 3000); // Start detection 3 seconds after page load

      return () => clearTimeout(detectionTimer);
    }
  }, [id, feeds]);

  const handleQuestComplete = (quest) => {
    console.log('Quest completed:', quest.title);
    // Save completed quest to localStorage
    const completedQuests = JSON.parse(localStorage.getItem('completedQuests') || '[]');
    completedQuests.push(quest);
    localStorage.setItem('completedQuests', JSON.stringify(completedQuests));
    
    // Clear active quest
    localStorage.removeItem('activeQuest');
  };

  const handleCloseQuestNotification = () => {
    setShowQuestNotification(false);
    setActiveQuest(null);
  };

  if (!feed) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-neon-cyan font-pixel text-2xl">LOADING...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black">
      {/* Back Button */}
      <div className="p-4">
        <Link 
          to="/app" 
          className="inline-flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors font-mono"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>BACK TO FEEDS</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-20 lg:pb-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-cyber-black rounded-lg overflow-hidden border-2 border-neon-blue">
              {/* Live Indicator */}
              {isLive && (
                <div className="absolute top-4 left-4 z-10 bg-neon-green px-3 py-1 rounded font-mono text-sm text-black animate-pulse">
                  ● LIVE
                </div>
              )}

              {/* Premium Badge */}
              {feed.isPremium && (
                <div className="absolute top-4 right-4 z-10 premium-badge px-3 py-1 rounded font-mono text-sm text-white">
                  PREMIUM
                </div>
              )}

              {/* Video */}
              {feed.videoUrl ? (
                feed.videoUrl.includes('youtube.com') || feed.videoUrl.includes('youtu.be') ? (
                  <iframe
                    src={feed.videoUrl.includes('embed') ? feed.videoUrl : feed.videoUrl.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/')}
                    title={feed.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                    poster={feed.thumbnail}
                  >
                    <source src={feed.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-dark-blue">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🎬</div>
                    <h3 className="text-2xl font-pixel text-neon-cyan mb-2">Video Coming Soon</h3>
                    <p className="text-gray-400 font-mono">This creator hasn't uploaded their stream yet.</p>
                    <p className="text-neon-magenta font-mono text-sm mt-2">Try the "🔥 FEEDS Demo Stream" for a working example!</p>
                  </div>
                </div>
              )}

              {/* Live Status - Moved to top left to avoid blocking video controls */}
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                <div className="flex items-center space-x-4 text-white">
                  <span className="font-mono text-sm">{feed.viewCount} watching</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse"></div>
                    <span className="font-mono text-sm">LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stream Info */}
            <div className="mt-6 space-y-4">
              <div>
                <h1 className="text-2xl font-pixel text-white mb-2">{feed.title}</h1>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-neon-cyan font-mono">{feed.creator}</span>
                    <span className="text-gray-400 font-mono text-sm">#{feed.category}</span>
                  </div>
                  
                  {/* FOLLOW and TIP buttons - moved here from video overlay */}
                  <div className="flex items-center space-x-2">
                    <button className="cyber-button px-4 py-2 text-sm rounded hover:scale-105 transition-transform">
                      FOLLOW
                    </button>
                    <button className="border border-neon-magenta text-neon-magenta px-4 py-2 text-sm rounded hover:bg-neon-magenta hover:text-black transition-all">
                      TIP
                    </button>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 font-mono">{feed.description}</p>

              {/* Progress Bar */}
              <div className="bg-dark-blue rounded-lg p-4 border border-neon-blue">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-neon-cyan">STREAM GOAL</span>
                  <span className="font-mono text-white">{progress}%</span>
                </div>
                <div className="w-full bg-cyber-black rounded-full h-3 border border-neon-blue">
                  <div 
                    className="bg-gradient-to-r from-neon-green to-neon-cyan h-full rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-sm font-mono text-gray-400">
                  $2,340 / $3,500 goal
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Creator Info */}
            <div className="bg-cyber-black border border-neon-blue rounded-lg p-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-neon-magenta rounded-full flex items-center justify-center text-white font-mono">
                  {feed.creator.charAt(1).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-mono text-white">{feed.creator}</h3>
                  <p className="text-gray-400 font-mono text-sm">156K subscribers</p>
                </div>
              </div>
              
              <button className="w-full cyber-button py-2 font-mono text-sm rounded mb-3">
                SUBSCRIBE
              </button>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-neon-cyan hover:text-white transition-colors">
                  <div className="w-8 h-8 border border-current rounded flex items-center justify-center">
                    TT
                  </div>
                </a>
                <a href="#" className="text-neon-magenta hover:text-white transition-colors">
                  <div className="w-8 h-8 border border-current rounded flex items-center justify-center">
                    IG
                  </div>
                </a>
                <a href="#" className="text-neon-green hover:text-white transition-colors">
                  <div className="w-8 h-8 border border-current rounded flex items-center justify-center">
                    YT
                  </div>
                </a>
              </div>
            </div>

            {/* Chat/Comments Section */}
            <div className="bg-cyber-black border border-neon-blue rounded-lg p-4 h-96">
              <h3 className="font-pixel text-neon-cyan mb-4">LIVE CHAT</h3>
              
              <div className="space-y-3 h-64 overflow-y-auto mb-4">
                <div className="flex space-x-2">
                  <span className="text-neon-green font-mono text-sm">@user123:</span>
                  <span className="text-white font-mono text-sm">Amazing stream! 🔥</span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-neon-cyan font-mono text-sm">@viewer456:</span>
                  <span className="text-white font-mono text-sm">Love the vibes!</span>
                </div>
                <div className="flex space-x-2">
                  <span className="text-neon-magenta font-mono text-sm">@fan789:</span>
                  <span className="text-white font-mono text-sm">This is so cool 😎</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <input 
                  type="text" 
                  placeholder="Type message..."
                  className="flex-1 bg-dark-blue border border-neon-blue rounded px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-neon-cyan"
                />
                <button className="cyber-button px-4 py-2 rounded font-mono text-sm">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
      
      {/* AI Assistant */}
      <AITriggerButton currentStreamId={id} />

      {/* Quest Notification */}
      {showQuestNotification && activeQuest && (
        <QuestNotification 
          quest={activeQuest}
          onComplete={handleQuestComplete}
          onClose={handleCloseQuestNotification}
        />
      )}
      
      {/* Debug Info - Remove this after testing */}
      {activeQuest && (
        <div className="fixed bottom-4 left-4 z-50 bg-black/80 text-white p-2 rounded text-xs">
          Active Quest: {activeQuest.title} | Show: {showQuestNotification ? 'Yes' : 'No'}
        </div>
      )}
    </div>
  );
};

export default StreamView; 