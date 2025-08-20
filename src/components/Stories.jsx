import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Stories = ({ creator, isOpen, onClose }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const stories = creator?.stories || [];
  const currentStory = stories[currentStoryIndex];

  useEffect(() => {
    if (!isOpen || !currentStory) return;

    // Reset progress when story changes
    setProgress(0);
    setIsPlaying(true);

    // Start progress timer
    const duration = currentStory.duration || 5000;
    const interval = 50; // Update every 50ms for smooth progress
    const increment = (interval / duration) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          // Move to next story
          if (currentStoryIndex < stories.length - 1) {
            setCurrentStoryIndex(prev => prev + 1);
          } else {
            // Close stories when all are done
            onClose();
          }
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [currentStoryIndex, isOpen, currentStory, stories.length, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentStoryIndex(0);
      setProgress(0);
      setIsPlaying(true);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowRight':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevious();
          break;
        case ' ':
          e.preventDefault();
          handlePause();
          break;
        case 'Escape':
          e.preventDefault();
          onClose();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStoryIndex, stories.length]);

  const handleVideoEnded = () => {
    // Move to next story when video ends
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handleNext = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrevious = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    }
  };

  const handlePause = () => {
    setIsPlaying(!isPlaying);
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  if (!isOpen || !creator || !stories.length) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          onClick={onClose}
        >
        {/* Story Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full max-w-md h-full max-h-[80vh] bg-black rounded-lg overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Progress Bars */}
          <div className="absolute top-4 left-4 right-4 z-10">
            <div className="flex space-x-1">
              {stories.map((_, index) => (
                <div key={index} className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-white transition-all duration-100 ${
                      index === currentStoryIndex ? 'w-full' : 
                      index < currentStoryIndex ? 'w-full' : 'w-0'
                    }`}
                    style={{
                      width: index === currentStoryIndex ? `${progress}%` : 
                             index < currentStoryIndex ? '100%' : '0%'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Creator Info */}
          <div className="absolute top-16 left-4 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <img 
                  src={creator.avatar} 
                  alt={creator.username}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">
                <div className="font-mono text-sm font-bold">{creator.username}</div>
                <div className="text-xs text-white/70">{creator.subscribers}</div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Story Content */}
          <div className="w-full h-full flex items-center justify-center">
            {currentStory && (
              <div className="relative w-full h-full">
                {currentStory.type === 'video' ? (
                  <video
                    ref={videoRef}
                    src={currentStory.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    onEnded={handleVideoEnded}
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                  />
                ) : (
                  <img
                    src={currentStory.videoUrl}
                    alt="Story"
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Play/Pause Overlay */}
                <button
                  onClick={handlePause}
                  className="absolute inset-0 w-full h-full flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors"
                >
                  {!isPlaying && (
                    <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex">
            {/* Previous Story */}
            <button
              onClick={handlePrevious}
              className="flex-1 flex items-center justify-start p-4 opacity-0 hover:opacity-100 transition-opacity"
              disabled={currentStoryIndex === 0}
            >
              {currentStoryIndex > 0 && (
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              )}
            </button>

            {/* Next Story */}
            <button
              onClick={handleNext}
              className="flex-1 flex items-center justify-end p-4 opacity-0 hover:opacity-100 transition-opacity"
              disabled={currentStoryIndex === stories.length - 1}
            >
              {currentStoryIndex < stories.length - 1 && (
                <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </button>
          </div>

          {/* Story Counter */}
          <div className="absolute bottom-4 left-4 z-10">
            <div className="text-white/70 font-mono text-sm">
              {currentStoryIndex + 1} / {stories.length}
            </div>
          </div>

          {/* Keyboard Navigation Info */}
          <div className="absolute bottom-4 right-4 z-10">
            <div className="text-white/50 font-mono text-xs text-center">
              <div>← → Navigate</div>
              <div>Space Pause</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Stories; 