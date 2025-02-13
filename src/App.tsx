import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Shorts from "./components/Shorts";
import VideoList from "./components/VideoList";
import ShortsPlayer from "./components/ShortsPlayer";


const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [activeView, setActiveView] = useState("home");
  const [activeShort, setActiveShort] = useState<{ id: number; videoUrl: string; title: string } | null>(null);


  return (

    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header with menu toggle */}
      <Header setIsMenuOpen={setIsMenuOpen} />

      <div className="flex">
        {/* Sidebar - Show either full or icon-only mode */}
        <Sidebar isMenuOpen={isMenuOpen} setActiveView={setActiveView} />
        {/* Main Content */}
        <main className="flex-1 p-4 overflow-auto h-screen">
          {activeView === "shorts" ? (
            <div className="overflow-y-auto h-[90vh] flex flex-col items-center space-y-4">
              <Shorts setActiveShort={setActiveShort} />
            </div>
          ) : (
            <>
              <VideoList />
              <Shorts setActiveShort={setActiveShort} />
             
            </>
          )}
        </main>
      </div>


          
      {/* Shorts Player - Display when a short is selected */}
      {activeShort && <ShortsPlayer short={activeShort} setActiveShort={setActiveShort} />}
    </div>



  );
};

export default App;
