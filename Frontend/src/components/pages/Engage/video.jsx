import React, { useState } from "react";

const VideoPage = () => {
  const [episodes, setEpisodes] = useState([
    {
      id: 1,
      title: "Introduction to the Indian Constitution",
      description:
        "An introductory session on the Indian Constitution and its importance.",
      videoUrl: "https://www.youtube.com/embed/atSSN6ZLzXQ", // YouTube embed URL
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZCP8LhZqiPBqhtQueelfBtj_r4Nc_XVggRw&s",
      source: "YouTube @SansadTV",
    },
    {
      id: 2,
      title: "The Preamble: Understanding Our Ideals",
      description:
        "A breakdown of the Preamble and its guiding principles for India.",
      videoUrl: "https://www.youtube.com/embed/lSiqhyomi2k?si=UTKuLRUOMg29Qas9",
      thumbnailUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4bdoC39IQLPi-fQLNi6C3Zwlb7hR71hQAA&s",
      source: "YouTube @Cultural Samvad",
    },
    {
      id: 3,
      title: "Fundamental Duties and Rights",
      description:
        "Discover how fundamental duties complement fundamental rights.",
      videoUrl: "https://www.youtube.com/embed/ITk6LWmwZnk?si=eb-ITF_Loh1IyYgv",
      thumbnailUrl: "https://media.istockphoto.com/id/1168118766/photo/happy-india-republic-hands-of-people-with-india-national-flag-in-background-indian.jpg?s=612x612&w=0&k=20&c=1FAkBcpqDVUFykU6ulYLjFZyecEnUKdLUX6Z7BgP2L4=",
      source: "YouTube @SansadTV",
    },
  ]);

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="container p-6 mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-500">
          Samvidhan Path Videos
        </h1>
        <p className="mt-2 text-gray-600">
          Watch insightful videos and learn about the Indian Constitution,
          democracy, and governance.
        </p>
      </div>

      {/* Video Stack */}
      {!selectedEpisode && (
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {episodes.map((episode, index) => (
              <div
                key={episode.id}
                className="relative transition-all duration-300 transform bg-gray-100 rounded-lg shadow-lg cursor-pointer group hover:shadow-xl hover:scale-105"
                onClick={() => setSelectedEpisode(episode)}
              >
                <img
                  src={episode.thumbnailUrl}
                  alt={episode.title}
                  className="object-cover w-full h-auto rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{episode.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {episode.description}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">Source : {episode.source}</p>
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

          {selectedEpisode.videoUrl.includes("youtube.com/embed") ? (
            <iframe
              src={selectedEpisode.videoUrl}
              title={selectedEpisode.title}
              className="w-full h-[500px] mt-4 rounded-lg shadow-md"
              allowFullScreen
            />
          ) : (
            <video
              controls
              className="w-full h-[500px] mt-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <source src={selectedEpisode.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPage;
