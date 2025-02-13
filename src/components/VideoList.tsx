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
