export const categories = [
  'ART',
  'CULTURE',
  'FASHION',
  'CRYPTO & FINANCE',
  'IRL',
  'FOOD & DRINK',
  'GAMING',
  'HEALTH & FITNESS',
  'MOVIES & SHOWS',
  'MUSIC',
  'NATURE LIFE',
  'NEWS',
  'SPORTS',
  'TECH',
  'TRAVEL',
  'VIBES'
];

// VIDEO UPLOAD GUIDE:
// 1. Add your video files to the 'public/videos/' folder
// 2. Use relative paths like '/videos/your-video.mp4' for videoUrl
// 3. Supported formats: MP4, WebM, OGV
// 4. For thumbnails, you can also use local images in 'public/images/'

export const mockFeeds = [
  {
    id: 0,
    title: '🛍️ Shopping at Visvim in Carmel - Premium Experience',
    creator: '@lifestylevibes',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    viewCount: '12.4K',
    isPremium: true,
    category: 'FASHION',
    description: '🎯 Premium shopping experience at Visvim in Carmel-by-the-Sea. Exploring the latest drops and exclusive pieces in this iconic store.',
    videoUrl: 'https://res.cloudinary.com/dgvpig5nb/video/upload/v1754251899/Shopping_at_Visvim_in_Carmel_1_ul2svu.mp4'
  },
  {
    id: 1,
    title: '⛳ Putting at The Hay in Pebble Beach',
    creator: '@golfpro',
    thumbnail: 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=400',
    viewCount: '8.9K',
    isPremium: true,
    category: 'SPORTS',
    description: '🏌️‍♂️ Perfecting my putting game at The Hay, the iconic par-3 course at Pebble Beach. Beautiful coastal views and challenging greens.',
    videoUrl: 'https://res.cloudinary.com/dgvpig5nb/video/upload/v1754251897/Putting_at_The_Hay_in_Pebble_Beach_cprxjb.mp4'
  },
  {
    id: 2,
    title: '🛍️ Visiting the Malbon Store in Carmel',
    creator: '@golfstyle',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    viewCount: '6.7K',
    isPremium: false,
    category: 'FASHION',
    description: '🎯 Exploring the Malbon store in Carmel - premium golf lifestyle and streetwear. The perfect blend of golf culture and fashion.',
    videoUrl: 'https://res.cloudinary.com/dgvpig5nb/video/upload/v1754251900/Visiting_the_Malbon_Store_in_Carmel_tmdnwq.mp4'
  },
  {
    id: 3,
    title: '🛍️ Shopping at Visvim in Carmel - Part 2',
    creator: '@lifestylevibes',
    thumbnail: 'https://images.unsplash.com/photo-1571266028243-d220ce98e143?w=400',
    viewCount: '9.2K',
    isPremium: true,
    category: 'FASHION',
    description: '🎯 Continuing the Visvim shopping experience in Carmel. More exclusive pieces and premium lifestyle content.',
    videoUrl: 'https://res.cloudinary.com/dgvpig5nb/video/upload/v1754251900/Shopping_at_Visvim_in_Carmel_2_bvwuu7.mp4'
  },
  {
    id: 4,
    title: '⛳ Golf Course Tour - Pebble Beach',
    creator: '@golfpro',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    viewCount: '15.8K',
    isPremium: true,
    category: 'SPORTS',
    description: '🏌️‍♂️ Exclusive tour of the legendary Pebble Beach Golf Links. Walking through one of the most beautiful golf courses in the world.',
    videoUrl: null
  },
  {
    id: 5,
    title: '🛍️ Golf Lifestyle Shopping Spree',
    creator: '@golfstyle',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    viewCount: '7.3K',
    isPremium: false,
    category: 'FASHION',
    description: '🎯 Shopping for the latest golf lifestyle gear and premium golf apparel. From clubs to clothing, we cover it all.',
    videoUrl: null
  },
  {
    id: 6,
    title: '⛳ Pro Golf Tips & Techniques',
    creator: '@golfpro',
    thumbnail: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400',
    viewCount: '18.5K',
    isPremium: true,
    category: 'SPORTS',
    description: '🏌️‍♂️ Professional golf tips and techniques from the course. Improving your game with expert advice and demonstrations.',
    videoUrl: null
  }
];

export const topFeeds = [
  {
    id: 1,
    title: '🛍️ Shopping at Visvim in Carmel',
    viewCount: '12.4K views',
    category: 'FASHION'
  },
  {
    id: 2,
    title: '⛳ Putting at The Hay - Pebble Beach',
    viewCount: '8.9K views',
    category: 'SPORTS'
  },
  {
    id: 3,
    title: '🛍️ Malbon Store Tour - Carmel',
    viewCount: '6.7K views',
    category: 'FASHION'
  },
  {
    id: 4,
    title: '⛳ Golf Course Tour - Pebble Beach',
    viewCount: '15.8K views',
    category: 'SPORTS'
  },
  {
    id: 5,
    title: '🛍️ Visvim Shopping - Part 2',
    viewCount: '9.2K views',
    category: 'FASHION'
  },
  {
    id: 6,
    title: '⛳ Pro Golf Tips & Techniques',
    viewCount: '18.5K views',
    category: 'SPORTS'
  }
];

export const topCreators = [
  {
    id: 1,
    username: '@lifestylevibes',
    subscribers: '45.2K subscribers',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80'
  },
  {
    id: 2,
    username: '@golfpro',
    subscribers: '38.7K subscribers',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9191e56?w=80'
  },
  {
    id: 3,
    username: '@golfstyle',
    subscribers: '29.5K subscribers',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80'
  },
  {
    id: 4,
    username: '@carmelvibes',
    subscribers: '22.1K subscribers',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80'
  },
  {
    id: 5,
    username: '@pebblebeachpro',
    subscribers: '18.9K subscribers',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80'
  },
  {
    id: 6,
    username: '@golflifestyle',
    subscribers: '15.3K subscribers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80'
  }
]; 