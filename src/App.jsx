import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './components/HomePage';
import StreamView from './components/StreamView';
import VideoUpload from './components/VideoUpload';
import GlassesPage from './components/GlassesPage';
import Navbar from './components/Navbar';
import { mockFeeds } from './mockData';

function App() {
  const [feeds, setFeeds] = useState(mockFeeds);

  const handleVideoUpload = (newFeed) => {
    setFeeds(prevFeeds => [newFeed, ...prevFeeds]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-blue via-neon-blue to-dark-blue">
      <Navbar />
      <main className="pt-16">
                     <Routes>
               <Route path="/" element={<HomePage feeds={feeds} />} />
               <Route path="/stream/:id" element={<StreamView feeds={feeds} />} />
               <Route path="/upload" element={<VideoUpload onVideoUpload={handleVideoUpload} />} />
               <Route path="/glasses" element={<GlassesPage />} />
             </Routes>
      </main>
    </div>
  );
}

export default App; 