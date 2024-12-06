import React, { useState } from "react";
import axios from "axios";
import { IoIosVolumeHigh, IoIosVolumeOff } from "react-icons/io";

const TextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [languageCode, setLanguageCode] = useState("en-US"); // Default to English
  const [audioSrc, setAudioSrc] = useState("");

  const GOOGLE_TTS_API = "https://texttospeech.googleapis.com/v1/text:synthesize";
  const API_KEY = "YOUR_PUBLIC_API_KEY"; // Replace with your Google API key

  const handleReadOut = async () => {
    const textContent = document.body.innerText; // Get the full text of the page
    const payload = {
      input: { text: textContent },
      voice: { languageCode, ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    };

    try {
      const response = await axios.post(`${GOOGLE_TTS_API}?key=${API_KEY}`, payload);
      const audioContent = response.data.audioContent;

      // Convert Base64 audio to a playable format
      const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
      audio.play();

      setIsSpeaking(true);

      // Reset state after playback ends
      audio.onended = () => {
        setIsSpeaking(false);
      };
    } catch (error) {
      console.error("Error generating speech:", error);
    }
  };

  const handleStopSpeech = () => {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    setIsSpeaking(false);
  };

  return (
    <div className="text-to-speech">
      <div className="flex items-center space-x-4">
        <select
          value={languageCode}
          onChange={(e) => setLanguageCode(e.target.value)}
          className="px-2 py-1 border rounded-md"
        >
          <option value="en-US">English (US)</option>
          <option value="hi-IN">Hindi (India)</option>
          <option value="bn-IN">Bengali (India)</option>
          <option value="ta-IN">Tamil (India)</option>
          <option value="te-IN">Telugu (India)</option>
          <option value="gu-IN">Gujarati (India)</option>
        </select>

        {!isSpeaking ? (
          <button
            onClick={handleReadOut}
            className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-400"
          >
            <IoIosVolumeHigh size={24} /> {/* Volume High Icon */}
            Start Reading
          </button>
        ) : (
          <button
            onClick={handleStopSpeech}
            className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-400"
          >
            <IoIosVolumeOff size={24} /> {/* Volume Off Icon */}
            Stop Reading
          </button>
        )}
      </div>
    </div>
  );
};

export default TextToSpeech;
