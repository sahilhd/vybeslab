# 🚂 Railway Deployment Guide for FEEDS Platform

## 🚀 Quick Deploy to Railway

### Step 1: Prepare Repository
```bash
# Ensure all files are committed
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

### Step 2: Deploy to Railway

#### Option A: Deploy from GitHub (Recommended)
1. **Go to [Railway.app](https://railway.app)**
2. **Sign in** with your GitHub account
3. **Click "New Project"**
4. **Select "Deploy from GitHub repo"**
5. **Choose your FEEDS repository**
6. **Railway will automatically detect and deploy!**

#### Option B: Deploy via Railway CLI
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login to Railway
railway login

# Initialize project
railway link

# Deploy
railway up
```

### Step 3: Configure Environment Variables

In your Railway dashboard:

1. **Go to your project** → **Variables**
2. **Add these variables:**

```bash
# Required for production
VITE_APP_ENV=production
VITE_ENABLE_UPLOADS=true
VITE_ENABLE_PREMIUM=true
VITE_ENABLE_CHAT=true

# Add one cloud storage provider:

# Option A: Cloudinary (Recommended)
VITE_STORAGE_PROVIDER=cloudinary
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset

# Option B: Firebase
# VITE_STORAGE_PROVIDER=firebase
# VITE_FIREBASE_API_KEY=your_api_key
# VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
# VITE_FIREBASE_PROJECT_ID=your_project_id
# VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com

# Option C: AWS S3
# VITE_STORAGE_PROVIDER=aws
# VITE_AWS_REGION=us-east-1
# VITE_AWS_BUCKET_NAME=your-feeds-bucket
```

### Step 4: Set Up Cloud Storage

#### 🎨 Option A: Cloudinary (Easiest)

1. **Sign up** at [cloudinary.com](https://cloudinary.com)
2. **Get your credentials** from dashboard
3. **Create upload preset:**
   - Go to Settings → Upload
   - Add Upload Preset
   - Set to "Unsigned"
   - Save the preset name
4. **Add to Railway variables:**
   ```bash
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_preset_name
   ```

#### 🔥 Option B: Firebase (Good for Google ecosystem)

1. **Create Firebase project** at [console.firebase.google.com](https://console.firebase.google.com)
2. **Enable Storage** in Firebase console
3. **Get config** from Project Settings → General
4. **Add to Railway variables**

#### ☁️ Option C: AWS S3 (Enterprise)

1. **Create S3 bucket** in AWS console
2. **Set up IAM user** with S3 permissions
3. **Configure CORS** for web uploads
4. **Add credentials** to Railway

---

## 🔧 Production Optimizations

### Performance
- ✅ Automatic code splitting
- ✅ Asset optimization
- ✅ Gzip compression
- ✅ CDN delivery via Railway

### Security
- ✅ HTTPS enabled by default
- ✅ Environment variables secured
- ✅ File upload validation
- ✅ CORS properly configured

### Monitoring
- ✅ Railway metrics dashboard
- ✅ Error logging
- ✅ Performance tracking

---

## 🌐 Custom Domain (Optional)

1. **In Railway dashboard** → **Settings** → **Domains**
2. **Add your domain** (e.g., `feeds.yourdomain.com`)
3. **Update DNS** with Railway's CNAME
4. **SSL automatically configured**

---

## 📊 Environment Setup

### Development
```bash
VITE_APP_ENV=development
VITE_API_URL=http://localhost:8000
VITE_ENABLE_UPLOADS=true
```

### Staging
```bash
VITE_APP_ENV=staging
VITE_API_URL=https://api-staging.feeds.app
VITE_ENABLE_UPLOADS=true
```

### Production
```bash
VITE_APP_ENV=production
VITE_API_URL=https://api.feeds.app
VITE_ENABLE_UPLOADS=true
VITE_CLOUDINARY_CLOUD_NAME=your_cloud
```

---

## 🚀 Deployment Commands

### Manual Deploy
```bash
# From your local machine
railway up

# With specific environment
railway up --environment production
```

### Auto Deploy
- ✅ **GitHub integration** - Automatic deploys on push
- ✅ **Pull request previews** - Test changes before merge
- ✅ **Rollback support** - Quick revert to previous versions

---

## 📱 Build Configuration

### Railway automatically detects:
- `package.json` → Node.js app
- `Dockerfile` → Container deployment
- Build command: `npm run build`
- Start command: `npm start`

### Build output:
- Static files served from `dist/`
- Optimized for production
- Assets cached with hashes

---

## 🔍 Troubleshooting

### Build Fails?
```bash
# Check build logs in Railway dashboard
# Common issues:
✅ Ensure all dependencies in package.json
✅ Check environment variables
✅ Verify Node.js version compatibility
```

### Upload Not Working?
```bash
✅ Verify cloud storage credentials
✅ Check CORS settings
✅ Test API endpoints
✅ Review browser console errors
```

### Performance Issues?
```bash
✅ Enable compression
✅ Optimize images/videos
✅ Use CDN for assets
✅ Monitor Railway metrics
```

---

## 📈 Scaling & Monitoring

### Railway Features:
- **Auto-scaling** - Handles traffic spikes
- **Metrics** - CPU, memory, response times
- **Logs** - Real-time application logs
- **Alerts** - Notifications for issues

### Performance Tips:
- Use cloud storage for videos (not local files)
- Implement lazy loading for feeds
- Add caching for API responses
- Optimize images and videos

---

## 🔐 Security Best Practices

### Environment Variables:
- ✅ Never commit secrets to git
- ✅ Use Railway's variable system
- ✅ Rotate keys regularly
- ✅ Use least-privilege access

### File Uploads:
- ✅ Validate file types and sizes
- ✅ Scan for malware (in production)
- ✅ Use signed URLs for sensitive content
- ✅ Implement rate limiting

---

## 🎯 Post-Deployment Checklist

### ✅ Functional Testing:
- [ ] Homepage loads correctly
- [ ] Category filtering works
- [ ] Video playback functions
- [ ] Upload form submits
- [ ] Mobile responsive design

### ✅ Performance Testing:
- [ ] Page load times < 3 seconds
- [ ] Video streaming smooth
- [ ] File uploads complete successfully
- [ ] No console errors

### ✅ SEO & Analytics:
- [ ] Meta tags configured
- [ ] Google Analytics (if enabled)
- [ ] Social media previews
- [ ] Sitemap generation

---

## 🚀 Your FEEDS Platform is Live!

After deployment, your app will be available at:
`https://your-project-name.railway.app`

### Next Steps:
1. **Test all features** on live site
2. **Set up monitoring** and alerts
3. **Configure analytics** tracking
4. **Plan feature updates** and scaling

### Support:
- Railway Docs: [docs.railway.app](https://docs.railway.app)
- Railway Discord: [discord.gg/railway](https://discord.gg/railway)
- GitHub Issues: For app-specific problems

**🎉 Congratulations! Your FEEDS platform is now live and ready for users!** 