# 🎬 Adding Custom Videos to Production Demo

## 🚀 **Option 1: Deploy with App (Recommended for Demo)**

### **Step 1: Add Your Videos**
```bash
# Navigate to your project
cd /Users/sahilhanda/Desktop/projects/vybes/vybeslab

# Copy your videos to public folder
cp ~/Desktop/my-awesome-video.mp4 public/videos/demo-custom.mp4
cp ~/Desktop/my-thumbnail.jpg public/images/demo-custom-thumb.jpg
```

### **Step 2: Update Mock Data**
Edit `src/mockData.js` and replace the demo feed:

```javascript
{
  id: 0,
  title: '🔥 My Custom Demo Video 🔥',
  creator: '@yourname',
  thumbnail: '/images/demo-custom-thumb.jpg',  // Your custom thumbnail
  viewCount: '15.2K',
  isPremium: true,
  category: 'VIBES',
  description: 'Check out my amazing custom video demo!',
  videoUrl: '/videos/demo-custom.mp4'  // Your custom video
},
```

### **Step 3: Deploy**
```bash
git add .
git commit -m "Add custom demo video"
git push origin main
# Railway auto-deploys!
```

---

## ☁️ **Option 2: Upload to Cloudinary (Professional)**

### **Step 1: Upload via Cloudinary Dashboard**
1. Go to [cloudinary.com/console](https://cloudinary.com/console)
2. Click "Media Library" 
3. Click "Upload" → Select your video
4. Copy the generated URL

### **Step 2: Use Cloudinary URL**
```javascript
{
  id: 0,
  title: '🔥 My Custom Demo Video 🔥',
  videoUrl: 'https://res.cloudinary.com/YOUR_CLOUD/video/upload/v123456789/your-video.mp4'
}
```

---

## 📱 **Option 3: Quick File Upload Services**

### **For Quick Testing:**

#### **Google Drive (Public)**
1. Upload video to Google Drive
2. Right-click → "Get link" → "Anyone with link"
3. Change URL format:
   ```
   From: https://drive.google.com/file/d/FILE_ID/view
   To:   https://drive.google.com/uc?export=download&id=FILE_ID
   ```

#### **Dropbox**
1. Upload to Dropbox
2. Get share link
3. Change `?dl=0` to `?dl=1`

---

## 🎯 **Best Practices**

### **Video Specs for Demo:**
- **Format**: MP4 (H.264)
- **Resolution**: 720p or 1080p
- **Duration**: 30 seconds - 2 minutes
- **File Size**: Under 50MB for fast loading

### **Thumbnail Specs:**
- **Format**: JPG or PNG
- **Aspect Ratio**: 16:9 (e.g., 640x360)
- **File Size**: Under 500KB

---

## 🛠️ **Complete Example**

Let's say you have a video called `my-stream.mp4`:

### **1. Add Files:**
```bash
cp ~/Desktop/my-stream.mp4 public/videos/custom-demo.mp4
cp ~/Desktop/my-thumb.jpg public/images/custom-thumb.jpg
```

### **2. Update mockData.js:**
```javascript
export const mockFeeds = [
  {
    id: 0,
    title: '🎥 My Epic Stream Demo!',
    creator: '@yourhandle',
    thumbnail: '/images/custom-thumb.jpg',
    viewCount: '25.4K',
    isPremium: true,
    category: 'VIBES',
    description: 'My custom video showcasing awesome content!',
    videoUrl: '/videos/custom-demo.mp4'
  },
  // ... rest of feeds
];
```

### **3. Test Locally:**
```bash
npm run dev
# Go to http://localhost:3000
# Click your custom demo feed
```

### **4. Deploy:**
```bash
git add .
git commit -m "🎬 Add my custom demo video"
git push origin main
```

---

## 📊 **File Size Considerations**

### **Local Deployment (Option 1):**
- ✅ **Pros**: Simple, reliable, no external dependencies
- ⚠️ **Cons**: Increases app bundle size
- 📏 **Limit**: Keep videos under 50MB each

### **Cloud Storage (Option 2):**
- ✅ **Pros**: No bundle size impact, professional CDN
- ⚠️ **Cons**: Requires cloud setup
- 📏 **Limit**: Virtually unlimited

---

## 🎬 **Multiple Videos Example**

Want to showcase multiple custom videos?

```javascript
export const mockFeeds = [
  {
    id: 0,
    title: '🔥 My Main Demo',
    videoUrl: '/videos/demo-main.mp4',
    thumbnail: '/images/thumb-main.jpg'
  },
  {
    id: 1,
    title: '🎮 Gaming Highlights',
    videoUrl: '/videos/demo-gaming.mp4',
    thumbnail: '/images/thumb-gaming.jpg'
  },
  {
    id: 2,
    title: '🎨 Creative Process',
    videoUrl: '/videos/demo-creative.mp4',
    thumbnail: '/images/thumb-creative.jpg'
  }
];
```

---

## 🚀 **Quick Start Commands**

```bash
# 1. Add your video
cp your-video.mp4 public/videos/my-demo.mp4

# 2. Add thumbnail  
cp your-thumbnail.jpg public/images/my-thumb.jpg

# 3. Update demo feed in src/mockData.js
# Change videoUrl to: '/videos/my-demo.mp4'
# Change thumbnail to: '/images/my-thumb.jpg'

# 4. Deploy
git add . && git commit -m "Add custom demo" && git push origin main
```

Your custom video will be live on Railway in 2-5 minutes! 🎉 