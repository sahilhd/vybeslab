import { useState } from 'react';
import Sidebar from './Sidebar';
import FeedCard from './FeedCard';
import TopFeeds from './TopFeeds';
import TopCreators from './TopCreators';
import TopPremiumBanner from './TopPremiumBanner';
import MobileBottomNav from './MobileBottomNav';
import AITriggerButton from './AITriggerButton';

const HomePage = ({ feeds }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [selectedFeedType, setSelectedFeedType] = useState('TRENDING');

  const getFilteredFeeds = () => {
    let filtered = feeds;
    
    // Filter by category first
    if (selectedCategory !== 'ALL') {
      filtered = filtered.filter(feed => feed.category === selectedCategory);
    }
    
    // Then filter by feed type
    if (selectedFeedType === 'PREMIUM') {
      filtered = filtered.filter(feed => feed.isPremium === true);
    } else if (selectedFeedType === 'MY_CIRCLE') {
      // Mock data for "My Circle" - could be based on followed creators or special tags
      const myCircleCreators = ['@lifestylevibes', '@golfpro', '@golfstyle'];
      filtered = filtered.filter(feed => myCircleCreators.includes(feed.creator));
    }
    // 'TRENDING' shows all feeds (already filtered by category if needed)
    
    return filtered;
  };

  const filteredFeeds = getFilteredFeeds();

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
            {/* Feed Type Selector */}
            <div className="flex items-center space-x-2 sm:space-x-4 mb-4 overflow-x-auto">
              {['TRENDING', 'PREMIUM', 'MY_CIRCLE'].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedFeedType(type)}
                  className={`px-3 sm:px-4 py-2 rounded font-mono text-xs sm:text-sm transition-all whitespace-nowrap flex-shrink-0 ${
                    selectedFeedType === type
                      ? 'bg-neon-cyan text-black shadow-lg shadow-neon-cyan/30'
                      : 'border border-neon-blue text-neon-cyan hover:bg-neon-blue/20'
                  }`}
                >
                  <span className="hidden sm:inline">
                    {type === 'MY_CIRCLE' ? 'MY CIRCLE' : `${type} FEEDS`}
                  </span>
                  <span className="sm:hidden">
                    {type === 'TRENDING' ? '🔥 TRENDING' : type === 'PREMIUM' ? '💎 PREMIUM' : '👥 CIRCLE'}
                  </span>
                </button>
              ))}
            </div>

            <h1 className="text-xl md:text-2xl lg:text-3xl font-pixel neon-text text-neon-cyan mb-2 break-words">
              <span className="hidden lg:inline">
                &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; {selectedFeedType === 'MY_CIRCLE' ? 'MY CIRCLE' : `${selectedFeedType} FEEDS`} &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
              </span>
              <span className="lg:hidden">
                {selectedFeedType === 'MY_CIRCLE' ? 'MY CIRCLE' : `${selectedFeedType} FEEDS`}
              </span>
            </h1>
            <div className="border-b border-neon-blue w-full"></div>
          </div>

          {/* Feed Count */}
          <div className="mb-4">
            <p className="text-gray-400 font-mono text-sm">
              {filteredFeeds.length} {filteredFeeds.length === 1 ? 'feed' : 'feeds'} found
            </p>
          </div>

          {/* Feeds Grid - Responsive */}
          {filteredFeeds.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ gridAutoRows: '1fr' }}>
              {filteredFeeds.map((feed) => (
                <div key={feed.id} className="h-full">
                  <FeedCard feed={feed} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">
                {selectedFeedType === 'PREMIUM' ? '💎' : selectedFeedType === 'MY_CIRCLE' ? '👥' : '📺'}
              </div>
              <h3 className="text-xl font-pixel text-neon-cyan mb-2">
                No {selectedFeedType === 'MY_CIRCLE' ? 'My Circle' : selectedFeedType.toLowerCase()} feeds found
              </h3>
              <p className="text-gray-400 font-mono text-sm max-w-md mx-auto">
                {selectedFeedType === 'PREMIUM' 
                  ? 'No premium content available right now. Check back later for exclusive feeds!'
                  : selectedFeedType === 'MY_CIRCLE'
                  ? 'No feeds from your circle. Follow more creators to see their content here!'
                  : 'No trending feeds match your current filters.'
                }
              </p>
            </div>
          )}

          {/* Load More Button */}
          {filteredFeeds.length > 0 && (
            <div className="mt-8 text-center">
              <button className="cyber-button px-6 lg:px-8 py-3 font-mono rounded-lg hover:scale-105 transition-transform text-sm lg:text-base">
                LOAD MORE {selectedFeedType === 'MY_CIRCLE' ? 'CIRCLE' : selectedFeedType} FEEDS
              </button>
            </div>
          )}

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
          <TopPremiumBanner />
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