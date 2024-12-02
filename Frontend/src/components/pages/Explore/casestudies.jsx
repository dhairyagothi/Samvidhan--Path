import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import casestudy1png from "../../../assets/book1.png"; // Make sure to update the paths

const Casestudies = () => {
  const casestudies = [
    {
      title: "Indra Sawhney vs Union of India (1992)",
      article: "Article 12",
      image: casestudy1png,
      intro: "This landmark case discusses the definition of the term 'State' under Article 12 of the Constitution of India.",
      view: (
        <a href="/docs/casestudy-article12" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "Shreya Singhal vs Union of India (2015)",
      article: "Article 14",
      image: casestudy1png,
      intro: "A pivotal case that struck down Section 66A of the IT Act, recognizing the importance of free speech in the digital era.",
      view: (
        <a href="/docs/casestudy-article14" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "Maneka Gandhi vs Union of India (1978)",
      article: "Article 19(1)(a)",
      image: casestudy1png,
      intro: "This case emphasized the importance of personal liberty and the right to free speech under Article 19(1)(a).",
      view: (
        <a href="/docs/casestudy-article19" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "Kesavananda Bharati v. State of Kerala (1973)",
      article: "Article 51A(a)",
      image: casestudy1png,
      intro: "This case is known for establishing the Basic Structure Doctrine, which limited the power of Parliament to amend the Constitution.",
      view: (
        <a href="/docs/casestudy-article51A(a)" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "The Flag Code of India",
      article: "Article 51A(b)",
      image: casestudy1png,
      intro: "The Flag Code of India lays down the rules for the display and respect for the Indian national flag.",
      view: (
        <a href="/docs/casestudy-article51A(b)" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "Indira Nehru Gandhi v. Raj Narain (1975)",
      article: "Article 51A(c)",
      image: casestudy1png,
      intro: "This case led to the interpretation of the scope of Article 368 and the power of Parliament to amend the Constitution.",
      view: (
        <a href="/docs/casestudy-article51A(c)" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "Kesavananda Bharati vs. State of Kerala (1973)",
      article: "Article 39(b) & (c)",
      image: casestudy1png,
      intro: "In this case, the Supreme Court upheld the primacy of the Directive Principles of State Policy over fundamental rights.",
      view: (
        <a href="/docs/casestudy-article39" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "State of Madras vs. Champakam Dorairajan (1951)",
      article: "Article 46",
      image: casestudy1png,
      intro: "This case addressed the conflict between the Directive Principles of State Policy and Fundamental Rights.",
      view: (
        <a href="/docs/casestudy-article46-1" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
    {
      title: "Ashoka Kumar Thakur vs. Union of India",
      article: "Article 46",
      image: casestudy1png,
      intro: "This case involved the issue of reservations in higher educational institutions and their impact on the rights of citizens.",
      view: (
        <a href="/docs/casestudy-article46-2" className="hover:text-red-600">
          View Documentation 🔗
        </a>
      ),
    },
  ];
  

  return (
    <div className="container min-h-screen p-8 bg-gray-100">
      <h1 className="mb-8 text-4xl font-bold text-center text-yellow-500">
        Case Studies
      </h1>
      <div className="container grid w-full grid-cols-1 mt-16 gap-14 md:grid-cols-3">
        {casestudies.map((casestudy, index) => (
          <motion.div
            key={index}
            className="overflow-hidden bg-white rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={casestudy.image}
              alt={casestudy.title}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-900">{casestudy.title}</h2>
              <h3 className="text-lg font-bold text-gray-600">{casestudy.article}</h3>
              <p className="mt-2 text-sm text-gray-600">{casestudy.intro}</p>
              <div className="flex justify-between mt-4">
                
              <a
              href=""
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"> Read More 
              <MdArrowOutward className="duration-200 group-hover:animate-bounce group-hover:text-lg" />
            </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Casestudies;
