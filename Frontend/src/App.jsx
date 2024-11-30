import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import Constitution from "./components/pages/constitution";
import Explore from "./components/pages/explore";
import Learn from "./components/pages/Learn";
import Citizen from "./components/pages/citizen";
import Contact from "./components/pages/contact";
import Engage from "./components/pages/engage";
import Games from "./components/pages/games";
import Ebooks from "./components/pages/ebooks";
import CaseStudies from "./components/pages/Explore/casestudies";
import Navbar from "./components/Navbar/Navbar";
import Preamble from "./components/pages/constitution/preamble";
import History from "./components/pages/constitution/history";
import Rights from "./components/pages/Citizens/rights";
import Duties from "./components/pages/Citizens/duties";
import DPSP from "./components/pages/Citizens/dpsp";
import Schedules from "./components/pages/Citizens/schedules";
import Amendments from "./components/pages/Citizens/amendments";
import MarkdownViewer from "./components/MarkdownViewer";  
import Signin from "./components/signin";
import Terms from "./components/pages/terms";
import BlogPage from "./components/pages/Engage/blog";
import PodcastPage from "./components/pages/Engage/podcast";
import VideoPage from "./components/pages/Engage/video";
import DiscussionForum from "./components/pages/Engage/discussion";
import QuizComponent from "./components/pages/Quiz/QuizComponent";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading (e.g., API fetch or resources)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Remove preloader element from the DOM
      const preloader = document.getElementById("preloader");
      if (preloader) {
        preloader.style.display = "none";
      }
    }, 2000); // Adjust delay as needed

    return () => clearTimeout(timer); // Cleanup
  }, []);
  return (
    <Router>
      <main className="overflow-x-hidden bg-white text-dark">
        {/* Navbar or any other persistent components can go here */}
        <Navbar />
        <Routes>
          {/* Define the routes for the application */}
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/banner2" element={<Banner2 />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/constitution" element={<Constitution />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/citizen" element={<Citizen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engage" element={<Engage />} />
          <Route path="/games" element={<Games />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/casestudies" element={<CaseStudies />} />
          <Route path="/constitution/preamble" element={<Preamble />} />
          <Route path="/constitution/history" element={<History />} />
          <Route path="/citizen/rights" element={<Rights />} />
          <Route path="/citizen/duties" element={<Duties />} />
          <Route path="/citizen/dpsp" element={<DPSP />} />
          <Route path="/citizen/schedules" element={<Schedules/>}/>
          <Route path="/citizen/amendment" element={<Amendments/>}/>
          <Route path="/t&C" element={<Terms />} />
          <Route path="/engage/discussionforum" element={<DiscussionForum />} />
          <Route path="/engage/blog" element={<BlogPage />} />
          <Route path="/engage/podcast" element={<PodcastPage />} />
          <Route path="/engage/video" element={<VideoPage />} />
          <Route path="/docs/:fileName" element={<MarkdownViewer />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/quiz" element={<QuizComponent />} />
        </Routes>

        {/* Footer or other global sections can go here */}
        <Footer />
        <Analytics />
      </main>
    </Router>
  );
};

export default App;
