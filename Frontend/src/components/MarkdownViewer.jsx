import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";


const MarkdownViewer = () => {
  const { fileName } = useParams(); // Extract fileName from the URL
  const [markdownContent, setMarkdownContent] = useState("");
  const [error, setError] = useState(false); // Track if there's an error

  useEffect(() => {
    if (fileName) {
      fetch(`/docs/${fileName}.md`) // Fetch the markdown file dynamically
        .then((response) => {
          if (!response.ok) {
            throw new Error("File not found or failed to load.");
          }
          return response.text();
        })
        .then((data) => {
          setMarkdownContent(data);
          setError(false); // Reset error state if fetch succeeds
        })
        .catch((error) => {
          console.error("Error fetching markdown file:", error);
          setError(true); // Set error state if fetch fails
        });
    }
  }, [fileName]); // Re-run effect when `fileName` changes

  return (
    <>
      {/* Navbar */}
     

      <div className="container w-3/4 px-4 mx-auto my-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          {/* Link to go back */}
          <Link to="/citizen/rights" className="inline-block mb-4 text-blue-500 hover:underline">
            &larr; Back to Fundamental Rights Table
          </Link>

          {/* Render the markdown content or an error message */}
          <div className="mt-6 markdown-content">
            {error ? (
              <p className="text-red-500">Sorry, we couldn't load the content.</p>
            ) : markdownContent ? (
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
     
    </>
  );
};

export default MarkdownViewer;
