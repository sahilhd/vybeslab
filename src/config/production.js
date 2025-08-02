// Production Configuration for FEEDS Platform

export const config = {
  // App Settings
  app: {
    title: import.meta.env.VITE_APP_TITLE || 'FEEDS - Livestream Platform',
    environment: import.meta.env.VITE_APP_ENV || 'production',
    version: '1.0.0'
  },

  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://api.feeds.app',
    websocketUrl: import.meta.env.VITE_WS_URL || 'wss://api.feeds.app',
    timeout: 10000
  },

  // Feature Flags
  features: {
    enableUploads: import.meta.env.VITE_ENABLE_UPLOADS === 'true',
    enablePremium: import.meta.env.VITE_ENABLE_PREMIUM === 'true',
    enableChat: import.meta.env.VITE_ENABLE_CHAT === 'true',
    enableAnalytics: !!import.meta.env.VITE_GA_TRACKING_ID
  },

  // Cloud Storage Configuration
  storage: {
    provider: import.meta.env.VITE_STORAGE_PROVIDER || 'cloudinary', // cloudinary, firebase, aws
    
    // Cloudinary
    cloudinary: {
      cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
      uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY
    },

    // Firebase
    firebase: {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
    },

    // AWS S3
    aws: {
      region: import.meta.env.VITE_AWS_REGION,
      bucket: import.meta.env.VITE_AWS_BUCKET_NAME,
      accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
      secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY
    }
  },

  // Analytics
  analytics: {
    googleTrackingId: import.meta.env.VITE_GA_TRACKING_ID
  },

  // Performance
  performance: {
    maxVideoSize: 100 * 1024 * 1024, // 100MB
    allowedVideoFormats: ['mp4', 'webm', 'mov'],
    maxThumbnailSize: 5 * 1024 * 1024, // 5MB
    allowedImageFormats: ['jpg', 'jpeg', 'png', 'webp']
  }
};

// Development overrides
if (config.app.environment === 'development') {
  config.api.baseUrl = 'http://localhost:8000';
  config.api.websocketUrl = 'ws://localhost:8000';
  config.features.enableUploads = true;
  config.features.enablePremium = true;
  config.features.enableChat = true;
}

export default config; 