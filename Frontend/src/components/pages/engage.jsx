import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md"; 
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FaPodcast,  FaVideo } from "react-icons/fa";

const Engage = () => {
  const sections = [
    {
      id: "discussion-forum",
      title: "Discussion Forum",
      description:
        "Join the community and discuss a wide range of topics with fellow learners and experts.",
      icon: <BsFillFileEarmarkPdfFill />,
      link: "/engage/discussionforum",
      delay: 0.2,
    },
    {
      id: "blog",
      title: "Blog",
      description:
        "Read insightful articles, research papers, and opinions from industry experts.",
      icon: <HiOutlineBookOpen />,
      link: "/engage/blog",
      delay: 0.3,
    },
    {
      id: "podcast",
      title: "Podcast",
      description:
        "Listen to podcasts on various topics, from interviews to informative discussions.",
      icon: <FaPodcast />,
      link: "/engage/podcast",
      delay: 0.4,
    },
    {
      id: "video",
      title: "Video",
      description:
        "Watch educational videos, tutorials, interviews, and more to enhance your learning.",
      icon: <FaVideo />,
      link: "/engage/video",
      delay: 0.5,
    },
  ];

  // Slide-up animation for sections
  const SlideUp = (delay) => {
    return {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-400">
      {/* Background Circular Animations */}
      <div className="absolute w-40 h-40 bg-yellow-200 rounded-full top-10 left-10 animate-pulse-slow opacity-30"></div>
      <div className="absolute w-64 h-64 bg-yellow-200 rounded-full top-1/4 right-20 animate-bounce-slow opacity-20"></div>
      <div className="absolute w-48 h-48 bg-yellow-100 rounded-full opacity-25 bottom-10 left-1/4 animate-ping-slow"></div>

      <div className="container mx-auto text-center">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Engage with Us</h1>
        <p className="mb-12 text-lg text-gray-700">
          Explore our interactive platforms where you can share, learn, and grow.
        </p>
      </div>

      {/* Sections */}
      <div className="container grid grid-cols-1 gap-16 mx-auto md:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => (
          <motion.div
            key={section.id}
            variants={SlideUp(section.delay)}
            initial="initial"
            whileInView={"animate"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            viewport={{ once: true }}
            className="flex flex-col items-center p-8 text-center transition duration-300 bg-white shadow-xl rounded-xl hover:shadow-2xl "
          >
            <div className="mb-4 text-5xl text-yellow-500">{section.icon}</div>
            <h3 className="mb-4 text-xl font-semibold text-gray-900">{section.title}</h3>
            <p className="mb-6 text-gray-600">{section.description}</p>
            <a
              href={section.link}
              className="flex items-center gap-2 font-semibold text-sky-600 hover:text-sky-700 animate-bounce"
            >
              Learn More <MdArrowOutward className="duration-200 group-hover:animate-bounce" />
            </a>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default Engage;
