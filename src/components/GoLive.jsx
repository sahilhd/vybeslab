import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from './MobileBottomNav';

const GoLive = () => {
  const [streamTitle, setStreamTitle] = useState('');
  const [streamCategory, setStreamCategory] = useState('LIFESTYLE');
  const [isLive, setIsLive] = useState(false);

  const categories = [
    'LIFESTYLE', 'FASHION', 'SPORTS', 'TECH', 'GAMING', 
    'MUSIC', 'ART', 'FOOD & DRINK', 'TRAVEL', 'FITNESS'
  ];

  const handleGoLive = () => {
    setIsLive(true);
    // In a real app, this would start the stream
  };

  const handleEndStream = () => {
    setIsLive(false);
  };

  if (isLive) {
    return (
      <div className="min-h-screen bg-cyber-black text-white pb-20 lg:pb-8">
        {/* Live Stream Interface */}
        <div className="fixed inset-0 bg-black flex flex-col">
          {/* Stream Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <span className="font-mono text-white font-bold">LIVE</span>
              <span className="text-white/80 font-mono text-sm">{streamTitle}</span>
            </div>
            <button
              onClick={handleEndStream}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded font-mono text-sm transition-colors"
            >
              END STREAM
            </button>
          </div>

          {/* Video Preview Area */}
          <div className="flex-1 bg-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📹</div>
              <h2 className="text-2xl font-pixel text-neon-cyan mb-2">YOU'RE LIVE!</h2>
              <p className="text-gray-400 font-mono">Camera feed would appear here</p>
              <div className="mt-4 flex items-center justify-center space-x-4">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-mono animate-pulse">
                  🔴 STREAMING
                </div>
                <div className="text-neon-cyan font-mono">
                  👥 24 viewers
                </div>
              </div>
            </div>
          </div>

          {/* Stream Controls */}
          <div className="bg-cyber-black/95 p-4 flex items-center justify-center space-x-4">
            <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              🎤
            </button>
            <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              📷
            </button>
            <button className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors">
              💬
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-black text-white pb-20 lg:pb-8">
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50">
        <Link 
          to="/app" 
          className="flex items-center space-x-2 bg-cyber-black/80 backdrop-blur border border-neon-blue text-neon-cyan px-3 py-2 rounded font-mono text-sm hover:bg-neon-blue/20 transition-colors"
        >
          <span>←</span>
          <span>BACK</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 pt-24 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🔴</div>
          <h1 className="text-3xl md:text-4xl font-pixel neon-text text-red-500 mb-4">
            GO LIVE
          </h1>
          <p className="text-gray-400 font-mono text-sm max-w-2xl mx-auto">
            Start your live stream and connect with your audience in real-time. 
            Share your experiences, moments, and creativity with the world.
          </p>
        </div>

        {/* Stream Setup Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-dark-blue border border-neon-blue rounded-lg p-6 mb-6">
            <h2 className="text-xl font-pixel text-neon-cyan mb-6">STREAM SETUP</h2>
            
            {/* Stream Title */}
            <div className="mb-6">
              <label className="block text-neon-cyan font-mono text-sm mb-2">
                STREAM TITLE
              </label>
              <input
                type="text"
                value={streamTitle}
                onChange={(e) => setStreamTitle(e.target.value)}
                placeholder="What's happening right now?"
                className="w-full bg-cyber-black border border-neon-blue rounded px-4 py-3 font-mono text-white placeholder-gray-400 focus:outline-none focus:border-neon-cyan focus:shadow-lg focus:shadow-neon-cyan/20"
                maxLength={100}
              />
              <div className="text-gray-400 text-xs mt-1 font-mono">
                {streamTitle.length}/100 characters
              </div>
            </div>

            {/* Category Selection */}
            <div className="mb-6">
              <label className="block text-neon-cyan font-mono text-sm mb-2">
                CATEGORY
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setStreamCategory(category)}
                    className={`p-2 rounded font-mono text-xs transition-all ${
                      streamCategory === category
                        ? 'bg-neon-cyan text-black shadow-lg shadow-neon-cyan/30'
                        : 'border border-neon-blue text-neon-cyan hover:bg-neon-blue/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Camera Preview */}
            <div className="mb-6">
              <label className="block text-neon-cyan font-mono text-sm mb-2">
                CAMERA PREVIEW
              </label>
              <div className="aspect-video bg-gray-900 rounded-lg border border-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📷</div>
                  <p className="text-gray-400 font-mono text-sm">Camera preview will appear here</p>
                  <button className="mt-2 border border-neon-cyan text-neon-cyan px-3 py-1 rounded text-xs font-mono hover:bg-neon-cyan hover:text-black transition-colors">
                    TEST CAMERA
                  </button>
                </div>
              </div>
            </div>

            {/* Stream Settings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-cyber-black rounded p-3">
                <div className="text-neon-green font-mono text-sm">QUALITY</div>
                <div className="text-white text-xs">1080p HD</div>
              </div>
              <div className="bg-cyber-black rounded p-3">
                <div className="text-neon-green font-mono text-sm">PRIVACY</div>
                <div className="text-white text-xs">Public Stream</div>
              </div>
            </div>

            {/* Go Live Button */}
            <button
              onClick={handleGoLive}
              disabled={!streamTitle.trim()}
              className={`w-full py-4 rounded-lg font-mono font-bold text-lg transition-all duration-300 ${
                streamTitle.trim()
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:scale-105 animate-pulse'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="w-3 h-3 bg-white rounded-full"></span>
                <span>START LIVE STREAM</span>
              </div>
            </button>
          </div>

          {/* Tips */}
          <div className="bg-dark-blue border border-neon-blue rounded-lg p-4">
            <h3 className="text-neon-cyan font-mono text-sm mb-3">💡 STREAMING TIPS</h3>
            <ul className="space-y-2 text-gray-300 text-xs font-mono">
              <li>• Make sure you have a stable internet connection</li>
              <li>• Good lighting makes a huge difference</li>
              <li>• Interact with your viewers in real-time</li>
              <li>• Choose an engaging stream title</li>
              <li>• Stream consistently to build your audience</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
    </div>
  );
};

export default GoLive; 