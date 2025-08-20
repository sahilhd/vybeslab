import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import StreamView from './components/StreamView';
import VideoUpload from './components/VideoUpload';
import GlassesPage from './components/GlassesPage';
import ProfilePage from './components/ProfilePage';
import VisionQuest from './components/VisionQuest';
import GoLive from './components/GoLive';
import Navbar from './components/Navbar';
import MobileBottomNav from './components/MobileBottomNav';
import Stories from './components/Stories';
import { mockFeeds } from './mockData';

function App() {
  const [feeds, setFeeds] = useState(mockFeeds);
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [isStoriesOpen, setIsStoriesOpen] = useState(false);

  const handleVideoUpload = (newFeed) => {
    setFeeds(prevFeeds => [newFeed, ...prevFeeds]);
  };

  const handleStoryClick = (creator) => {
    console.log('Story clicked for creator:', creator.username);
    setSelectedCreator(creator);
    setIsStoriesOpen(true);
  };

  const handleCloseStories = () => {
    setIsStoriesOpen(false);
    setSelectedCreator(null);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={
          <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
            <Navbar />
            <main className="pt-16">
              <HomePage feeds={feeds} onStoryClick={handleStoryClick} />
            </main>
          </div>
        } />
      <Route path="/app/stream/:id" element={
        <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
          <Navbar />
          <main className="pt-16">
            <StreamView feeds={feeds} />
          </main>
        </div>
      } />
      <Route path="/app/upload" element={
        <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
          <Navbar />
          <main className="pt-16">
            <VideoUpload onVideoUpload={handleVideoUpload} />
          </main>
        </div>
      } />
      <Route path="/app/glasses" element={
        <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
          <Navbar />
          <main className="pt-16">
            <GlassesPage />
          </main>
        </div>
      } />
      <Route path="/app/quests" element={
        <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
          <Navbar />
          <main className="pt-16">
            <VisionQuest />
          </main>
        </div>
      } />
      <Route path="/app/live" element={
        <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
          <Navbar />
          <main className="pt-16">
            <GoLive />
          </main>
        </div>
      } />
      <Route path="/app/profile" element={
        <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
          <Navbar />
          <main className="pt-16">
            <ProfilePage feeds={feeds} />
          </main>
        </div>
      } />
      </Routes>

      {/* Global Stories Component */}
      <Stories 
        creator={selectedCreator}
        isOpen={isStoriesOpen}
        onClose={handleCloseStories}
      />
    </>
  );
}

export default App; 