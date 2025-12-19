# UrbanBlooms - Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Prerequisites
1. ✅ Git installed on your system
2. ✅ Vercel account (sign up at https://vercel.com)
3. ✅ GitHub account (optional but recommended)

---

## Method 1: Deploy via Vercel CLI (Fastest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```
This will open your browser to authenticate.

### Step 3: Deploy from Project Directory
```bash
cd /Users/balavivek.sivanantham/Documents/GitHub/urbanbloom
vercel
```

Follow the prompts:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → urbanbloom (or your preferred name)
- **Directory?** → ./ (just press Enter)
- **Want to override settings?** → No

### Step 4: Production Deployment
Once the preview deployment is successful, deploy to production:
```bash
vercel --prod
```

✅ **Done!** Your site will be live at: `https://urbanbloom-[random].vercel.app`

---

## Method 2: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push to GitHub

#### Initialize Git Repository (if not already done)
```bash
cd /Users/balavivek.sivanantham/Documents/GitHub/urbanbloom

# Initialize git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: UrbanBlooms flower subscription website"
```

#### Push to GitHub
```bash
# Add remote (replace with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/urbanbloom.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to https://vercel.com/dashboard
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your **urbanbloom** repository
5. Click **"Import"**

### Step 3: Configure Project Settings

Vercel will auto-detect Next.js settings. Verify:

**Framework Preset:** Next.js  
**Root Directory:** ./  
**Build Command:** `npm run build`  
**Output Directory:** `.next`  
**Install Command:** `npm install`  

### Step 4: Deploy

Click **"Deploy"** button

⏱️ Deployment takes 2-3 minutes

✅ Once complete, you'll get a live URL like:
`https://urbanbloom.vercel.app`

---

## Method 3: Deploy via Vercel Git Integration (Easiest)

### Step 1: Push to GitHub
Follow Step 1 from Method 2 above

### Step 2: Import Repository
1. Visit https://vercel.com/new
2. Click **"Import Git Repository"**
3. Authorize Vercel to access your GitHub
4. Select **urbanbloom** repository
5. Click **"Import"**

### Step 3: Auto-Deploy
- Vercel automatically detects Next.js
- Click **"Deploy"**
- Wait 2-3 minutes

✅ **Live URL**: `https://urbanbloom-[hash].vercel.app`

---

## 🎯 Post-Deployment Steps

### 1. Test Your Deployment
Visit your Vercel URL and test:
- ✅ Homepage loads
- ✅ Navigation works
- ✅ Product pages load
- ✅ Images display correctly
- ✅ Collection pages work
- ✅ Mobile responsive

### 2. Add Custom Domain (Optional)
1. Go to your project in Vercel Dashboard
2. Click **"Settings"** → **"Domains"**
3. Add your custom domain (e.g., urbanbloom.com)
4. Follow DNS configuration instructions

### 3. Configure Environment Variables (If needed)
1. Go to **"Settings"** → **"Environment Variables"**
2. Add any API keys or secrets
3. Redeploy to apply changes

---

## 📋 Vercel Configuration File (Optional)

Create `vercel.json` in your project root for advanced configuration:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

## 🔧 Troubleshooting

### Issue: Build Fails
**Solution:** Check build logs in Vercel dashboard
```bash
# Test build locally first
npm run build
```

### Issue: Images Not Loading
**Solution:** Images are local SVG files, they should work fine.
If issues occur, check `next.config.js` has:
```javascript
images: {
  unoptimized: true
}
```

### Issue: 404 Errors on Routes
**Solution:** Vercel handles Next.js routes automatically. 
Ensure all route files are committed to git.

---

## 🌟 Automatic Deployments

Once connected to GitHub:
- **Every push to `main`** → Automatic production deployment
- **Every pull request** → Automatic preview deployment
- **Rollback** → Click "Redeploy" on any previous deployment

---

## 📊 Deployment Checklist

Before deploying, ensure:
- ✅ All files committed to git
- ✅ `package.json` has correct scripts
- ✅ `next.config.js` is configured
- ✅ No sensitive data in code
- ✅ Build works locally (`npm run build`)
- ✅ `.gitignore` includes:
  ```
  node_modules/
  .next/
  .env*.local
  ```

---

## 🎯 Quick Command Reference

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs [deployment-url]

# Remove deployment
vercel rm [deployment-name]
```

---

## 🔗 Useful Links

- **Vercel Dashboard**: https://vercel.com/dashboard
- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Custom Domains**: https://vercel.com/docs/custom-domains

---

## 💡 Tips for Success

1. **Use Git**: Always push to GitHub for version control
2. **Test Locally First**: Run `npm run build` before deploying
3. **Check Logs**: View deployment logs in Vercel dashboard
4. **Use Preview Deployments**: Test changes before production
5. **Environment Variables**: Use Vercel's environment variable management
6. **Automatic HTTPS**: Vercel provides free SSL certificates
7. **CDN**: All assets automatically cached on Vercel's edge network

---

## 📱 Expected Deployment

**Build Time**: ~2-3 minutes  
**URL Format**: `https://urbanbloom-[hash].vercel.app`  
**SSL**: ✅ Automatic  
**CDN**: ✅ Global edge network  
**Auto-Deploy**: ✅ On every git push  

---

## 🎊 After Deployment

Your website will be live at a URL like:
**`https://urbanbloom.vercel.app`**

Share this URL with anyone to view your UrbanBlooms flower subscription website!

---

**Need Help?** 
- Vercel Support: https://vercel.com/support
- Next.js Documentation: https://nextjs.org/docs

