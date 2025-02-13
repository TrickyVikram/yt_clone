import React from "react";

const shortsData = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Amazing Street Performance 🎸",
    views: "1.2M",
    likes: "125K",
    comments: "1.5K",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=400&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Pet Tricks That Will Make You Smile 🐕",
    views: "856K",
    likes: "98K",
    comments: "2.3K",
  },
  {
    id: 3,
    thumbnail: "https://www.istockphoto.com/resources/images/PhotoFTLP/P4-NOV-iStock-2165931620.jpg",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    title: "Crazy Skateboarding Tricks 🛹",
    views: "920K",
    likes: "110K",
    comments: "1.8K",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Added missing videoUrl
    title: "Fastest Rubik’s Cube Solving ⏳",
    views: "1.5M",
    likes: "140K",
    comments: "3.1K",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Added missing videoUrl
    title: "Street Art That Comes to Life 🎨",
    views: "780K",
    likes: "87K",
    comments: "2K",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=400&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4", // Added missing videoUrl
    title: "Epic Gymnastics Moves 🤸",
    views: "1.1M",
    likes: "132K",
    comments: "1.7K",
  },
];

const Shorts: React.FC<{ setActiveShort: (short: any) => void }> = ({ setActiveShort }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
    {shortsData.map((short) => (
      <div key={short.id} className="cursor-pointer" onClick={() => setActiveShort(short)}>
        <img src={short.thumbnail} alt={short.title} className="w-full h-full rounded-xl object-cover" />
        <h3 className="text-sm font-medium mt-2">{short.title}</h3>
        <p className="text-xs text-gray-400">{short.views} views</p>
      </div>
    ))}
     <br />
              <br />
              <br />
  </div>
);

export default Shorts;
