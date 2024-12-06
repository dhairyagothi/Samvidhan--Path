import React, { useState } from "react";
import imagepod1 from "../../../assets/pod1.png";
const PodcastPage = () => {
  const [episodes, setEpisodes] = useState([
    {
      id: 1,
      title: "Understanding the Indian Constitution",
      description:
        "An in-depth look at the Indian Constitution and its impact on governance.",
      audioUrl: "https://www.example.com/audio/episode1.mp3",
      imageUrl: imagepod1,
      duration: "12:34",
    },
    {
      id: 2,
      title: "The Preamble: India's Vision and Ideals",
      description:
        "Exploring the values and vision enshrined in the Preamble of the Constitution.",
      audioUrl: "https://www.example.com/audio/episode2.mp3",
      imageUrl: "https://via.placeholder.com/300x200?text=Episode+2", // Replace with actual image URL
      duration: "10:45",
    },
    {
      id: 3,
      title: "Fundamental Rights and Duties",
      description:
        "A discussion on the balance of rights and responsibilities in a democracy.",
      audioUrl: "https://www.example.com/audio/episode3.mp3",
      imageUrl: "https://via.placeholder.com/300x200?text=Episode+3", // Replace with actual image URL
      duration: "15:20",
    },
  ]);

  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="container p-6 mx-auto space-y-10">
      {/* Page Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-500">
          Samvidhan Path Podcast
        </h1>
        <p className="mt-2 text-gray-600">
          Dive into insightful discussions and learn more about India's
          Constitution, governance, and democracy.
        </p>
      </div>

      {/* Podcast List */}
      {!selectedEpisode && (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="transition-all duration-200 transform bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-105"
              onClick={() => setSelectedEpisode(episode)}
            >
              {/* Episode Image */}
              <img
                src={episode.imageUrl}
                alt={episode.title}
                className="object-cover w-full h-48 rounded-t-lg"
              />
              {/* Episode Details */}
              <div className="p-4">
                <h2 className="text-xl font-semibold">{episode.title}</h2>
                <p className="mt-2 text-gray-700 line-clamp-3">
                  {episode.description}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  Duration: {episode.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Podcast Player */}
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
          <p className="mt-2 text-sm text-gray-500">Duration: {selectedEpisode.duration}</p>
          <audio
            controls
            className="w-full mt-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <source src={selectedEpisode.audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default PodcastPage;
