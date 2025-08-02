# 🎬 Video Upload Guide for FEEDS

## 🚀 Quick Start (Easiest Method)

### 1. Add Videos to Public Folder
```bash
# Create video folder (already created)
mkdir -p public/videos
mkdir -p public/images

# Copy your videos
cp your-video.mp4 public/videos/
cp your-thumbnail.jpg public/images/
```

### 2. Update Mock Data
Edit `src/mockData.js` and change the URLs:

```javascript
// Before
videoUrl: 'https://external-url.com/video.mp4'
thumbnail: 'https://external-url.com/image.jpg'

// After  
videoUrl: '/videos/your-video.mp4'           // ✅ Local video
thumbnail: '/images/your-thumbnail.jpg'      // ✅ Local thumbnail
```

### 3. Test Your Video
- Restart the dev server: `npm run dev`
- Click on your feed to see the video player

---

## 📹 Supported Video Formats

✅ **Recommended:**
- MP4 (H.264) - Best compatibility
- WebM - Good for web
- MOV - Works but larger file size

❌ **Avoid:**
- AVI, WMV, FLV - Poor web support
- Very large files (>100MB) - Slow loading

---

## 🎯 Method 1: Static Local Videos (Best for MVP)

**Pros:** Simple, fast, no server needed
**Cons:** Videos bundled with app

1. **Add files:**
   ```
   public/
   ├── videos/
   │   ├── stream1.mp4
   │   ├── stream2.mp4
   │   └── stream3.mp4
   └── images/
       ├── thumb1.jpg
       ├── thumb2.jpg
       └── thumb3.jpg
   ```

2. **Update mockData.js:**
   ```javascript
   export const mockFeeds = [
     {
       id: 1,
       title: 'My Amazing Stream',
       creator: '@myhandle',
       videoUrl: '/videos/stream1.mp4',
       thumbnail: '/images/thumb1.jpg',
       // ... other fields
     }
   ];
   ```

---

## 🎮 Method 2: Dynamic Upload Component (Interactive)

**Pros:** Users can upload through UI
**Cons:** Files stored temporarily in browser

✅ **Already implemented!** 
- Go to `/upload` in your app
- Fill out the form and select video/thumbnail
- Click "CREATE FEED"

**Code Example:**
```javascript
// The VideoUpload component handles:
// - File selection
// - Form validation  
// - Preview generation
// - Adding to feed list
```

---

## ☁️ Method 3: Cloud Storage (Production Ready)

**For real apps, integrate with:**

### Option A: Firebase Storage
```javascript
import { uploadBytes, getDownloadURL } from 'firebase/storage';

const uploadToFirebase = async (file) => {
  const storageRef = ref(storage, `videos/${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  return await getDownloadURL(snapshot.ref);
};
```

### Option B: AWS S3
```javascript
import AWS from 'aws-sdk';

const uploadToS3 = async (file) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: 'your-bucket',
    Key: file.name,
    Body: file
  };
  const result = await s3.upload(params).promise();
  return result.Location;
};
```

### Option C: Cloudinary
```javascript
const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'your_preset');
  
  const response = await fetch(
    'https://api.cloudinary.com/v1_1/your-cloud/video/upload',
    { method: 'POST', body: formData }
  );
  return response.json();
};
```

---

## 🎨 Adding Your Own Content

### Example: Personal Streaming Setup

1. **Record/Get Videos:**
   - Use OBS, phone recording, etc.
   - Keep files under 50MB for better performance

2. **Create Thumbnails:**
   - 16:9 aspect ratio (e.g., 640x360px)
   - Eye-catching, clear images
   - JPG or PNG format

3. **Add to Project:**
   ```bash
   # Copy files
   cp my-cooking-stream.mp4 public/videos/
   cp cooking-thumb.jpg public/images/
   ```

4. **Update Feed Data:**
   ```javascript
   {
     id: 7,
     title: 'Epic Cooking Stream 🔥',
     creator: '@yourname',
     thumbnail: '/images/cooking-thumb.jpg',
     videoUrl: '/videos/my-cooking-stream.mp4',
     viewCount: '1.2K',
     isPremium: false,
     category: 'FOOD & DRINK',
     description: 'Making amazing pasta from scratch!'
   }
   ```

---

## 🔧 Troubleshooting

### Video Won't Play?
- ✅ Check file format (MP4 recommended)
- ✅ Verify path is correct (`/videos/filename.mp4`)
- ✅ Ensure file exists in `public/videos/`
- ✅ Check browser console for errors

### Upload Component Not Working?
- ✅ Make sure you're on `/upload` route
- ✅ Select both video file and fill required fields
- ✅ Check browser supports file input

### Large File Issues?
- ✅ Compress videos (use HandBrake, FFmpeg)
- ✅ Consider cloud storage for large files
- ✅ Add loading states for user feedback

---

## 📱 Mobile Considerations

- Use `accept="video/*"` for mobile camera access
- Consider file size limits on mobile
- Test video playback on different devices
- Provide multiple quality options

---

## 🚀 Quick Test

1. **Download a test video:**
   ```bash
   curl -o public/videos/test.mp4 "https://sample-videos.com/zip/10/mp4/360/SampleVideo_360x240_1mb.mp4"
   ```

2. **Update a feed in mockData.js:**
   ```javascript
   videoUrl: '/videos/test.mp4'
   ```

3. **Restart and test:**
   ```bash
   npm run dev
   ```

---

## 🎯 Next Steps

- **MVP:** Use Method 1 (static files)
- **Demo:** Add Method 2 (upload component) 
- **Production:** Implement Method 3 (cloud storage)
- **Advanced:** Add video processing, multiple qualities, live streaming

Your FEEDS platform is ready for videos! 🎬✨ 