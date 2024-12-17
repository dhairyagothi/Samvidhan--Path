import React from "react";
import { motion } from "framer-motion";

const constitutionData = [
  { term: "Article", description: "A distinct provision in the Constitution addressing specific legal principles, rights, or procedures." },
  { term: "Section", description: "A division within an Act or statute that details operational aspects. Sections often appear in schedules or related legislation." },
  { term: "Rights", description: "Fundamental privileges guaranteed to citizens, like the Right to Freedom and Right to Equality." },
  { term: "Amendments", description: "Changes or additions to the Constitution to address evolving needs. For example, the 42nd Amendment added 'Socialist' and 'Secular' to the Preamble." },
  { term: "Preamble", description: "The introductory statement of the Constitution outlining its principles and purpose." },
  { term: "Fundamental Rights", description: "Rights guaranteed to all citizens, including freedom of speech, right to equality, and right to life and liberty." },
  { term: "Directive Principles of State Policy", description: "Guidelines for the government to promote social and economic welfare." },
  { term: "Federalism", description: "The division of power between the national government and state governments." },
  { term: "Secularism", description: "The principle of separation of religion from the government, ensuring all religions are treated equally." },
  { term: "Republic", description: "A form of government where the head of state is elected, rather than a hereditary monarchy." },
  { term: "Judiciary", description: "The system of courts that interprets and applies the law in the name of the state." },
  { term: "Parliament", description: "The supreme legislative body responsible for making laws and overseeing the executive." },
  { term: "President", description: "The ceremonial head of state in India, elected indirectly by an electoral college." },
  { term: "Union", description: "The central government, which holds the power over the entire country, distinct from the states." },
  { term: "State", description: "A political unit with its own government, laws, and constitution, within the framework of the Indian Union." },
  { term: "Citizenship", description: "The status of being a legal member of the country with rights and duties." },
  { term: "Election", description: "A formal process through which citizens vote for their representatives in government." },
  { term: "Constitutional Morality", description: "Adhering to the principles of the Constitution in governance and everyday conduct." },
  { term: "Judicial Review", description: "The process by which courts examine the constitutionality of legislative acts and executive actions." },
  { term: "Sovereignty", description: "The supreme authority of a state to govern itself without interference from outside." }
];

const ConstitutionSimplified = () => {
  return (
    <div className="px-8 py-12 bg-gradient-to-r from-blue-300 via-pink-400 to-red-500 animate-gradient-x dark:bg-gradient-to-r dark:from-blue-700 dark:via-purple-600 dark:to-red-600">
      <h1 className="mb-10 text-3xl font-bold text-center text-white">
        Simplifying Constitutional Key Terms
      </h1>
      <div className="relative flex pt-10 overflow-x-scroll hide-scrollbar">
        {/* Horizontal Timeline */}
        <div className="flex gap-12 p-10">
          {constitutionData.map((item, index) => (
            <motion.div
              key={index}
              className="flex-none p-6 bg-white rounded-lg shadow-md w-80 dark:bg-gray-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Indicator */}
              <div className="flex items-center mb-4">
                <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white rounded-full bg-sky-500">
                  {index + 1}
                </div>
                <div className="ml-4 text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {item.term}
                </div>
              </div>
              {/* Description */}
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstitutionSimplified;
