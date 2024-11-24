import React from "react";
import { motion } from "framer-motion";

const timelineEvents = [
    {
      year: "1934",
      title: "Idea of Constituent Assembly",
      description: `The concept of a Constituent Assembly was first proposed by M.N. Roy, a pioneer of the communist movement in India. 
                    This idea later gained momentum and became a significant step towards India's independence and drafting of its own constitution.`,
      image: "https://via.placeholder.com/150?text=1934", // Replace with an actual image URL
    },
    {
      year: "1935",
      title: "Government of India Act, 1935",
      description: `The Government of India Act, 1935, was enacted by the British Parliament. While it did not give India complete self-rule, 
                    it laid the administrative foundation and highlighted the need for a robust Constitution.`,
      image: "https://via.placeholder.com/150?text=1935", // Replace with an actual image URL
    },
    {
      year: "1940",
      title: "Demand for Constitution",
      description: `The Indian National Congress officially demanded the establishment of a Constituent Assembly. 
                    This demand was later recognized by the British government during the August Offer.`,
      image: "https://via.placeholder.com/150?text=1940", // Replace with an actual image URL
    },
    {
      year: "1946",
      title: "Formation of Constituent Assembly",
      description: `Under the Cabinet Mission Plan, the Constituent Assembly was formed, consisting of 389 members 
                    representing provinces and princely states. This marked the beginning of India's journey to draft its Constitution.`,
      image: "https://via.placeholder.com/150?text=1946", // Replace with an actual image URL
    },
    {
      year: "9 Dec 1946",
      title: "First Meeting of Constituent Assembly",
      description: `The first session of the Constituent Assembly was held in New Delhi. Dr. Sachchidananda Sinha was elected as 
                    the interim President for this historic gathering.`,
      image: "https://via.placeholder.com/150?text=1946Meeting", // Replace with an actual image URL
    },
    {
      year: "29 Aug 1947",
      title: "Formation of Drafting Committee",
      description: `The Drafting Committee was formed, with Dr. B.R. Ambedkar as its Chairman. This committee was entrusted 
                    with the responsibility of drafting the Indian Constitution.`,
      image: "https://via.placeholder.com/150?text=Drafting", // Replace with an actual image URL
    },
    {
      year: "26 Nov 1949",
      title: "Adoption of the Constitution",
      description: `After extensive deliberations and debates, the Constituent Assembly formally adopted the Constitution of India. 
                    This day is celebrated as Constitution Day in India.`,
      image: "https://via.placeholder.com/150?text=Adoption", // Replace with an actual image URL
    },
    {
      year: "24 Jan 1950",
      title: "Final Signing of the Constitution",
      description: `The members of the Constituent Assembly signed the final version of the Constitution. The signed document 
                    had a preamble, 395 articles, and 8 schedules.`,
      image: "https://via.placeholder.com/150?text=Signing", // Replace with an actual image URL
    },
    {
      year: "26 Jan 1950",
      title: "Constitution Came into Effect",
      description: `The Constitution of India came into effect, replacing the Government of India Act, 1935. 
                    This day is celebrated as Republic Day, marking India's transformation into a sovereign democratic republic.`,
      image: "https://via.placeholder.com/150?text=Republic", // Replace with an actual image URL
    },
    {
      year: "1960",
      title: "First Amendment to the Constitution",
      description: `The first amendment to the Constitution was enacted to address issues related to land reforms, the right to equality, 
                    and freedom of speech.`,
      image: "https://via.placeholder.com/150?text=Amendment1", // Replace with an actual image URL
    },
    {
      year: "1976",
      title: "42nd Amendment",
      description: `Known as the 'Mini Constitution,' the 42nd Amendment made significant changes, including the addition of the words 
                    "Socialist," "Secular," and "Integrity" to the Preamble.`,
      image: "https://via.placeholder.com/150?text=42nd", // Replace with an actual image URL
    },
    {
      year: "2002",
      title: "86th Amendment",
      description: `The 86th Amendment introduced the Right to Education as a fundamental right, making education free and compulsory 
                    for children aged 6 to 14 years.`,
      image: "https://via.placeholder.com/150?text=Education", // Replace with an actual image URL
    },
    {
      year: "2024",
      title: "Latest Amendments",
      description: `The Constitution continues to evolve, reflecting the changing needs and aspirations of the Indian people. 
                    As of today, it has undergone 105 amendments.`,
      image: "https://via.placeholder.com/150?text=Amendments", // Replace with an actual image URL
    },
  ];

const Timeline = () => {
  return (
    <div className="px-6 py-12 bg-gray-100">
      <h1 className="mb-12 text-3xl font-bold text-center">
        Journey of the Constitution of India
      </h1>
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute w-1 h-full transform -translate-x-1/2 bg-yellow-500 left-1/2"></div>

        {/* Timeline Events */}
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div
              className={`relative bg-white shadow-lg p-6 rounded-lg max-w-sm ${
                index % 2 === 0 ? "ml-12" : "mr-12"
              }`}
            >
              {/* Circle */}
              <div
                className={`absolute top-4 w-8 h-8 bg-yellow-500 rounded-full ${
                  index % 2 === 0 ? "-left-4" : "-right-4"
                }`}
              ></div>

              {/* Image */}
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full mb-4 rounded-lg"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />

              {/* Text Content */}
              <h3 className="text-xl font-semibold text-gray-800">{event.year}</h3>
              <h4 className="mt-2 text-lg font-bold text-yellow-500">{event.title}</h4>
              <p className="mt-2 text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
