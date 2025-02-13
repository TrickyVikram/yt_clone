import React from "react";
import { Menu, Search, Mic, Bell, User, Plus } from "lucide-react";

const Header: React.FC<{ setIsMenuOpen: (isOpen: boolean | ((prev: boolean) => boolean)) => void }> = ({ setIsMenuOpen }) => {
  return (
    <header className="flex items-center justify-between bg-[#121212] text-white p-3 px-6 border-b border-gray-800">
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

      {/* Middle - Search Bar + Mic */}
      <div className="flex items-center gap-4">
        <div className="flex items-center bg-gray-900 px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-white w-64 placeholder-gray-400"
          />
          <div className="bg-black h-10 w-0.5"></div>
          <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none">
            <Search size={20} />
          </button>
        </div>

        {/* Mic Button (No Negative Margin) */}
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

        {/* User Icon */}
        <button className="p-2 rounded-full hover:bg-gray-700 focus:outline-none">
          <User size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
