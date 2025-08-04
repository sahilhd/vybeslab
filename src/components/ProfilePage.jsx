import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserHeader from './UserHeader';
import GalleryGrid from './GalleryGrid';
import BottomTabBar from './BottomTabBar';

const ProfilePage = () => {
  const [isSubscribed, setIsSubscribed] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-mono relative max-w-md mx-auto">
      {/* Back Button */}
      <div className="absolute top-12 left-4 z-50">
        <Link 
          to="/" 
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
      </div>

      {/* User Header */}
      <UserHeader />

      {/* Action Buttons */}
      <div className="px-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          {/* Like Button */}
          <button 
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-3 min-w-[80px] justify-center"
          >
            <svg className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-sm">❤️</span>
          </button>

          {/* Mute Button */}
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="flex items-center space-x-2 bg-gray-800 rounded-lg px-4 py-3 min-w-[80px] justify-center"
          >
            {isMuted ? (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 14.142M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>

          {/* Subscribe Button */}
          <button 
            onClick={() => setIsSubscribed(!isSubscribed)}
            className={`flex items-center space-x-2 rounded-lg px-6 py-3 flex-1 ml-4 justify-center font-bold ${
              isSubscribed 
                ? 'bg-green-500 text-black' 
                : 'bg-gray-800 text-white border border-green-500'
            }`}
          >
            <span className="text-lg">✦</span>
            <span className="text-sm font-mono">
              {isSubscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
            </span>
          </button>
        </div>
      </div>

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* Bottom Tab Bar */}
      <BottomTabBar />
    </div>
  );
};

export default ProfilePage; 