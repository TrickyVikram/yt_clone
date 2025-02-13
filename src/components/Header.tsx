import React, { useState } from "react";
import { Menu, Search, Mic, Bell, Plus } from "lucide-react";

const videos = [
  { id: 1, title: "Beautiful Sunset Timelapse 4K", channel: "Nature Channel" },
  { id: 2, title: "Epic Mountain Adventure", channel: "Travel Explorer" },
  { id: 3, title: "City Lights at Night", channel: "Urban Explorer" },
  { id: 4, title: "Ocean Waves Relaxing Sounds", channel: "Calm Nature" },
  { id: 5, title: "Amazing Space Journey", channel: "Sci-Fi Universe" },
  { id: 6, title: "Wildlife Documentary", channel: "Animal World" },
  { id: 7, title: "Tech Gadgets Review", channel: "Tech World" },
  { id: 8, title: "Cooking Masterclass", channel: "Foodie Hub" },
  { id: 9, title: "Best Hiking Trails", channel: "Outdoor Explorer" },
  { id: 10, title: "Deep Sea Exploration", channel: "Ocean Discovery" },
];

const Header: React.FC<{ setIsMenuOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void }> = ({ setIsMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<{ id: number; title: string }[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 0) {
      const filteredSuggestions = videos.filter((video) =>
        video.title.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const onSearch = (query: string) => {
    if (query.trim() !== "") {
      console.log("Searching for:", query);
      window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <header className="flex items-center justify-between bg-[#121212] text-white p-3 px-6 border-b border-gray-800 relative">
      {/* Left - Menu & Logo */}
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded hover:bg-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <Menu size={24} />
        </button>
        <button className="flex items-center text-white">
          <img
            className="w-8 h-5 mr-1"
            src="https://cdn.pixabay.com/photo/2016/07/03/18/36/youtube-1495277_1280.png"
            alt="YouTube Logo"
          />
          <span className="text-lg font-medium">YouTube</span>
        </button>
      </div>

      {/* Middle - Search Bar + Suggestions */}
      <div className="relative flex items-center gap-4">
        <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white w-64 placeholder-gray-400"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={(e) => e.key === "Enter" && onSearch(searchQuery)}
          />
          <div className="bg-black h-10 w-0.5"></div>
          <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none" onClick={() => onSearch(searchQuery)}>
            <Search size={20} />
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute top-12 left-0 w-72 bg-gray-800 text-white rounded-md shadow-lg z-50">
            {suggestions.map((video) => (
              <li
                key={video.id}
                className="p-2 hover:bg-gray-700 cursor-pointer"
                onClick={() => onSearch(video.title)}
              >
                {video.title}
              </li>
            ))}
          </ul>
        )}

        {/* Mic Button */}
        <button className="p-2 rounded-full bg-gray-900 hover:bg-gray-700 focus:outline-none">
          <Mic size={24} />
        </button>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center gap-4">
        {/* Create Button */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 hover:bg-gray-700 focus:outline-none">
          <Plus size={20} />
          <span>Create</span>
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none">
          <Bell size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
