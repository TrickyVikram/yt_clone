import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const videos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    title: "Beautiful Sunset Timelapse 4K",
    channel: "Nature Channel",
    views: "1.2M views",
    timestamp: "3 days ago",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=400&q=80",
    title: "Epic Mountain Adventure",
    channel: "Travel Explorer",
    views: "850K views",
    timestamp: "1 week ago",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&q=80",
    title: "Deep Sea Wonders",
    channel: "Ocean Life",
    views: "500K views",
    timestamp: "5 days ago",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 4,
    thumbnail: "https://media.istockphoto.com/id/1924344776/photo/candlelight-date-in-restaurant-champagne-glasses-bouquet-flowers-romantic-dinner-setup-at.jpg?s=612x612&w=0&k=20&c=mGaGW_60pAvWGzOKOn-h0seXuKF7BHSBMdjwF94-INk=",
    title: "Wildlife Safari 4K",
    channel: "Animal Planet",
    views: "1M views",
    timestamp: "2 weeks ago",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=400&q=80https://media.istockphoto.com/id/1199689725/photo/served-table-with-food-and-burning-candles-in-restaurant-interior.jpg?s=612x612&w=0&k=20&c=_SeuPMP_93KX-v8UGmsMjWON3FfOe2BjIJlxCzCLWwo=",
    title: "Space Exploration Documentary",
    channel: "Science World",
    views: "3M views",
    timestamp: "1 month ago",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
    title: "Cooking Masterclass",
    channel: "Food Delight",
    views: "2.5M views",
    timestamp: "4 days ago",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 7,
    thumbnail: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&q=80",
    title: "Tech Gadgets Review",
    channel: "Tech Insider",
    views: "900K views",
    timestamp: "3 weeks ago",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 8,
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&q=80",
    title: "City Life Vlog",
    channel: "Urban Explorer",
    views: "1.1M views",
    timestamp: "6 days ago",
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
  },
  
];


const VideoList: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<typeof videos[0] | null>(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {videos.map((video) => (
          <div key={video.id} className="flex flex-col gap-2 cursor-pointer" onClick={() => setActiveVideo(video)}>
            <img src={video.thumbnail} alt={video.title} className="w-full h-44 rounded-xl object-cover" />
            <div className="text-white text-sm">
              <h3 className="font-medium text-base line-clamp-2">{video.title}</h3>
              <p className="text-gray-400">{video.channel}</p>
              <p className="text-gray-500 text-xs">{video.views} • {video.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      {activeVideo && <VideoPlayer activeVideo={activeVideo} setActiveVideo={setActiveVideo} videos={videos} />}
    </div>
  );
};

export default VideoList;
