export const categories = [
  'ART',
  'CULTURE',
  'FASHION',
  'CRYPTO & FINANCE',
  'PARTIES',
  'FOOD & DRINK',
  'GAMING',
  'HEALTH & FITNESS',
  'MOVIES & SHOWS',
  'MUSIC',
  'NATURE',
  'LIFESTYLE',
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

// PRODUCTION DEPLOYMENT GUIDE:
// 
// 🚀 OPTION 1: LOCAL IMAGES (Good for MVP/Demo)
// - Put images in public/images/
// - Use: '/images/filename.jpg'
// - Works in production ✅
// - Simple but not optimized for scale
//
// 🌐 OPTION 2: CLOUDINARY (Best for Production Scale)
// - Upload to Cloudinary account
// - Use: 'https://res.cloudinary.com/your-cloud/image/upload/w_400,h_300,c_fill/image.jpg'
// - Auto-optimization, CDN, responsive images
// - Recommended for 20+ images or high traffic
//
// 📈 MIGRATION PATH:
// 1. Start with local images for MVP
// 2. Move to Cloudinary when scaling
// 3. Just change the thumbnail URLs - no code changes needed!

// THUMBNAIL OPTIONS:
// Option 1: Local images (put in public/images/): '/images/my-thumbnail.jpg'
// Option 2: Unsplash URLs: 'https://images.unsplash.com/photo-[ID]?w=400'
// Option 3: Cloudinary URLs: 'https://res.cloudinary.com/[your-cloud]/image/upload/[path]'
// Option 4: Any external URL: 'https://example.com/image.jpg'

export const mockFeeds = [
  {
    id: 0,
    title: 'PARTYGIRL Ibiza',
    creator: '@charlixcx',
    // 🚀 YOUR CUSTOM IMAGE - IMG_2400
    thumbnail: '/images/partygirl-ibiza.png',
    viewCount: '24.7K',
    isPremium: true,
    category: 'LIFESTYLE',
    description: '🎉 Living the Ibiza party life! Exclusive access to the hottest clubs and beach parties. Pure summer vibes and unforgettable nights.',
    videoUrl: null
  },
  {
    id: 1,
    title: 'Front row at PRADA',
    creator: '@rickythompson',
    // 🚀 YOUR CUSTOM IMAGE - IMG_2401
    thumbnail: '/images/prada-front-row.jpg',
    viewCount: '18.9K',
    isPremium: true,
    category: 'FASHION',
    description: '✨ Front row experience at the exclusive PRADA show. Behind-the-scenes access to luxury fashion at its finest.',
    videoUrl: null
  },
  {
    id: 2,
    title: 'Aperol spritz with my besties',
    creator: '@evelynha',
    // 🚀 YOUR CUSTOM IMAGE - IMG_2404
    thumbnail: '/images/aperol-spritz-besties.jpg',
    viewCount: '16.3K',
    isPremium: false,
    category: 'LIFESTYLE',
    description: '🍹 Perfect summer vibes with the best company. Aperol spritz sessions and good times with my closest friends.',
    videoUrl: null
  },
  {
    id: 3,
    title: 'Styling the Nike Bloody Chromes',
    creator: '@alyssaantoci',
    thumbnail: '/images/red_nikes.png',
    viewCount: '42.1K',
    isPremium: false,
    category: 'FASHION',
    description: '👟 Breaking down the styling secrets of the legendary Nike Bloody Chrome sneakers. Fashion meets street culture.',
    videoUrl: null
  },
  {
    id: 4,
    title: 'Poolside at the Bel Air',
    creator: '@shakir.shakir',
    thumbnail: '/images/bel_air_pool.png',
    viewCount: '89.3K',
    isPremium: false,
    category: 'TRAVEL',
    description: '🏊‍♂️ Luxury poolside experience at the exclusive Bel Air resort. Living the high life in LA.',
    videoUrl: null
  },
  {
    id: 5,
    title: 'New smoothie alert',
    creator: '@gabbriette',
    thumbnail: '/images/erewhon.png',
    viewCount: '67.8K',
    isPremium: false,
    category: 'FOOD & DRINK',
    description: '🥤 Discovering the latest smoothie trends at Erewhon. Health meets luxury in this LA hotspot.',
    videoUrl: null,
    isQuest: true
  },
  {
    id: 6,
    title: 'Private Delorean party at Car Week',
    creator: '@threadguy',
    thumbnail: '/images/delorean.png',
    viewCount: '156.7K',
    isPremium: true,
    category: 'LIFESTYLE',
    description: '🚗 Exclusive access to a private Delorean gathering during Monterey Car Week. Automotive history comes alive.',
    videoUrl: null
  },
  {
    id: 7,
    title: 'La playa vision',
    creator: '@diplo',
    thumbnail: '/images/diplo.png',
    viewCount: '203.5K',
    isPremium: true,
    category: 'MUSIC',
    description: '🎵 Electronic music meets beach culture with Diplo. Sunset vibes and beats by the ocean.',
    videoUrl: null
  },
  {
    id: 8,
    title: 'NIGHT 2 at Coachella',
    creator: '@rowanblanchard',
    thumbnail: '/images/coachella.png',
    viewCount: '512.9K',
    isPremium: true,
    category: 'PARTIES',
    description: '🎪 Behind the scenes at Coachella Night 2. Festival fashion, music, and unforgettable moments under the desert stars.',
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