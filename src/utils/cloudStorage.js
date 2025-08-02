import config from '../config/production.js';

// Cloudinary Upload
export const uploadToCloudinary = async (file, options = {}) => {
  if (!config.storage.cloudinary.cloudName || !config.storage.cloudinary.uploadPreset) {
    throw new Error('Cloudinary configuration missing');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', config.storage.cloudinary.uploadPreset);
  formData.append('folder', options.folder || 'feeds-videos');
  
  if (options.tags) {
    formData.append('tags', options.tags.join(','));
  }

  const resourceType = file.type.startsWith('video/') ? 'video' : 'image';
  const url = `https://api.cloudinary.com/v1_1/${config.storage.cloudinary.cloudName}/${resourceType}/upload`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Upload failed: ${response.statusText}`);
    }

    const result = await response.json();
    return {
      url: result.secure_url,
      publicId: result.public_id,
      format: result.format,
      size: result.bytes,
      width: result.width,
      height: result.height,
      duration: result.duration // for videos
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
};

// Firebase Upload (when Firebase is configured)
export const uploadToFirebase = async (file, options = {}) => {
  if (!config.storage.firebase.apiKey) {
    throw new Error('Firebase configuration missing');
  }

  try {
    // Only import Firebase if it's actually configured and needed
    // In production, you'd install Firebase SDK: npm install firebase
    throw new Error('Firebase SDK not installed. Run: npm install firebase');
    
    // Uncomment when Firebase is installed:
    // const { getStorage, ref, uploadBytes, getDownloadURL } = await import('firebase/storage');
    // const { initializeApp } = await import('firebase/app');
    // const app = initializeApp(config.storage.firebase);
    // const storage = getStorage(app);
    // const fileName = `${options.folder || 'videos'}/${Date.now()}-${file.name}`;
    // const storageRef = ref(storage, fileName);
    // const snapshot = await uploadBytes(storageRef, file);
    // const downloadURL = await getDownloadURL(snapshot.ref);
    // return { url: downloadURL, path: fileName, size: file.size, type: file.type };
    
  } catch (error) {
    console.error('Firebase upload error:', error);
    throw error;
  }
};

// AWS S3 Upload (when AWS is configured)
export const uploadToAWS = async (file, options = {}) => {
  if (!config.storage.aws.accessKeyId || !config.storage.aws.bucket) {
    throw new Error('AWS configuration missing');
  }

  // This would require AWS SDK - simplified example
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    // In production, you'd use AWS SDK or presigned URLs
    const response = await fetch(`${config.api.baseUrl}/upload/aws`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error(`AWS upload failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('AWS upload error:', error);
    throw error;
  }
};

// Main upload function that chooses provider
export const uploadFile = async (file, options = {}) => {
  // Validate file
  if (!file) {
    throw new Error('No file provided');
  }

  const isVideo = file.type.startsWith('video/');
  const isImage = file.type.startsWith('image/');

  if (!isVideo && !isImage) {
    throw new Error('File must be a video or image');
  }

  // Check file size
  const maxSize = isVideo ? config.performance.maxVideoSize : config.performance.maxThumbnailSize;
  if (file.size > maxSize) {
    throw new Error(`File too large. Max size: ${Math.round(maxSize / 1024 / 1024)}MB`);
  }

  // Check file format
  const allowedFormats = isVideo 
    ? config.performance.allowedVideoFormats 
    : config.performance.allowedImageFormats;
  
  const fileExtension = file.name.split('.').pop().toLowerCase();
  if (!allowedFormats.includes(fileExtension)) {
    throw new Error(`Unsupported format. Allowed: ${allowedFormats.join(', ')}`);
  }

  // Choose upload provider
  switch (config.storage.provider) {
    case 'cloudinary':
      return uploadToCloudinary(file, options);
    case 'firebase':
      return uploadToFirebase(file, options);
    case 'aws':
      return uploadToAWS(file, options);
    default:
      throw new Error(`Unsupported storage provider: ${config.storage.provider}`);
  }
};

// Generate thumbnail from video (client-side)
export const generateVideoThumbnail = (file) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    video.addEventListener('loadedmetadata', () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      video.currentTime = 1; // Get frame at 1 second
    });

    video.addEventListener('seeked', () => {
      ctx.drawImage(video, 0, 0);
      
      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to generate thumbnail'));
        }
      }, 'image/jpeg', 0.8);
    });

    video.addEventListener('error', reject);
    video.src = URL.createObjectURL(file);
  });
};

export default {
  uploadFile,
  uploadToCloudinary,
  uploadToFirebase,
  uploadToAWS,
  generateVideoThumbnail
}; 