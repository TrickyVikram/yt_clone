import React from "react";
import { Home, Video, ChevronRight, PlaySquare, History, ThumbsUp, Clock, Film, User, Bell, Dot } from "lucide-react";

const subscriptions = [
  { id: 1, channel_name: "DevOps Vikram", channel_logo: "https://yt3.googleusercontent.com/8a0JtkpZ1h7bhkR3rWXxhNqAyXcxMtEQK6Ow8geGzFuu1TDBY3rMc87WmHzxhHCY-n-hHJr8Aw=s160-c-k-c0x00ffffff-no-rj" },
  { id: 2, channel_name: "Coding Hub", channel_logo: "/images/coding_hub.png" },
  { id: 3, channel_name: "Music Vibes", channel_logo: "/images/music_vibes.png" }
];

const Sidebar: React.FC<{ isMenuOpen: boolean; setActiveView: (view: string) => void }> = ({ isMenuOpen, setActiveView }) => {
  return (
    <aside className={`bg-[#121212] p-4 min-h-screen border-r border-gray-800 text-white ${isMenuOpen ? "w-20" : "w-60"} transition-all duration-300 flex flex-col`}>

      {/* 📌 Main Navigation */}
      <div>
        <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded" onClick={() => setActiveView("home")}>
          <Home size={24} />
          {!isMenuOpen && <span>Home</span>}
        </button>
        <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded" onClick={() => setActiveView("shorts")}>
          <Video size={24} />
          {/* <img src="https://cdn.pixabay.com/photo/2022/09/08/13/59/youtube-7441043_1280.png" alt="" /> */}
          {!isMenuOpen && <span>Shorts</span>}
        </button>
        <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded" onClick={() => setActiveView("subscription")}>
          <PlaySquare size={24} />
          {!isMenuOpen && <span>Subscriptions</span>}
        </button>
      </div>

      {/* 📌 Profile Icon (only when collapsed) */}
      {isMenuOpen && (
        <div className="flex items-center gap-4 w-full p-3 hover:bg-gray-700 rounded" onClick={() => setActiveView("profile")}>
          <User />
        </div>
      )}

      {/* 📌 Library Section (Only when expanded) */}
      {!isMenuOpen && (
        <>
          <hr className="border-gray-700 my-3" />
         
          <div className="px-3 text-gray-400 font-semibold flex items-center gap-0">
  <span>You</span><ChevronRight size={20} />
</div>


          <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded">
            <History size={24} />
            <span>History</span>
          </button>
          <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded">
            <ThumbsUp size={24} />
            <span>Liked Videos</span>
          </button>
          <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded">
            <Clock size={24} />
            <span>Watch Later</span>
          </button>
          <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded">
            <Film size={24} />
            <span>PlayList</span>
          </button>
        </>
      )}

      {/* 📌 Subscription Section (Only when expanded) */}
      {!isMenuOpen && (
        <>
          <hr className="border-gray-700 my-3" />
          <div className="px-3 text-gray-400 uppercase text-sm font-semibold">
            Subscriptions
          </div>
          <div className="mt-2">
            {subscriptions.map((sub) => (
              <button key={sub.id} className="flex items-center gap-3 w-full p-3 hover:bg-gray-700 rounded">
                <img src={sub.channel_logo} alt={sub.channel_name} className="w-8 h-8 rounded-full" />
                <span className=" w-full ">{sub.channel_name}</span>
                <Dot size={18} className="text-red-500" />
              </button>
            ))}
          </div>
        </>
      )}

    </aside>
  );
};

export default Sidebar;
