import { Link } from 'react-router-dom';

const GalleryGrid = ({ feeds = [] }) => {
  // Filter to show only YOUR personal streams (your original content)
  // Using feeds that represent personal lifestyle content
  const personalFeedIds = [2, 3, 4, 5]; // Aperol spritz, Nike styling, Bel Air pool, Erewhon smoothie
  const profileFeeds = feeds.filter(feed => personalFeedIds.includes(feed.id)).slice(0, 5);
  
  const galleryItems = profileFeeds.map((feed, index) => ({
    id: feed.id,
    title: feed.title,
    thumbnail: feed.thumbnail,
    isNew: index === 0, // Mark the first item as new
    isFeatured: index === 0, // Make the first item featured
    viewCount: feed.viewCount,
    isPremium: feed.isPremium
  }));

  return (
    <div className="px-6 pb-20">
      {/* Featured Item */}
      {galleryItems.filter(item => item.isFeatured).map(item => (
        <div key={item.id} className="mb-4">
          <Link to={`/stream/${item.id}`} className="block relative">
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
              
              {/* NEW Badge */}
              {item.isNew && (
                <div className="absolute top-3 left-3 bg-green-500 text-black px-2 py-1 rounded text-xs font-bold">
                  NEW
                </div>
              )}
              
              {/* Premium Badge */}
              {item.isPremium && (
                <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                  PREMIUM
                </div>
              )}
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Title and Stats */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-mono mb-1">{item.title}</p>
                <p className="text-gray-300 text-xs font-mono">{item.viewCount} views</p>
              </div>
            </div>
          </Link>
        </div>
      ))}

      {/* Grid Items */}
      <div className="grid grid-cols-2 gap-3">
        {galleryItems.filter(item => !item.isFeatured).map(item => (
          <div key={item.id}>
            <Link to={`/stream/${item.id}`} className="block relative">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Premium Badge for grid items */}
                {item.isPremium && (
                  <div className="absolute top-2 right-2 bg-yellow-500 text-black px-1 py-0.5 rounded text-xs font-bold">
                    P
                  </div>
                )}
                
                {/* Title */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-mono leading-tight">{item.title}</p>
                  <p className="text-gray-400 text-xs font-mono">{item.viewCount}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid; 