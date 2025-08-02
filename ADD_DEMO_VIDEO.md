# 🎬 Adding Your Own Demo Video

## 📁 **Method 1: Add Local Video File**

### Step 1: Add Your Video
```bash
# Copy your video file to public/videos/
cp your-awesome-video.mp4 public/videos/my-demo.mp4
```

### Step 2: Update Mock Data
Edit `src/mockData.js` and change the demo feed:

```javascript
{
  id: 0,
  title: '🔥 My Custom Demo Stream 🔥',
  creator: '@yourname',
  thumbnail: '/images/demo-thumbnail.jpg',
  viewCount: '12.5K',
  isPremium: true,
  category: 'VIBES',
  description: 'Check out my custom demo video!',
  videoUrl: '/videos/my-demo.mp4'  // ← Change this line
},
```

### Step 3: Test
```bash
npm run dev
# Go to http://localhost:3000
# Click the demo feed at the top
```

## 🎨 **Method 2: Custom Thumbnail**

### Add Your Own Thumbnail:
```bash
# Copy your thumbnail image
cp your-thumbnail.jpg public/images/my-thumbnail.jpg
```

### Update the thumbnail path:
```javascript
thumbnail: '/images/my-thumbnail.jpg',
```

## 📱 **Recommended Video Specs**

### ✅ **Best Formats:**
- **MP4** (H.264 codec) - Universal compatibility
- **WebM** - Good for web, smaller file size
- **Resolution**: 720p or 1080p
- **Duration**: 30 seconds to 2 minutes for demos

### ✅ **File Size:**
- **Keep under 50MB** for faster loading
- **10-20MB ideal** for demo videos

## 🎯 **Demo Video Ideas**

### Good Demo Videos:
- Product showcases
- Tutorial clips  
- Screen recordings
- Creative content samples
- Brand videos

### Tips:
- **Start with action** - grab attention immediately
- **Show key features** within first 10 seconds
- **Add captions** for accessibility
- **Keep it short** - demos should be punchy

## 🔄 **Quick Test**

After adding your video:
1. Restart dev server: `npm run dev`
2. Homepage should show your demo feed at the top
3. Click it to test video playback
4. Check that it works on mobile too

Your custom demo will make the platform much more engaging! 🚀 