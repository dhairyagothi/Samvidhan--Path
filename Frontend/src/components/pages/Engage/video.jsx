import React, { useState } from "react";

const VideoPage = () => {
  const [episodes, setEpisodes] = useState([
    {
      id: 1,
      title: "Introduction to the Indian Constitution",
      description:
        "An introductory session on the Indian Constitution and its importance.",
      videoUrl: "https://www.example.com/video/episode1.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Episode+1", // Replace with actual thumbnail
    },
    {
      id: 2,
      title: "The Preamble: Understanding Our Ideals",
      description:
        "A breakdown of the Preamble and its guiding principles for India.",
      videoUrl: "https://www.example.com/video/episode2.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Episode+2", // Replace with actual thumbnail
    },
    {
      id: 3,
      title: "Fundamental Duties and Rights",
      description:
        "Discover how fundamental duties complement fundamental rights.",
      videoUrl: "https://www.example.com/video/episode3.mp4",
      thumbnailUrl: "https://via.placeholder.com/300x200?text=Episode+3", // Replace with actual thumbnail
    },
  ]);

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="container p-6 mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-500">Samvidhan Path Videos</h1>
        <p className="mt-2 text-gray-600">
          Watch insightful videos and learn about the Indian Constitution, democracy, and governance.
        </p>
      </div>

      {/* Video Stack */}
      {!selectedEpisode && (
        <div className="relative">
          {/* Video Stack Container */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {episodes.map((episode, index) => (
              <div
                key={episode.id}
                className={`relative group bg-gray-100 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
                  index === 0 ? "z-30" : index === 1 ? "z-20" : "z-10"
                }`}
                onClick={() => setSelectedEpisode(episode)}
              >
                {/* Episode Thumbnail */}
                <img
                  src={episode.thumbnailUrl}
                  alt={episode.title}
                  className="object-cover w-full h-48 rounded-t-lg"
                />
                {/* Overlay with Title */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 bg-black rounded-t-lg opacity-0 bg-opacity-60 group-hover:opacity-100">
                  <h2 className="text-lg font-semibold">{episode.title}</h2>
                  <p className="px-4 mt-2 text-sm text-center">
                    {episode.description.slice(0, 60)}...
                  </p>
                </div>
                {/* Details */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{episode.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {episode.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Video Player */}
      {selectedEpisode && (
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
          <button
            onClick={() => setSelectedEpisode(null)}
            className="mb-4 text-yellow-500 underline hover:text-yellow-600"
          >
            Back to Episodes
          </button>
          <h2 className="text-2xl font-bold">{selectedEpisode.title}</h2>
          <p className="mt-2 text-gray-600">{selectedEpisode.description}</p>
          <video
            controls
            className="w-full mt-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <source src={selectedEpisode.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
};

export default VideoPage;
