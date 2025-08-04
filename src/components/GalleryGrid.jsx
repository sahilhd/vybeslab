import { Link } from 'react-router-dom';

const GalleryGrid = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Shopping at Visvim Carmel",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      isNew: true,
      isFeatured: true
    },
    {
      id: 2,
      title: "Vintage shopping in Carmel",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Chilling at Pebble Beach",
      thumbnail: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Some vibes the Malbon store",
      thumbnail: "https://images.unsplash.com/photo-1571266028243-d220ce98e143?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      title: "Drinks at La Playa",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    }
  ];

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
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Title */}
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-white text-sm font-mono">{item.title}</p>
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
                
                {/* Title */}
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-white text-xs font-mono leading-tight">{item.title}</p>
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