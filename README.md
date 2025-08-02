# FEEDS - Retro Livestreaming Platform

A cyberpunk-themed livestreaming platform frontend built with React and Tailwind CSS. This MVP simulates a POV livestreaming experience with a retro/vaporwave aesthetic.

## 🎮 Features

### Homepage
- **Left Sidebar**: Category navigation with retro styling
- **Center Grid**: Trending feeds with thumbnail previews and premium badges
- **Right Sidebar**: Top Feeds and Top Creators lists
- **Top Navigation**: Search bar, genre switcher, and action buttons

### Stream Player
- **Video Player**: Full video player with live indicators
- **Stream Details**: Creator info, descriptions, and progress goals
- **Live Chat**: Interactive chat simulation
- **Social Links**: TikTok, Instagram, YouTube integration placeholders

### Design Elements
- Neon blue cyberpunk color scheme
- VT323 pixel font for retro feel
- Glitch hover effects and neon borders
- Premium badges with pulsing animations
- Responsive mobile-friendly design

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
npm run preview
```

## 🎨 Tech Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library (optional)

## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Main homepage layout
│   ├── Navbar.jsx           # Top navigation bar
│   ├── Sidebar.jsx          # Left category sidebar
│   ├── FeedCard.jsx         # Individual feed thumbnails
│   ├── TopFeeds.jsx         # Right sidebar top feeds
│   ├── TopCreators.jsx      # Right sidebar top creators
│   └── StreamView.jsx       # Individual stream page
├── mockData.js              # Mock data for feeds/creators
├── App.jsx                  # Main app component
├── main.jsx                 # React entry point
└── index.css               # Global styles and Tailwind
```

## 🎯 Key Components

### FeedCard
Individual feed thumbnails with:
- Hover effects and animations
- Premium badges
- View counts and categories
- Smooth transitions

### StreamView
Full stream experience featuring:
- Video player with controls
- Live chat simulation
- Creator profiles
- Progress goals and social links

### Sidebar
Category navigation with:
- Dynamic filtering
- Premium creator highlights
- Neon hover effects

## 🎨 Customization

### Colors
The cyberpunk theme uses these custom Tailwind colors:
- `neon-blue`: #0066ff
- `cyber-black`: #000000
- `neon-magenta`: #ff00ff
- `neon-green`: #00ff00
- `neon-cyan`: #00ffff
- `dark-blue`: #001133
- `electric-purple`: #8b00ff

### Fonts
- **VT323**: Pixel/retro font for headers
- **Space Mono**: Monospace font for body text

### Animations
- Glitch effects on hover
- Neon glow animations
- Smooth transitions
- Pulse effects for live elements

## 📱 Responsive Design

- **Desktop**: Full three-column layout
- **Tablet**: Adapted grid and sidebar
- **Mobile**: Collapsible navigation and stacked layout

## 🔧 Mock Data

The app includes realistic mock data for:
- 6 sample feeds with different categories
- Top creators with subscriber counts
- Popular feeds with view statistics
- Category filtering

## 🎥 Video Integration

Currently uses sample videos from Google's test videos. To add your own:

1. Place video files in the `public` folder
2. Update the `videoUrl` in `mockData.js`
3. Ensure videos are web-compatible (MP4, WebM)

## 🚀 Future Enhancements

- Real-time chat with WebSocket
- User authentication system
- Payment integration for tips
- Mobile app version
- Live streaming integration
- Advanced search and filtering

## 📝 License

This project is for demo purposes. Feel free to use as a starting point for your own projects.

## 🎯 Demo Usage

1. Browse feeds on the homepage
2. Click any feed to view the stream
3. Navigate using the category sidebar
4. Experience the retro cyberpunk aesthetic
5. Test responsive design on different screen sizes

Perfect for showcasing modern React development with a unique retro-futuristic design! 