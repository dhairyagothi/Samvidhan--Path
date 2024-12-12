import React, { useState } from "react";
import axios from "axios";
import { RiSpeakFill } from "react-icons/ri";
import { HiSpeakerXMark } from "react-icons/hi2";

const TextToSpeech = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state for the preloader
  const [audio, setAudio] = useState(null);

  const API_KEY = "AIzaSyDQbc5sxwrvdn1WzY9__uM8RxZkATbvuFM"; // Replace with your API key

  // Function to fetch the readable content of the page
  const getPageContent = () => {
    const headings = [...document.querySelectorAll("h1, h2, p,span,h3")];

    const content = headings.map((heading) => heading.innerText).join(" ");

    return content || "No readable content found.";
  };

  // Function to detect language (improved for Google-supported languages, including Marathi and others)
  const detectLanguage = (text) => {
    if (/[अ-ह]/.test(text)) return "hi-IN"; // Hindi

    // Kannada (kn-IN) - Text containing Kannada script
    if (/[ಕ-ಹ]/.test(text)) return "kn-IN"; // Kannada
  
    // Telugu (te-IN) - Text containing Telugu script
    if (/[అ-హ]/.test(text)) return "te-IN"; // Telugu
  
 
  
    // Malayalam (ml-IN) - Text containing Malayalam script
    if (/[മ-ഹ]/.test(text)) return "ml-IN"; // Malayalam
  
    // Odia (or-IN) - Text containing Odia script
    if (/[ଅ-ହ]/.test(text)) return "or-IN"; // Odia
  
    // Punjabi (pa-IN) - Text containing Gurmukhi script
    if (/[ਗ-ਹ]/.test(text)) return "pa-IN"; // Punjabi
  
    // Bengali (bn-IN) - Text containing Bengali script
    if (/[গ-হ]/.test(text)) return "bn-IN"; // Bengali
  
    // Marathi (mr-IN) - Text containing Devanagari script (but excluding Hindi specific range)
    if (/[उ-य़]/.test(text)) return "mr-IN"; // Marathi
    if (/[\u0B80-\u0BFF]/.test(text)) return "ta-IN";
     // Tamil (ta-IN) - Text containing Tamil script
  if (/[அ]/.test(text)) return "ta-IN"; // Tamil
  // More accurate Tamil regex to avoid overlap
  if (/[௰-௹]/.test(text)) return "ta-IN"; // Tamil-specific symbols
    // Gujarati (gu-IN) - Text containing Gujarati script
    if (/[અ-હ]/.test(text)) return "gu-IN"; // Gujarati
  
    // Sanskrit (sa-IN) - Text containing Devanagari script (for more classical texts)
    if (/[ऋ-ह]/.test(text)) return "sa-IN"; // Sanskrit
  
    // English (en-US) - Default to English for the rest
    return "en-US"; // Default to English
  };

  // Function to fetch audio using Google Cloud API
  const fetchAudio = async (text, language) => {
    const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${API_KEY}`;

    const data = {
      input: { text },
      voice: {
        languageCode: language,
        ssmlGender: "FEMALE", // Change to "MALE" or "NEUTRAL" if needed
      },
      audioConfig: {
        audioEncoding: "MP3",
        speakingRate: language  ? 0.7 : 1, // Adjust speed for specific languages
        pitch: 0,
      },
    };

    try {
      const response = await axios.post(url, data);
      return response.data.audioContent;
    } catch (error) {
      console.error("Error fetching audio:", error);
      return null;
    }
  };

  // Function to handle read-out
  const handleReadOut = async () => {
    const content = getPageContent();
    const language = detectLanguage(content);

    setIsLoading(true); // Set loading state to true

    // Fetch synthesized speech
    const audioContent = await fetchAudio(content, language);

    setIsLoading(false); // Set loading state to false

    if (audioContent) {
      const audioBlob = new Blob([new Uint8Array(atob(audioContent).split("").map((c) => c.charCodeAt(0)))], {
        type: "audio/mp3",
      });
      const audioUrl = URL.createObjectURL(audioBlob);

      const audioElement = new Audio(audioUrl);
      setAudio(audioElement);

      // Play audio
      audioElement.play();
      setIsSpeaking(true);

      audioElement.onended = () => {
        setIsSpeaking(false);
        setAudio(null);
      };
    }
  };

  // Function to stop audio playback
  const handleStopSpeech = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
      setIsSpeaking(false);
    }
  };

  return (
    <>
    <style>
      {`
        
.loader {
  border: 4px solid rgba(255, 255, 255, 0.3); 
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

      `}
    </style>
    <div>
      {!isSpeaking ? (
        <button
          onClick={handleReadOut}
          className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-400"
        >
          <RiSpeakFill className="cursor-pointer hover:text-black" title="Text to speach"/>
        </button>
      ) : (
        <button
          onClick={handleStopSpeech}
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-400"
        >
          <HiSpeakerXMark className="cursor-pointer hover:text-black" title="Stop speaking" />
        </button>
      )}

      {isLoading && (
        <div className="loader ">
          
          {/* You can replace this with a loading spinner or animation */}
        </div>
      )}
    </div>
    </>
  );
};

export default TextToSpeech;
