import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MobileBottomNav from './MobileBottomNav';

const VisionQuest = () => {
  const navigate = useNavigate();
  const [completedQuests, setCompletedQuests] = useState([]);
  const [activeQuests, setActiveQuests] = useState([]);
  const [userPoints, setUserPoints] = useState(1250);

  useEffect(() => {
    // Load completed and active quests from localStorage
    const saved = JSON.parse(localStorage.getItem('completedQuests') || '[]');
    const active = JSON.parse(localStorage.getItem('activeQuest') || 'null');
    setCompletedQuests(saved);
    if (active) {
      setActiveQuests([active]);
    }
  }, []);

  const quests = [
    {
      id: 1,
      title: 'Erewhon Wellness Quest',
      brand: 'Erewhon',
      brandIcon: '🥤',
      description: 'Grab the limited-edition Erewhon x Vacation "Sunscreen" Smoothie and show your wellness journey!',
      reward: 600,
      difficulty: 'EASY',
      category: 'WELLNESS',
      estimatedTime: '5-10 min',
      videoTarget: '/app/stream/5',
      detectProduct: 'Erewhon x Vacation Smoothie',
      gradient: 'from-emerald-400 via-green-500 to-teal-600',
      bgImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      tags: ['WELLNESS', 'SMOOTHIE', 'PREMIUM']
    },
    {
      id: 2,
      title: 'Pebble Beach Car Show',
      brand: 'Pebble Beach',
      brandIcon: '🏎️',
      description: 'Stream yourself at the exclusive Pebble Beach Concours d\'Elegance and capture luxury automotive artistry!',
      reward: 1200,
      difficulty: 'PREMIUM',
      category: 'LUXURY',
      estimatedTime: '15-20 min',
      videoTarget: '/app/stream/14', // Links to the new Pebble Beach feed
      detectProduct: 'Luxury Vehicle',
      gradient: 'from-blue-500 via-purple-600 to-indigo-700',
      bgImage: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=600&h=400&fit=crop',
      tags: ['LUXURY', 'AUTOMOTIVE', 'EXCLUSIVE']
    }
  ];

  const startQuest = (quest) => {
    localStorage.setItem('activeQuest', JSON.stringify(quest));
    setActiveQuests([quest]);
    navigate(quest.videoTarget);
  };

  const isQuestCompleted = (questId) => {
    return completedQuests.some(quest => quest.id === questId);
  };

  const isQuestActive = (questId) => {
    return activeQuests.some(quest => quest.id === questId);
  };

  const getQuestStatus = (quest) => {
    if (isQuestCompleted(quest.id)) return 'COMPLETED';
    if (isQuestActive(quest.id)) return 'ACTIVE';
    return 'AVAILABLE';
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'EASY': return 'text-green-400 bg-green-400/20';
      case 'MEDIUM': return 'text-yellow-400 bg-yellow-400/20';
      case 'HARD': return 'text-orange-400 bg-orange-400/20';
      case 'PREMIUM': return 'text-purple-400 bg-purple-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/90 backdrop-blur-xl border-b border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-4">
              <Link 
                to="/app" 
                className="p-3 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-all duration-300 group"
              >
                <svg className="w-6 h-6 text-neon-cyan group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </Link>
              <div>
                <h1 className="text-3xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-cyan neon-text-enhanced">
                  VISION QUEST
                </h1>
                <p className="text-gray-400 font-mono text-sm">Complete brand challenges & earn rewards</p>
              </div>
            </div>
            
            {/* User Stats */}
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <div className="text-2xl font-mono text-neon-cyan font-bold">{userPoints.toLocaleString()}</div>
                <div className="text-xs text-gray-400 font-mono">TOTAL POINTS</div>
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue p-0.5">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quest Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-mono text-green-400 font-bold">{completedQuests.length}</div>
            <div className="text-sm text-gray-300 font-mono">COMPLETED</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-mono text-blue-400 font-bold">{activeQuests.length}</div>
            <div className="text-sm text-gray-300 font-mono">ACTIVE</div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-r from-purple-500/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 text-center"
          >
            <div className="text-3xl font-mono text-purple-400 font-bold">{quests.length - completedQuests.length}</div>
            <div className="text-sm text-gray-300 font-mono">AVAILABLE</div>
          </motion.div>
        </div>

        {/* Featured Quest Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-pixel text-neon-cyan mb-6 neon-text">FEATURED QUESTS</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {quests.map((quest, index) => {
              const status = getQuestStatus(quest);
              
              return (
                <motion.div
                  key={quest.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="group relative"
                >
                  {/* Quest Card */}
                  <div className={`
                    relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer
                    ${status === 'COMPLETED' ? 'border-green-500/50 bg-green-500/10' : 
                      status === 'ACTIVE' ? 'border-blue-500/50 bg-blue-500/10' : 
                      'border-neon-cyan/30 hover:border-neon-cyan/60'}
                    group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-neon-cyan/20
                  `}>
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={quest.bgImage} 
                        alt={quest.title}
                        className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${quest.gradient} opacity-60`}></div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      {status === 'COMPLETED' && (
                        <div className="flex items-center space-x-2 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-mono">
                          <span>✓</span>
                          <span>COMPLETED</span>
                        </div>
                      )}
                      {status === 'ACTIVE' && (
                        <div className="flex items-center space-x-2 bg-blue-500/90 text-white px-3 py-1 rounded-full text-xs font-mono">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span>ACTIVE</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-8">
                      {/* Brand & Icon */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-4xl">{quest.brandIcon}</div>
                        <div>
                          <h3 className="text-2xl font-mono text-white font-bold">{quest.title}</h3>
                          <p className="text-gray-300 font-mono text-sm">{quest.brand}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {quest.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-white/10 backdrop-blur text-white/80 rounded-md text-xs font-mono">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Description */}
                      <p className="text-gray-200 mb-6 leading-relaxed">{quest.description}</p>

                      {/* Quest Info */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`px-3 py-1 rounded-full text-xs font-mono ${getDifficultyColor(quest.difficulty)}`}>
                            {quest.difficulty}
                          </div>
                          <div className="text-gray-300 font-mono text-sm">
                            ⏱️ {quest.estimatedTime}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-mono text-neon-cyan font-bold">+{quest.reward}</div>
                          <div className="text-xs text-gray-400 font-mono">POINTS</div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => startQuest(quest)}
                        disabled={status === 'COMPLETED'}
                        className={`
                          w-full py-4 rounded-xl font-mono font-bold text-lg transition-all duration-300
                          ${status === 'COMPLETED' 
                            ? 'bg-green-500/30 text-green-300 cursor-not-allowed' 
                            : status === 'ACTIVE'
                            ? 'bg-blue-500 hover:bg-blue-600 text-white hover:scale-105 shadow-lg hover:shadow-blue-500/50'
                            : 'bg-neon-cyan hover:bg-neon-blue text-black hover:scale-105 shadow-lg hover:shadow-neon-cyan/50'
                          }
                        `}
                      >
                        {status === 'COMPLETED' ? '✓ QUEST COMPLETED' : 
                         status === 'ACTIVE' ? '⚡ CONTINUE QUEST' : 
                         '🚀 START QUEST'}
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-cyber-black/50 border border-neon-cyan/20 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-pixel text-neon-cyan mb-6 neon-text">HOW IT WORKS</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-mono text-white font-bold mb-2">1. START STREAMING</h4>
              <p className="text-gray-400 text-sm">Begin your live stream and navigate to the quest location</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-mono text-white font-bold mb-2">2. COMPLETE OBJECTIVE</h4>
              <p className="text-gray-400 text-sm">Show the target product or experience in your stream</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="font-mono text-white font-bold mb-2">3. EARN REWARDS</h4>
              <p className="text-gray-400 text-sm">Get points instantly when AI validates your quest</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default VisionQuest; 