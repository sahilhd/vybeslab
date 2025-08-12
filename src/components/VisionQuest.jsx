import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MobileBottomNav from './MobileBottomNav';

const VisionQuest = () => {
  const navigate = useNavigate();
  const [completedQuests, setCompletedQuests] = useState([]);

  const quests = [
    {
      id: 1,
      title: 'Nike Air Jordan Hunt',
      brand: 'Nike',
      brandIcon: '👟',
      description: 'Stream yourself shopping for Nike Air Jordan sneakers and earn exclusive rewards!',
      reward: 500,
      difficulty: 'EASY',
      category: 'FASHION',
      estimatedTime: '5-10 min',
      videoTarget: '/stream/0', // Will redirect to shopping stream
      detectProduct: 'Nike Air Jordan',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 2,
      title: 'Visvim Premium Discovery',
      brand: 'Visvim',
      brandIcon: '🏷️',
      description: 'Stream your Visvim shopping experience in Carmel for mega rewards!',
      reward: 1000,
      difficulty: 'MEDIUM',
      category: 'LUXURY',
      estimatedTime: '10-15 min',
      videoTarget: '/stream/0', // Shopping at Visvim stream
      detectProduct: 'Visvim Premium Item',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'Erewhon Wellness Quest',
      brand: 'Erewhon',
      brandIcon: '🥤',
      description: 'Grab the limited-edition Erewhon x Vacation "Sunscreen" Smoothie for 600 points!',
      reward: 600,
      difficulty: 'EASY',
      category: 'WELLNESS',
      estimatedTime: '5-10 min',
      videoTarget: '/stream/5', // Updated to point to the Erewhon quest stream
      detectProduct: 'Erewhon x Vacation Smoothie',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      title: 'Golf Equipment Pro Quest',
      brand: 'Titleist',
      brandIcon: '⛳',
      description: 'Stream yourself using Titleist golf equipment and unlock pro status!',
      reward: 750,
      difficulty: 'HARD',
      category: 'SPORTS',
      estimatedTime: '15-20 min',
      videoTarget: '/stream/1', // Golf stream
      detectProduct: 'Titleist Golf Equipment',
      color: 'from-blue-500 to-teal-600'
    }
  ];

  const handleStartQuest = (quest) => {
    // Store the active quest in localStorage for the stream page to access
    localStorage.setItem('activeQuest', JSON.stringify(quest));
    navigate(quest.videoTarget);
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'EASY': return 'text-neon-green';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HARD': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const totalPoints = completedQuests.reduce((sum, quest) => sum + quest.reward, 0);

  return (
    <div className="min-h-screen bg-cyber-black text-white pb-20 lg:pb-8">
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link 
          to="/" 
          className="flex items-center space-x-2 bg-cyber-black/80 backdrop-blur border border-neon-blue text-neon-cyan px-3 py-2 rounded font-mono text-sm hover:bg-neon-blue/20 transition-colors"
        >
          <span>←</span>
          <span>BACK</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 pt-24 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-3xl md:text-4xl font-pixel neon-text text-neon-cyan mb-4">
            VISION QUEST
          </h1>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            Complete branded challenges by streaming yourself shopping, dining, or exploring. 
            Our AI agents will validate your activities and reward you instantly!
          </p>
          
          {/* Progress Stats */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-dark-blue border border-neon-blue rounded-lg p-3">
              <div className="text-neon-cyan font-mono text-lg font-bold">{totalPoints}</div>
              <div className="text-gray-400 text-xs">TOTAL POINTS</div>
            </div>
            <div className="bg-dark-blue border border-neon-blue rounded-lg p-3">
              <div className="text-neon-green font-mono text-lg font-bold">{completedQuests.length}</div>
              <div className="text-gray-400 text-xs">COMPLETED</div>
            </div>
            <div className="bg-dark-blue border border-neon-blue rounded-lg p-3">
              <div className="text-neon-magenta font-mono text-lg font-bold">{quests.length - completedQuests.length}</div>
              <div className="text-gray-400 text-xs">REMAINING</div>
            </div>
          </div>
        </div>

        {/* Quest Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quests.map((quest) => (
            <div 
              key={quest.id}
              className="bg-dark-blue border border-neon-blue rounded-lg overflow-hidden hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 group"
            >
              {/* Quest Header with Gradient */}
              <div className={`bg-gradient-to-r ${quest.color} p-4 text-center`}>
                <div className="text-4xl mb-2">{quest.brandIcon}</div>
                <h3 className="font-pixel text-white text-lg">{quest.title}</h3>
                <div className="text-white/80 font-mono text-xs">{quest.brand}</div>
              </div>

              {/* Quest Details */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className={`${getDifficultyColor(quest.difficulty)} font-mono text-xs font-bold`}>
                    {quest.difficulty}
                  </span>
                  <span className="text-gray-400 font-mono text-xs">{quest.estimatedTime}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {quest.description}
                </p>

                {/* Reward Section */}
                <div className="bg-cyber-black rounded p-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-neon-cyan font-mono text-lg font-bold">
                        +{quest.reward} PTS
                      </div>
                      <div className="text-gray-400 text-xs">REWARD</div>
                    </div>
                    <div className="text-right">
                      <div className="text-neon-magenta font-mono text-sm">
                        {quest.category}
                      </div>
                      <div className="text-gray-400 text-xs">CATEGORY</div>
                    </div>
                  </div>
                </div>

                {/* Start Quest Button */}
                <button
                  onClick={() => handleStartQuest(quest)}
                  className="w-full cyber-button font-mono py-3 rounded-lg hover:scale-105 transition-transform group-hover:shadow-lg group-hover:shadow-neon-cyan/30"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>📱</span>
                    <span>START STREAMING</span>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-pixel text-neon-cyan mb-6">ACHIEVEMENTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { icon: '🏆', name: 'First Stream', unlocked: completedQuests.length >= 1 },
              { icon: '🔥', name: 'Stream Streak', unlocked: completedQuests.length >= 2 },
              { icon: '💎', name: 'Luxury Streamer', unlocked: completedQuests.some(q => q.category === 'LUXURY') },
              { icon: '⚡', name: 'Stream Master', unlocked: completedQuests.length >= 4 }
            ].map((achievement, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg border ${
                  achievement.unlocked 
                    ? 'bg-neon-green/20 border-neon-green text-neon-green' 
                    : 'bg-dark-blue border-gray-600 text-gray-500'
                }`}
              >
                <div className="text-2xl mb-2">{achievement.icon}</div>
                <div className="font-mono text-xs">{achievement.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-12 bg-dark-blue border border-neon-blue rounded-lg p-6">
          <h3 className="text-xl font-pixel text-neon-cyan mb-4 text-center">HOW VISION QUEST WORKS</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">1️⃣</div>
              <h4 className="font-mono text-neon-cyan mb-2">SELECT QUEST</h4>
              <p className="text-gray-400 text-sm">Choose from available branded challenges</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">2️⃣</div>
              <h4 className="font-mono text-neon-cyan mb-2">START STREAMING</h4>
              <p className="text-gray-400 text-sm">Stream yourself shopping, dining, or exploring</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">3️⃣</div>
              <h4 className="font-mono text-neon-cyan mb-2">AI VALIDATION</h4>
              <p className="text-gray-400 text-sm">Our AI validates your activities and awards points</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default VisionQuest; 