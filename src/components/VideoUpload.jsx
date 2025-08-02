import { useState } from 'react';
import { uploadFile, generateVideoThumbnail } from '../utils/cloudStorage';
import config from '../config/production';

const VideoUpload = ({ onVideoUpload }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState(null);
  const [feedData, setFeedData] = useState({
    title: '',
    creator: '',
    category: 'IRL',
    description: '',
    isPremium: false
  });
  const [isUploading, setIsUploading] = useState(false);

  const categories = [
    'ART', 'CULTURE', 'FASHION', 'CRYPTO & FINANCE', 'IRL',
    'FOOD & DRINK', 'GAMING', 'HEALTH & FITNESS', 'MOVIES & SHOWS',
    'MUSIC', 'NATURE LIFE', 'NEWS', 'SPORTS', 'TECH', 'TRAVEL', 'VIBES'
  ];

  const handleVideoSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedVideo(file);
    }
  };

  const handleThumbnailSelect = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedThumbnail(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedVideo || !feedData.title) return;

    setIsUploading(true);

    try {
      let videoUrl, thumbnailUrl;

      // Check if cloud storage is configured
      if (config.features.enableUploads && config.storage.provider) {
        // Production: Upload to cloud storage
        console.log('Uploading to cloud storage...');
        
        // Upload video
        const videoResult = await uploadFile(selectedVideo, {
          folder: 'feeds-videos',
          tags: [feedData.category, 'user-upload']
        });
        videoUrl = videoResult.url;

        // Upload or generate thumbnail
        if (selectedThumbnail) {
          const thumbnailResult = await uploadFile(selectedThumbnail, {
            folder: 'feeds-thumbnails',
            tags: [feedData.category, 'thumbnail']
          });
          thumbnailUrl = thumbnailResult.url;
        } else {
          // Auto-generate thumbnail from video
          try {
            const thumbnailBlob = await generateVideoThumbnail(selectedVideo);
            const thumbnailResult = await uploadFile(thumbnailBlob, {
              folder: 'feeds-thumbnails',
              tags: [feedData.category, 'auto-thumbnail']
            });
            thumbnailUrl = thumbnailResult.url;
          } catch (thumbError) {
            console.warn('Thumbnail generation failed:', thumbError);
            thumbnailUrl = '/images/default-thumbnail.jpg';
          }
        }

      } else {
        // Development: Use object URLs (temporary)
        console.log('Using local object URLs (development mode)');
        videoUrl = URL.createObjectURL(selectedVideo);
        thumbnailUrl = selectedThumbnail 
          ? URL.createObjectURL(selectedThumbnail)
          : '/images/default-thumbnail.jpg';
      }

      const newFeed = {
        id: Date.now(),
        ...feedData,
        videoUrl,
        thumbnail: thumbnailUrl,
        viewCount: '0'
      };

      onVideoUpload(newFeed);
      
      // Reset form
      setSelectedVideo(null);
      setSelectedThumbnail(null);
      setFeedData({
        title: '',
        creator: '',
        category: 'IRL',
        description: '',
        isPremium: false
      });

      alert('Feed uploaded successfully!');

    } catch (error) {
      console.error('Upload failed:', error);
      alert(`Upload failed: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="bg-cyber-black border border-neon-blue rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-pixel text-neon-cyan mb-6 neon-text">
        UPLOAD NEW FEED
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Video Upload */}
        <div>
          <label className="block font-mono text-neon-cyan mb-2">
            Video File *
          </label>
          <div className="relative">
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoSelect}
              className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-cyan"
            />
            {selectedVideo && (
              <div className="mt-2 text-neon-green font-mono text-sm">
                ✓ {selectedVideo.name}
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail Upload */}
        <div>
          <label className="block font-mono text-neon-cyan mb-2">
            Thumbnail Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleThumbnailSelect}
            className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-cyan"
          />
          {selectedThumbnail && (
            <div className="mt-2 text-neon-green font-mono text-sm">
              ✓ {selectedThumbnail.name}
            </div>
          )}
        </div>

        {/* Feed Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-mono text-neon-cyan mb-2">
              Title *
            </label>
            <input
              type="text"
              value={feedData.title}
              onChange={(e) => setFeedData({...feedData, title: e.target.value})}
              className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-cyan"
              placeholder="Amazing stream title..."
            />
          </div>

          <div>
            <label className="block font-mono text-neon-cyan mb-2">
              Creator Handle *
            </label>
            <input
              type="text"
              value={feedData.creator}
              onChange={(e) => setFeedData({...feedData, creator: e.target.value})}
              className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-cyan"
              placeholder="@username"
            />
          </div>
        </div>

        <div>
          <label className="block font-mono text-neon-cyan mb-2">
            Category
          </label>
          <select
            value={feedData.category}
            onChange={(e) => setFeedData({...feedData, category: e.target.value})}
            className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-cyan"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-mono text-neon-cyan mb-2">
            Description
          </label>
          <textarea
            value={feedData.description}
            onChange={(e) => setFeedData({...feedData, description: e.target.value})}
            className="w-full bg-dark-blue border border-neon-blue rounded px-4 py-3 text-white font-mono focus:outline-none focus:border-neon-cyan"
            placeholder="Tell viewers about your stream..."
            rows="3"
          />
        </div>

        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="premium"
            checked={feedData.isPremium}
            onChange={(e) => setFeedData({...feedData, isPremium: e.target.checked})}
            className="w-4 h-4"
          />
          <label htmlFor="premium" className="font-mono text-neon-magenta">
            Premium Content
          </label>
        </div>

        {/* Video Preview */}
        {selectedVideo && (
          <div>
            <label className="block font-mono text-neon-cyan mb-2">
              Preview
            </label>
            <video
              src={URL.createObjectURL(selectedVideo)}
              controls
              className="w-full max-w-md rounded border border-neon-blue"
            />
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedVideo || !feedData.title || isUploading}
          className="w-full cyber-button py-3 font-mono rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUploading ? 'UPLOADING...' : 'CREATE FEED'}
        </button>
      </form>
    </div>
  );
};

export default VideoUpload; 