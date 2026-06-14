# Arunkumar R — Portfolio Website

## 🚀 Step-by-Step Deployment to Vercel

---

### STEP 1 — Prerequisites
Install these tools on your computer:
- [Node.js](https://nodejs.org) (v18 or later)
- [Git](https://git-scm.com)
- A free account at [github.com](https://github.com)
- A free account at [vercel.com](https://vercel.com)

---

### STEP 2 — Set Up Git Repository

Open your terminal (Command Prompt / PowerShell on Windows, Terminal on Mac/Linux):

```bash
# 1. Create a folder and enter it
mkdir arunkumar-portfolio
cd arunkumar-portfolio

# 2. Copy index.html and vercel.json into this folder

# 3. Initialize git
git init
git add .
git commit -m "Initial portfolio commit"
```

---

### STEP 3 — Push to GitHub

```bash
# 1. Go to github.com → New Repository
#    Name it: arunkumar-portfolio
#    Set to Public, click Create Repository

# 2. Connect your local folder to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/arunkumar-portfolio.git
git branch -M main
git push -u origin main
```

---

### STEP 4 — Deploy to Vercel

**Option A — via Vercel Website (easiest):**
1. Go to [vercel.com](https://vercel.com) → Sign Up / Log In
2. Click **"Add New Project"**
3. Click **"Import"** next to your `arunkumar-portfolio` repository
4. Leave all settings as default
5. Click **"Deploy"**
6. ✅ Your site is live in ~30 seconds!

**Option B — via Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (run from your project folder)
vercel

# Follow the prompts:
# Set up and deploy? → Y
# Which scope? → your account
# Link to existing project? → N
# Project name? → arunkumar-portfolio
# Directory? → ./
# Override settings? → N

# Your site URL will appear at the end!
```

---

### STEP 5 — Your Live URL

After deployment, Vercel gives you a URL like:
```
https://arunkumar-portfolio.vercel.app
```

Share this with recruiters and on your LinkedIn profile!

---

### STEP 6 — Custom Domain (Optional)

If you buy a domain (e.g., arunkumar.dev from Namecheap or GoDaddy):
1. Go to your Vercel project → Settings → Domains
2. Add your domain
3. Follow the DNS instructions Vercel provides

---

### Making Updates

Whenever you change `index.html`:
```bash
git add .
git commit -m "Update portfolio"
git push
```
Vercel automatically redeploys within seconds!

---

### Enable Real Email (Contact Form)

To make the contact form actually send emails:
1. Go to [formspree.io](https://formspree.io) → Create free account
2. Create a new form → copy your Form ID (e.g., `xpzgdkqr`)
3. In `index.html`, find the `handleSend()` function
4. Replace the `setTimeout` block with:

```javascript
fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, message })
}).then(() => {
  status.style.color = '#10B981';
  status.textContent = '✓ Message sent!';
});
```

---

**Files in this project:**
- `index.html` — Complete portfolio (HTML + CSS + JavaScript in one file)
- `vercel.json` — Vercel deployment configuration
- `README.md` — This deployment guide
