import { Link } from 'react-router-dom';
import { useState } from 'react';

const GlassesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const glasses = [
    {
      id: 1,
      name: 'Mentra Open Source',
      brand: 'Mentra',
      price: '$299',
      category: 'OPEN SOURCE',
      description: 'Revolutionary open source smart glasses with AR capabilities and community-driven development.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      features: ['AR Display', 'Open Source', 'Community Driven', 'Modular Design'],
      isPremium: true,
      isNew: true
    },
    {
      id: 7,
      name: 'Open Source AR Glasses',
      brand: 'OpenAR',
      price: '$199',
      category: 'OPEN SOURCE',
      description: 'Community-built AR glasses with fully open hardware and software stack.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      features: ['Open Hardware', 'Open Software', 'Community Built', 'Affordable'],
      isPremium: false,
      isNew: true
    },
    {
      id: 8,
      name: 'Libre Glasses',
      brand: 'LibreTech',
      price: '$249',
      category: 'OPEN SOURCE',
      description: 'Freedom-focused smart glasses with complete user control and privacy protection.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      features: ['Privacy First', 'User Control', 'Free Software', 'No Tracking'],
      isPremium: true,
      isNew: false
    },
    {
      id: 2,
      name: 'Ray-Ban Meta',
      brand: 'Ray-Ban',
      price: '$329',
      category: 'SMART GLASSES',
      description: 'Premium smart glasses with built-in camera, speakers, and voice control.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      features: ['Built-in Camera', 'Voice Control', 'Premium Audio', 'Meta Integration'],
      isPremium: true,
      isNew: false
    },
    {
      id: 3,
      name: 'Google Glass Enterprise',
      brand: 'Google',
      price: '$999',
      category: 'ENTERPRISE',
      description: 'Professional AR glasses designed for enterprise applications and industrial use.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      features: ['Enterprise AR', 'Industrial Grade', 'Professional Tools', 'Long Battery'],
      isPremium: true,
      isNew: false
    },
    {
      id: 4,
      name: 'Snap Spectacles',
      brand: 'Snap Inc.',
      price: '$380',
      category: 'SOCIAL',
      description: 'Social media focused smart glasses with dual HD cameras and AR lenses.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      features: ['Dual Cameras', 'AR Lenses', 'Social Integration', 'Stylish Design'],
      isPremium: false,
      isNew: true
    },
    {
      id: 5,
      name: 'Nreal Air',
      brand: 'Nreal',
      price: '$379',
      category: 'AR GLASSES',
      description: 'Lightweight AR glasses with 201-inch virtual screen and spatial computing.',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400',
      features: ['201" Virtual Screen', 'Spatial Computing', 'Lightweight', 'Universal Compatible'],
      isPremium: true,
      isNew: false
    },
    {
      id: 6,
      name: 'Vuzix Blade',
      brand: 'Vuzix',
      price: '$999',
      category: 'ENTERPRISE',
      description: 'Enterprise-grade smart glasses with waveguide optics and professional applications.',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      features: ['Waveguide Optics', 'Enterprise Apps', 'Professional Grade', 'Long Battery Life'],
      isPremium: true,
      isNew: false
    }
  ];

  const categories = ['ALL', 'OPEN SOURCE', 'SMART GLASSES', 'AR GLASSES', 'ENTERPRISE', 'SOCIAL'];

  const filteredGlasses = selectedCategory === 'ALL' 
    ? glasses 
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
            Discover the future of eyewear with cutting-edge smart glasses, AR technology, and open source innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-mono text-sm transition-all duration-200 rounded glitch-hover ${
                selectedCategory === category
                  ? 'bg-neon-blue text-white shadow-lg shadow-neon-blue/50 neon-border'
                  : 'text-neon-cyan hover:bg-neon-blue/20 hover:text-white border border-transparent hover:border-neon-cyan'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Glasses Grid */}
      <div className="container mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGlasses.map((glass) => (
            <div key={glass.id} className="bg-cyber-black rounded-lg border-2 border-neon-blue overflow-hidden hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 glitch-hover">
              {/* Image */}
              <div className="relative aspect-square bg-dark-blue overflow-hidden">
                <img 
                  src={glass.image} 
                  alt={glass.name}
                  className="w-full h-full object-cover"
                />
                {glass.isNew && (
                  <div className="absolute top-4 left-4 bg-neon-green text-black px-3 py-1 rounded-full text-sm font-mono font-bold">
                    NEW
                  </div>
                )}
                {glass.isPremium && (
                  <div className="absolute top-4 right-4 premium-badge px-3 py-1 rounded text-sm font-mono">
                    PREMIUM
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-neon-magenta font-mono text-sm">{glass.brand}</span>
                  <span className="text-neon-green font-pixel text-xl">{glass.price}</span>
                </div>
                
                <h3 className="text-xl font-pixel text-white mb-2">{glass.name}</h3>
                <p className="text-gray-400 font-mono text-sm mb-4">{glass.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {glass.features.map((feature, index) => (
                    <span 
                      key={index}
                      className="bg-neon-blue/20 text-neon-cyan px-2 py-1 rounded text-xs font-mono border border-neon-blue/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Buy Button */}
                <button className="w-full cyber-button py-3 font-mono text-sm rounded hover:scale-105 transition-transform">
                  🛒 BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mentra Highlight Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-neon-green/20 to-neon-cyan/20 border-2 border-neon-green rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-pixel text-neon-green mb-4">🚀 MENTRA - THE FUTURE IS OPEN</h2>
            <p className="text-gray-300 font-mono mb-6">
              Mentra represents the pinnacle of open source innovation in smart glasses. Built by the community, for the community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-neon-cyan font-pixel mb-4 text-xl">🔧 Technical Specs</h3>
                <ul className="text-gray-300 font-mono text-sm space-y-2">
                  <li>• AR Display with 1080p resolution</li>
                  <li>• Open source Android-based OS</li>
                  <li>• Modular hardware design</li>
                  <li>• Community-driven development</li>
                  <li>• Full hardware schematics available</li>
                  <li>• Customizable firmware</li>
                </ul>
              </div>
              <div>
                <h3 className="text-neon-cyan font-pixel mb-4 text-xl">🌟 Why Choose Mentra?</h3>
                <ul className="text-gray-300 font-mono text-sm space-y-2">
                  <li>• Complete transparency in code and hardware</li>
                  <li>• Active developer community</li>
                  <li>• Regular firmware updates</li>
                  <li>• No vendor lock-in</li>
                  <li>• Privacy-first approach</li>
                  <li>• Affordable compared to closed alternatives</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <button className="cyber-button px-8 py-4 font-mono text-lg rounded hover:scale-105 transition-transform">
                🛒 BUY MENTRA NOW - $299
              </button>
            </div>
          </div>
        </div>

        {/* Open Source Section */}
        <div className="mt-16 text-center">
          <div className="bg-cyber-black border-2 border-neon-green rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-pixel text-neon-green mb-4">🌐 OPEN SOURCE REVOLUTION</h2>
            <p className="text-gray-300 font-mono mb-6">
              Join the future of transparent technology. Open source glasses like Mentra are changing the game by giving users full control over their devices.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="text-center">
                <div className="text-4xl mb-2">🔓</div>
                <h3 className="text-neon-cyan font-pixel mb-2">Transparent</h3>
                <p className="text-gray-400 font-mono text-sm">Full access to source code and hardware schematics</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">👥</div>
                <h3 className="text-neon-cyan font-pixel mb-2">Community</h3>
                <p className="text-gray-400 font-mono text-sm">Built by developers, for developers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="text-neon-cyan font-pixel mb-2">Innovation</h3>
                <p className="text-gray-400 font-mono text-sm">Rapid development through open collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassesPage; 