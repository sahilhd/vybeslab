import { Link } from 'react-router-dom';
import { useState } from 'react';

const GlassesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const glasses = [
    {
      id: 1,
      name: 'Meta Oakley Smart Glasses',
      brand: 'Meta & Oakley',
      price: '$299',
      category: 'LIVESTREAMING',
      description: 'Premium smart glasses with dual cameras, open-ear speakers, and seamless social media integration. Stream your life hands-free with crystal clear audio and video.',
      image: '/images/1750379599333-3533460811.jpg',
      features: ['Live Streaming', 'Dual Cameras', 'Open-Ear Audio', 'Social Media Integration', 'Voice Commands'],
      isPremium: true,
      isNew: true,
      link: 'https://www.meta.com/ray-ban-stories/',
      specs: {
        weight: '34 grams',
        battery: '6+ hours',
        camera: 'Dual 5MP, 110° FOV',
        audio: 'Open-ear speakers',
        streaming: 'Facebook, Instagram, WhatsApp'
      }
    },
    {
      id: 2,
      name: 'Mentra Live Camera Glasses',
      brand: 'Mentra',
      price: '$249',
      category: 'LIVESTREAMING',
      description: 'Smart glasses with camera, speakers, mic, and open-source SDK. Stream video, talk to AI, translation, take calls, and download any app you want.',
      image: '/images/OIP-1485627629.jpg',
      features: ['Live Streaming', 'Open Source SDK', 'Camera & Mic', 'AI Integration', 'Multi-Platform Streaming'],
      isPremium: true,
      isNew: true,
      link: 'https://mentra.glass/products/mentra-live-camera-glasses',
      specs: {
        weight: '44 grams',
        battery: '260mAh + Extension Cable',
        camera: '12MP, 118° FOV',
        microphone: '5 Microphones',
        streaming: 'YouTube, Twitch, X, TikTok, Instagram'
      }
    },
    {
      id: 3,
      name: 'Ray-Ban Stories Smart Glasses',
      brand: 'Ray-Ban',
      price: '$329',
      category: 'LIVESTREAMING',
      description: 'Classic Wayfarer design meets smart technology. Capture photos and videos, listen to music, and take calls with premium audio quality and iconic style.',
      image: '/images/rayban-stories-1024x512-532929622.jpg',
      features: ['Classic Design', '5MP Camera', 'Premium Audio', 'Voice Commands', 'Bluetooth Connectivity'],
      isPremium: true,
      isNew: false,
      link: 'https://www.ray-ban.com/usa/smart-glasses',
      specs: {
        weight: '49 grams',
        battery: '6+ hours',
        camera: '5MP, 118° FOV',
        audio: 'Premium speakers',
        compatibility: 'iOS & Android'
      }
    }
  ];

  const categories = ['ALL', 'LIVESTREAMING', 'PREMIUM', 'CAMERA'];

  const filteredGlasses = selectedCategory === 'ALL' 
    ? glasses 
    : selectedCategory === 'PREMIUM'
    ? glasses.filter(glass => glass.isPremium)
    : selectedCategory === 'CAMERA'
    ? glasses.filter(glass => glass.features.some(f => f.toLowerCase().includes('camera')))
    : glasses.filter(glass => glass.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
      {/* Header */}
      <div className="p-6">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-neon-cyan hover:text-white transition-colors font-mono mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>BACK TO FEEDS</span>
        </Link>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-pixel text-neon-cyan mb-4">🕶️ GLASSES STORE</h1>
          <p className="text-gray-300 font-mono max-w-2xl mx-auto">
            Discover the future of smart glasses with cutting-edge streaming technology and AR innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-mono text-sm rounded-lg border-2 transition-all ${
                selectedCategory === category
                  ? 'bg-neon-cyan text-black border-neon-cyan'
                  : 'text-neon-cyan border-neon-cyan hover:bg-neon-cyan hover:text-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredGlasses.map(glass => (
            <div key={glass.id} className="bg-cyber-black border-2 border-neon-blue rounded-lg overflow-hidden hover:border-neon-cyan transition-colors">
              {/* Product Image */}
              <div className="relative">
                <img 
                  src={glass.image} 
                  alt={glass.name}
                  className="w-full h-64 object-cover"
                />
                {glass.isNew && (
                  <div className="absolute top-4 left-4 bg-neon-green text-black px-3 py-1 rounded-full font-mono text-xs font-bold">
                    NEW
                  </div>
                )}
                {glass.isPremium && (
                  <div className="absolute top-4 right-4 bg-neon-magenta text-white px-3 py-1 rounded-full font-mono text-xs font-bold">
                    PREMIUM
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-pixel text-white mb-2">{glass.name}</h3>
                    <p className="text-neon-cyan font-mono text-sm">{glass.brand}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-pixel text-neon-green">{glass.price}</div>
                    <div className="text-xs font-mono text-gray-400">{glass.category}</div>
                  </div>
                </div>

                <p className="text-gray-300 font-mono text-sm mb-6 leading-relaxed">
                  {glass.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-neon-cyan font-mono font-bold mb-3">Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {glass.features.map((feature, index) => (
                      <span key={index} className="bg-neon-blue/20 text-neon-cyan px-3 py-1 rounded-full font-mono text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div className="mb-6">
                  <h4 className="text-neon-cyan font-mono font-bold mb-3">Specifications:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {Object.entries(glass.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between">
                        <span className="text-gray-400 font-mono text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-white font-mono text-sm">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buy Button */}
                <a
                  href={glass.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-neon-green to-emerald-600 text-black font-mono font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-200 shadow-lg shadow-neon-green/30 text-center"
                >
                  🛒 BUY {glass.name.split(' ')[0].toUpperCase()} - {glass.price}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-16 text-center">
          <div className="bg-cyber-black border-2 border-neon-green rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-pixel text-neon-green mb-4">🌐 THE FUTURE OF WEARABLE TECH</h2>
            <p className="text-gray-300 font-mono mb-6">
              Smart glasses are revolutionizing how we interact with technology. From livestreaming your POV to augmented reality overlays, these devices are your gateway to the next computing platform.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="text-center">
                <div className="text-4xl mb-2">📹</div>
                <h3 className="text-neon-cyan font-pixel mb-2">Live Streaming</h3>
                <p className="text-gray-400 font-mono text-sm">Stream your point of view to any platform with hands-free recording</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <h3 className="text-neon-cyan font-pixel mb-2">AR & AI</h3>
                <p className="text-gray-400 font-mono text-sm">Augmented reality overlays and AI assistance for enhanced daily life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassesPage;
