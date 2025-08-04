import { useState } from 'react';
import Sidebar from './Sidebar';
import FeedCard from './FeedCard';
import TopFeeds from './TopFeeds';
import TopCreators from './TopCreators';

const HomePage = ({ feeds }) => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const filteredFeeds = selectedCategory === 'ALL' 
    ? feeds 
    : feeds.filter(feed => feed.category === selectedCategory);

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-16 bottom-0 z-40">
        <Sidebar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 mr-80 p-6">
        <div className="max-w-4xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-pixel neon-text text-neon-cyan mb-2">
              &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; TRENDING FEEDS &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            </h1>
            <div className="border-b border-neon-blue w-full"></div>
          </div>

          {/* Feeds Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFeeds.map((feed) => (
              <FeedCard key={feed.id} feed={feed} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-8 text-center">
            <button className="cyber-button px-8 py-3 font-mono rounded-lg hover:scale-105 transition-transform">
              LOAD MORE FEEDS
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="fixed right-0 top-16 bottom-0 w-80 p-6 overflow-y-auto z-40">
        <div className="space-y-6">
          <TopFeeds />
          <TopCreators />
        </div>
      </div>
    </div>
  );
};

export default HomePage; 