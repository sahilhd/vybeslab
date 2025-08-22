import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const heroTexts = [
    "THE FUTURE OF LIVESTREAMING",
    "WHERE STYLE MEETS TECHNOLOGY",
    "YOUR WORLD, LIVE & UNFILTERED"
  ];

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useGSAP(() => {
    // Animate the floating elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1
    });

    // Stagger the feature cards
    gsap.from('.feature-card', {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      delay: 1
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-black overflow-hidden">
      {/* Loading Screen */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
              <div className="text-2xl font-pixel text-neon-cyan">LOADING FEEDS...</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Video */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={handleVideoLoad}
        >
          <source src="/videos/FEEDS_SPLASH.mp4" type="video/mp4" />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 animated-grid" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-3xl font-pixel neon-text text-neon-cyan glitch-hover"
          >
            FEEDS
          </motion.div>

          {/* Login Button */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            <Link
              to="/app"
              className="bg-gradient-to-r from-neon-cyan to-neon-blue text-black px-6 py-3 rounded-full font-mono font-bold hover:scale-105 transition-all duration-300 shadow-lg shadow-neon-cyan/30 border border-neon-cyan/50"
            >
              ENTER FEEDS
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="text-6xl md:text-8xl font-pixel text-white mb-8"
          >
            <span className="bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-magenta bg-clip-text text-transparent neon-text-enhanced">
              FEEDS
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            key={currentTextIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-mono text-neon-cyan mb-8 h-12"
          >
            {heroTexts[currentTextIndex]}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/app"
              className="cyber-button px-8 py-4 text-xl font-mono rounded-lg hover:scale-105 transition-transform duration-300 shadow-2xl shadow-neon-cyan/30"
            >
              START STREAMING
            </Link>
            
            <button className="border-2 border-neon-magenta text-neon-magenta px-8 py-4 text-xl font-mono rounded-lg hover:bg-neon-magenta hover:text-black transition-all duration-300 hover:scale-105">
              WATCH DEMO
            </button>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`floating-element absolute w-${Math.floor(Math.random() * 4) + 2} h-${Math.floor(Math.random() * 4) + 2} rounded-full opacity-${Math.floor(Math.random() * 4) + 2}0`}
                style={{
                  left: `${Math.random() * 80 + 10}%`,
                  top: `${Math.random() * 80 + 10}%`,
                  backgroundColor: ['#00ffff', '#ff00ff', '#00ff00', '#ffff00'][Math.floor(Math.random() * 4)]
                }}
                animate={{ 
                  y: [Math.random() * -20, Math.random() * 20, Math.random() * -20],
                  x: [Math.random() * -10, Math.random() * 10, Math.random() * -10]
                }}
                transition={{ 
                  duration: Math.random() * 3 + 2, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 bg-gradient-to-b from-transparent to-black/80">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-pixel text-center text-white mb-16"
          >
            WHY <span className="text-neon-cyan">FEEDS</span>?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="feature-card bg-gradient-to-br from-cyber-black/80 to-neon-blue/20 border border-neon-blue/30 rounded-2xl p-8 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎥</span>
              </div>
              <h3 className="text-2xl font-pixel text-neon-cyan mb-4 text-center">LIVE STREAMING</h3>
              <p className="text-gray-300 font-mono text-center leading-relaxed">
                Share your world in real-time with crystal-clear quality and zero latency. 
                From fashion shows to lifestyle content, stream anywhere, anytime.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="feature-card bg-gradient-to-br from-cyber-black/80 to-neon-magenta/20 border border-neon-magenta/30 rounded-2xl p-8 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-neon-magenta to-pink-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="text-2xl font-pixel text-neon-magenta mb-4 text-center">AI POWERED</h3>
              <p className="text-gray-300 font-mono text-center leading-relaxed">
                Advanced AI that recognizes products, provides insights, and enhances 
                your streaming experience with intelligent features.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="feature-card bg-gradient-to-br from-cyber-black/80 to-neon-green/20 border border-neon-green/30 rounded-2xl p-8 backdrop-blur-sm hover:border-neon-cyan/50 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -10 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-neon-green to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-pixel text-neon-green mb-4 text-center">VISION QUESTS</h3>
              <p className="text-gray-300 font-mono text-center leading-relaxed">
                Complete challenges, earn rewards, and build your community through 
                gamified streaming experiences and brand collaborations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 bg-black/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10M+', label: 'ACTIVE USERS' },
              { number: '500K+', label: 'LIVE STREAMS' },
              { number: '99.9%', label: 'UPTIME' },
              { number: '24/7', label: 'SUPPORT' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-pixel text-neon-cyan mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-mono text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neon-cyan text-center"
        >
          <div className="w-6 h-10 border-2 border-neon-cyan rounded-full mx-auto mb-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-neon-cyan rounded-full mx-auto mt-2"
            />
          </div>
          <div className="text-xs font-mono">SCROLL</div>
        </motion.div>
      </motion.div>

      {/* Final CTA */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-pixel text-white mb-8"
          >
            READY TO <span className="text-neon-cyan">STREAM</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl text-gray-300 font-mono mb-12 leading-relaxed"
          >
            Join millions of creators who are already sharing their world on FEEDS. 
            Start your streaming journey today and become part of the future of content creation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              to="/app"
              className="cyber-button px-12 py-6 text-2xl font-mono rounded-lg hover:scale-110 transition-transform duration-300 shadow-2xl shadow-neon-cyan/40 inline-block"
            >
              GET STARTED NOW
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-neon-blue/20 bg-black/80">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-pixel text-neon-cyan mb-4">FEEDS</div>
          <div className="text-gray-400 font-mono text-sm">
            © 2025 FEEDS. The future of livestreaming is here.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 