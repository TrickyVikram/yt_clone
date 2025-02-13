import React, { useRef, useState } from "react";

interface ShortsPlayerProps {
  short: { id: number; videoUrl: string; title: string };
  setActiveShort: (short: null) => void;
}

const ShortsPlayer: React.FC<ShortsPlayerProps> = ({ short, setActiveShort }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");

  // Handle play/pause on single tap
  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  // Handle Like button toggle
  const handleLike = () => {
    setIsLiked((prev) => !prev);
  };

  // Handle Comment box open/close
  const handleCommentClick = () => {
    setShowCommentBox(true);
  };

  const handleCommentClose = () => {
    setShowCommentBox(false);
  };

  // Handle Share button functionality
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(short.videoUrl);
      alert("Video link copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
      <div className="bg-[#121212] p-4 rounded-lg max-w-[90%] w-[350px] relative flex flex-col items-center">
        <video
          ref={videoRef}
          src={short.videoUrl}
          loop
          autoPlay
          className="w-full h-[500px] rounded-lg shadow-lg object-cover"
          onClick={handleVideoClick}
        />
        
        {/* Play/Pause Button */}
        {isPaused && (
          <button
            className="absolute inset-0 flex items-center justify-center text-white text-4xl bg-black bg-opacity-50 rounded-full"
            onClick={handleVideoClick}
          >
            ▶️
          </button>
        )}

        <p   style={{marginTop:-54}} className="text-white mt-2 text-center text-lg font-semibold">{short.title}</p>

        {/* Vertical Like, Comment, Share Buttons */}
        <div className="flex flex-col items-center space-y-4 absolute right-4 top-1/2 transform -translate-y-1/2">
          <button onClick={handleLike} className="text-white text-sm flex flex-col items-center">
            {isLiked ? "❤️" : "👍"} <span className="text-xs">{isLiked ? "Liked" : "Like"}</span>
          </button>
          <button onClick={handleCommentClick} className="text-white text-sm flex flex-col items-center">
            💬 <span className="text-xs">Comment</span>
          </button>
          <button onClick={handleShare} className="text-white text-sm flex flex-col items-center">
            🔄 <span className="text-xs">Share</span>
          </button>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-4 right-4 px-3 py-1 bg-red-600 text-white rounded-full text-sm hover:bg-red-500 transition"
          onClick={() => setActiveShort(null)}
        >
          ✕
        </button>
      </div>

      {/* Comment Box Popup */}
      {showCommentBox && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg w-[300px]">
            <h3 className="text-lg font-semibold mb-2">Add a Comment</h3>
            <textarea
              className="w-full p-2 border rounded"
              rows={3}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Write a comment..."
            />
            <div className="flex justify-end space-x-2 mt-2">
              <button
                className="px-3 py-1 bg-gray-300 rounded"
                onClick={handleCommentClose}
              >
                Cancel
              </button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded">
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortsPlayer;
