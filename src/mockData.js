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
    title: '🔥 FEEDS Demo Stream - Click to Play! 🔥',
    creator: '@feedsdemo',
    thumbnail: '/images/demo-thumbnail.jpg',
    viewCount: '8.9K',
    isPremium: true,
    category: 'VIBES',
    description: '🎮 Interactive demo of the FEEDS platform! Click to experience the cyberpunk streaming future.',
    videoUrl: 'https://res.cloudinary.com/dgvpig5nb/video/upload/v1754160462/A_hyperrealistic_cinematic_202506261720_lakaga.mp4'
  },
  {
    id: 1,
    title: 'Bike vibing Portland',
    creator: '@bikevibes',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
    viewCount: '2.3K',
    isPremium: false,
    category: 'IRL',
    description: 'Cruising through the streets of Portland on a sunny day',
    // Example: To use local video, put file in public/videos/ and change to:
    // videoUrl: '/videos/your-video.mp4'
    videoUrl: 'https://www.w3schools.com/html/movie.mp4'
  },
  {
    id: 2,
    title: 'Shopping in NYC with Emma #lawofassertation',
    creator: '@emmaasserts',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    viewCount: '8.7K',
    isPremium: true,
    category: 'FASHION',
    description: 'Law of assertion shopping spree in Manhattan',
    // Demo placeholder - replace with actual video
    videoUrl: null
  },
  {
    id: 3,
    title: 'rave fun party SF! #VaynesClub',
    creator: '@ravebaby',
    thumbnail: 'https://images.unsplash.com/photo-1571266028243-d220ce98e143?w=400',
    viewCount: '12.1K',
    isPremium: false,
    category: 'VIBES',
    description: 'Underground rave scene in San Francisco',
    // Demo placeholder - replace with actual video
    videoUrl: null
  },
  {
    id: 4,
    title: 'Benny Blanco COOKS #AstheTest',
    creator: '@bennyblanco',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
    viewCount: '25.4K',
    isPremium: true,
    category: 'FOOD & DRINK',
    description: 'Celebrity chef cooking show live from the kitchen',
    // Demo placeholder - replace with actual video  
    videoUrl: null
  },
  {
    id: 5,
    title: 'Just vibing in la playa + Mojito',
    creator: '@beachvibes',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    viewCount: '5.8K',
    isPremium: true,
    category: 'TRAVEL',
    description: 'Tropical beach vibes with cocktails',
    // Demo placeholder - replace with actual video
    videoUrl: null
  },
  {
    id: 6,
    title: 'Blackjack & the Wynn #TheCenturyboyy',
    creator: '@centuryboy',
    thumbnail: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400',
    viewCount: '15.2K',
    isPremium: false,
    category: 'GAMING',
    description: 'High stakes blackjack from Las Vegas',
    // Demo placeholder - replace with actual video
    videoUrl: null
  }
];

export const topFeeds = [
  {
    id: 1,
    title: 'Joanne Party HEA',
    viewCount: '3.5M views',
    category: 'VIBES'
  },
  {
    id: 2,
    title: 'Weekend at LAV',
    viewCount: '1.2M views',
    category: 'FASHION'
  },
  {
    id: 3,
    title: 'amazing w vangboyz',
    viewCount: '892K views',
    category: 'MUSIC'
  },
  {
    id: 4,
    title: 'Sick Queens Workout',
    viewCount: '654K views',
    category: 'FITNESS'
  },
  {
    id: 5,
    title: 'OCHS Shoot',
    viewCount: '445K views',
    category: 'ART'
  },
  {
    id: 6,
    title: 'French Laundry Next',
    viewCount: '287K views',
    category: 'FOOD'
  }
];

export const topCreators = [
  {
    id: 1,
    username: '@piffermakky',
    subscribers: '643K subscribers',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80'
  },
  {
    id: 2,
    username: '@fransiagonza',
    subscribers: '287K subscribers',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9191e56?w=80'
  },
  {
    id: 3,
    username: '@fabiairateom',
    subscribers: '195K subscribers',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80'
  },
  {
    id: 4,
    username: '@julicataressa',
    subscribers: '156K subscribers',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80'
  },
  {
    id: 5,
    username: '@piliSidne',
    subscribers: '134K subscribers',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80'
  },
  {
    id: 6,
    username: '@rog',
    subscribers: '89K subscribers',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80'
  }
]; 