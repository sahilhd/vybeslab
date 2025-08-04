import { useState } from 'react';
import Sidebar from './Sidebar';
import FeedCard from './FeedCard';
import TopFeeds from './TopFeeds';
import TopCreators from './TopCreators';
import MobileBottomNav from './MobileBottomNav';
import AITriggerButton from './AITriggerButton';

const HomePage = ({ feeds }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredFeeds = selectedCategory === 'ALL' 
    ? feeds 
    : feeds.filter(feed => feed.category === selectedCategory);

  return (
    <div className="flex min-h-screen">
      {/* Desktop Left Sidebar */}
      <div className="hidden lg:block fixed left-0 top-16 bottom-0 z-40">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden fixed top-20 left-4 z-50">
        <button
          onClick={() => setShowMobileFilters(!showMobileFilters)}
          className="bg-cyber-black border border-neon-blue text-neon-cyan px-3 py-2 rounded font-mono text-sm"
        >
          ≡ FILTERS
        </button>
      </div>

      {/* Mobile Filter Dropdown */}
      {showMobileFilters && (
        <div className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-cyber-black border-b border-neon-blue shadow-lg">
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {['ALL', 'FASHION', 'SPORTS', 'LIFESTYLE', 'TECH'].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setShowMobileFilters(false);
                  }}
                  className={`px-3 py-1 rounded text-xs font-mono transition-colors ${
                    selectedCategory === category
                      ? 'bg-neon-cyan text-black'
                      : 'border border-neon-blue text-neon-cyan hover:bg-neon-blue/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 lg:ml-64 xl:mr-80 p-4 lg:p-6">
        <div className="max-w-full lg:max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-6 mt-12 lg:mt-0">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-pixel neon-text text-neon-cyan mb-2 break-words">
              <span className="hidden lg:inline">
                &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; TRENDING FEEDS &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
              </span>
              <span className="lg:hidden">
                TRENDING FEEDS
              </span>
            </h1>
            <div className="border-b border-neon-blue w-full"></div>
          </div>

          {/* Feeds Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: '1fr' }}>
            {filteredFeeds.map((feed) => (
              <div key={feed.id} className="h-full">
                <FeedCard feed={feed} />
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <button className="cyber-button px-6 lg:px-8 py-3 font-mono rounded-lg hover:scale-105 transition-transform text-sm lg:text-base">
              LOAD MORE FEEDS
            </button>
          </div>

          {/* Mobile Bottom Content - Top Feeds & Creators */}
          <div className="lg:hidden mt-8 space-y-6 pb-20">
            <TopFeeds />
            <TopCreators />
          </div>
        </div>
      </div>

      {/* Desktop Right Sidebar */}
      <div className="hidden xl:block fixed right-0 top-16 bottom-0 w-80 px-6 pt-6 pb-6 overflow-y-auto z-40">
        <div className="space-y-6" style={{ marginTop: '24px' }}>
          <TopFeeds />
          <TopCreators />
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <MobileBottomNav />
      
      {/* AI Assistant */}
      <AITriggerButton />
    </div>
  );
};

export default HomePage; 