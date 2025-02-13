import React, { useState, useEffect } from "react";

const sampleData = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=400&q=80",
    title: "Incredible Drone Footage 🌍",
    description: "A stunning view captured by a drone!",
    views: "1.9M",
    likes: "180K",
    comments: "3.8K",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Mock video URL
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
    title: "Mind-Blowing Magic Tricks 🎩",
    description: "Watch these amazing tricks unfold!",
    views: "980K",
    likes: "105K",
    comments: "2.2K",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1533222481259-3619a90560b1?w=400&q=80",
    title: "Extreme Sports Compilation 🏂",
    description: "Thrilling moments from extreme sports.",
    views: "2.5M",
    likes: "320K",
    comments: "4.5K",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const ShortsFeed: React.FC = () => {
  const [videos, setVideos] = useState(sampleData);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const playNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const playPreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  if (videos.length === 0) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  const currentVideo = videos[currentVideoIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="w-full max-w-lg relative">
        {/* Video Player */}
        <video src={currentVideo.videoUrl} controls autoPlay loop className="w-full rounded-lg shadow-lg">
          Your browser does not support the video tag.
        </video>

        {/* Video Details */}
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-3 rounded-lg">
          <h2 className="text-lg font-semibold">{currentVideo.title}</h2>
          <p className="text-sm text-gray-300">{currentVideo.description || "No description available."}</p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-6">
        <button onClick={playPreviousVideo} className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition">
          Previous
        </button>
        <button onClick={playNextVideo} className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
          Next
        </button>
      </div>

      {/* Video Thumbnails */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`p-2 rounded-lg cursor-pointer transition ${
              index === currentVideoIndex ? "bg-blue-700" : "bg-gray-800"
            }`}
            onClick={() => setCurrentVideoIndex(index)}
          >
            <img src={video.thumbnail} alt={video.title} className="w-full h-16 object-cover rounded-md" />
            <h3 className="text-sm font-medium mt-1">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortsFeed;
