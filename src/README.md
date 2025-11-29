# SafeHaven - Domestic Violence Support Platform

A comprehensive web application providing resources, support services, and legal guidance for individuals experiencing domestic violence.

## 🌟 Features

### Core Functionality
- ✅ **Authentication System** - Secure registration and login with form validation
- ✅ **Dynamic Theme Switcher** - 4 color themes (Purple, Blue, Green, Pink)
- ✅ **Routing & Navigation** - 8+ pages with protected routes
- ✅ **CRUD Operations** - Full Create, Read, Update, Delete for incident reports
- ✅ **Data Persistence** - Local storage for all user data
- ✅ **Form Validation** - Comprehensive validation with error handling
- ✅ **CAPTCHA Protection** - Bot prevention on registration

### Advanced Features
- 📊 **Personal Dashboard** - Track reports and statistics
- 💬 **Support Chat** - Real-time chat with simulated counselor responses
- 📚 **Resource Library** - Categorized resources with search functionality
- 🏥 **Support Services Directory** - Searchable database of hotlines, shelters, and legal aid
- ⚖️ **Legal Rights Information** - Detailed guides on restraining orders, custody, etc.
- 🚨 **Emergency Help Page** - Quick access to emergency services and safety planning

## 🚀 Live Demo

Once deployed, your application will be accessible at:
- Vercel: `https://your-app-name.vercel.app`
- Netlify: `https://your-app-name.netlify.app`
- GitHub Pages: `https://username.github.io/repo-name`

## 📦 Tech Stack

- **Frontend Framework:** React 18+ with TypeScript
- **Routing:** React Router v6
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **State Management:** React Context API
- **Storage:** LocalStorage API

## 🛠️ Installation & Local Development

### Prerequisites
- Node.js 16+ and npm/yarn installed

### Setup Instructions

1. **Clone or Download the Repository**
```bash
git clone <your-repo-url>
cd safehaven-app
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run Development Server**
```bash
npm run dev
```

4. **Open in Browser**
```
http://localhost:5173
```

## 🌐 Deployment Instructions

### Option 1: Deploy to Vercel (Recommended - Easiest)

#### Method A: Via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your Git repository (GitHub, GitLab, or Bitbucket)
4. Vercel auto-detects the framework settings
5. Click "Deploy"
6. Your app will be live in 1-2 minutes!

#### Method B: Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Your live URL:** `https://your-app-name.vercel.app`

---

### Option 2: Deploy to Netlify

#### Method A: Drag & Drop
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify's deploy zone
4. Your site is live!

#### Method B: Via Git
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your Git provider and select repository
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

#### Method C: Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

**Your live URL:** `https://your-app-name.netlify.app`

---

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages package**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/repo-name"
}
```

3. **Deploy**
```bash
npm run deploy
```

**Your live URL:** `https://yourusername.github.io/repo-name`

---

### Option 4: Deploy to Render

1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Static Site"
3. Connect your repository
4. Configure:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
5. Click "Create Static Site"

**Your live URL:** `https://your-app-name.onrender.com`

---

### Option 5: Deploy to Railway

1. Go to [railway.app](https://railway.app) and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects and deploys
5. Add a custom domain or use Railway's subdomain

---

## 📁 Project Structure

```
safehaven-app/
├── components/
│   ├── auth/
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── ProtectedRoute.tsx
│   ├── dashboard/
│   │   └── Dashboard.tsx
│   ├── resources/
│   │   └── Resources.tsx
│   ├── support/
│   │   └── SupportServices.tsx
│   ├── emergency/
│   │   └── EmergencyHelp.tsx
│   ├── legal/
│   │   └── LegalRights.tsx
│   ├── chat/
│   │   └── Chat.tsx
│   ├── Layout.tsx
│   └── Home.tsx
├── contexts/
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── utils/
│   └── storage.ts
├── styles/
│   └── globals.css
├── App.tsx
└── README.md
```

## 🎨 Theme Customization

The app supports 4 color themes that can be changed by users:
- **Purple** (Default) - `#9333EA`
- **Blue** - `#2563EB`
- **Green** - `#059669`
- **Pink** - `#DB2777`

Themes are stored in localStorage and persist across sessions.

## 🔐 Security & Privacy

- All user data is stored locally in the browser (localStorage)
- No backend server or database required
- Passwords are stored in localStorage (for demo purposes only)
- **Important:** For production use with real users, implement proper backend authentication

## ⚠️ Important Notes

### For Production Deployment:
1. **Replace Local Storage with Backend:** This demo uses localStorage. For real users, implement a secure backend with proper database.
2. **Add Real Authentication:** Use services like Auth0, Firebase Auth, or implement JWT-based auth.
3. **Environment Variables:** Store sensitive data in environment variables.
4. **HTTPS:** Ensure your deployment uses HTTPS (all mentioned platforms provide this automatically).
5. **Privacy Considerations:** This app is for demonstration. Real implementations must comply with HIPAA, GDPR, and other privacy regulations.

## 🆘 Emergency Resources

**National Domestic Violence Hotline:**
- Phone: 1-800-799-7233
- Website: thehotline.org
- Available 24/7

## 📝 License

This project is created for educational purposes.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Support

For deployment issues or questions:
- Check the platform-specific documentation
- Review deployment logs
- Ensure all dependencies are correctly installed

---

## 🎯 Quick Start Summary

**Fastest deployment (< 5 minutes):**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"
6. Done! Share your live link 🎉

---

**Built with ❤️ for survivors of domestic violence**
