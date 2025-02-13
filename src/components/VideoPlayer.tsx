import React, { useEffect } from "react";
import { ThumbsUp, ThumbsDown, Download, CornerUpRight } from "lucide-react";

interface Video {
  id: number;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  videoUrl: string;
}

interface VideoPlayProps {
  activeVideo: Video | null;
  setActiveVideo: (video: Video | null) => void;
  videos: Video[];
}

const VideoPlayer: React.FC<VideoPlayProps> = ({ activeVideo, setActiveVideo, videos }) => {
  useEffect(() => {
    console.log("Active Video Changed:", activeVideo);
  }, [activeVideo]);

  if (!activeVideo) return null;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Main Video Section */}
        <div className="md:col-span-2 bg-[#181818] p-4 rounded-lg">
    <button className="text-white top-4 right-4 text-2xl" onClick={() => setActiveVideo(null)}>✖</button>
    <video controls autoPlay className="w-full rounded-md">
      <source src={activeVideo.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <h2 className="text-white text-lg font-bold mt-2">{activeVideo.title}</h2>



    {/* Channel Section */}
    <div className="flex items-center space-x-4">
      <img src="https://www.istockphoto.com/resources/images/PhotoFTLP/P4-NOV-iStock-2165931620.jpg" alt="Owner" className="w-12 h-12 rounded-full" />
      <div>

        <span>{activeVideo.channel} </span><br />
        <span className="text-gray-400 text-sm">52.3k</span> <span className="text-gray-400 text-sm"> subscribers </span>
      </div>
      <button className="p-2 rounded-full bg-gray-900 hover:bg-gray-700 focus:outline-none   ">Subscribe</button>
      <div className="flex justify-between text-sm text-gray-400 mt-2">

        <div className="flex space-x-4  ml-[230px]   ">

          
            <button  className=" rounded-full hover:bg-gray-700 focus:outline-none " >
              <ThumbsUp  /> <span>Like</span>
            </button>
            <div className="bg-gray-500 "></div>
            <button className=" gap-0 rounded-full hover:bg-gray-700 focus:outline-none" >
              <ThumbsDown  /> 
            </button>

          <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none">
            <CornerUpRight /><span>Share
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none">
            <Download /> <span className="  ml-[-15px]   ">Download
            </span>
          </button>

        </div>
      </div>
    </div>
    <hr className="my-4" />

    {/* Video Description */}
    <p className="text-gray-300">
      Dude at my school turns out to have a voice. Subscribe to Megan Summers.
    </p>

    {/* Comments Section */}
    <div className="mt-6">
      <h3 className="text-white text-lg font-semibold">Comments</h3>
      <div className="mt-2">
        <input
          type="text"
          placeholder="Add a public comment..."
          className="w-full p-2 rounded-md bg-gray-700 text-white"
        />
      </div>
      <div className="mt-4">
        <div className="flex items-start space-x-3">
          <img src="https://avatars.githubusercontent.com/u/114013697?v=4" alt="User" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-white font-semibold">Vikram kumar</p>
            <p className="text-gray-400 text-sm">This is amazing! 🔥🔥</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 mt-2">
          <img src="https://avatars.githubusercontent.com/u/114013697?v=4" alt="User" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-white font-semibold">Vikram kumar</p>
            <p className="text-gray-400 text-sm">Loved this video, keep up the great work!</p>
          </div>
        </div>
      </div>
    </div>
  </div>

        {/* Suggested Videos Section */}
        <div className="md:col-span-1">
          <h3 className="text-white text-lg font-semibold mb-2">Suggested Videos</h3>
          <div className="space-y-4">
            {videos.map((video) => (
              <div key={video.id} 
                   className="flex items-start space-x-3 cursor-pointer" 
                   onClick={() => {
                     setActiveVideo(null); // Force re-render
                     setTimeout(() => setActiveVideo({ ...video }), 50); // Set new video
                   }}>
                <img src={video.thumbnail} alt={video.title} className="w-28 h-16 rounded-md object-cover" />
                <div className="text-white text-sm">
                  <h4 className="font-semibold">{video.title}</h4>
                  <p className="text-gray-400">{video.channel}</p>
                  <p className="text-gray-500 text-xs">{video.views} • {video.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoPlayer;
