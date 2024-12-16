import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams, Link } from "react-router-dom";
import Topdf from "./Topdf";
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
    <div className="container mx-auto my-8 dark:my-0 dark:bg-gray-900 dark:text-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {/* Back Link */}
        <div className="flex items-center justify-between">
        <Link to="/citizen" className="text-red-500 hover:underline">
          &larr; Citizen
        </Link>
        <Topdf />
        </div>

        {/* Render Markdown Content */}
        <div className="mt-6 markdown-body">
          {error ? (
            <p className="text-red-500">Sorry, we couldn't load the content.</p>
          ) : markdownContent ? (
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="pb-2 mb-4 text-3xl font-bold text-yellow-500 border-b-2 dark:text-yellow-400">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-6 mb-4 text-2xl font-semibold text-yellow-500 dark:text-yellow-400">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mt-6 mb-4 text-xl font-semibold text-yellow-500 dark:text-yellow-400">
                    {children}
                  </h3>
                ),
                p: ({ children }) => <p className="mb-4 text-gray-700 dark:text-gray-300">{children}</p>,
                blockquote: ({ children }) => (
                  <blockquote className="py-2 pl-4 italic text-gray-600 bg-gray-100 border-l-4 border-yellow-400 dark:text-gray-300 dark:bg-gray-700 dark:border-yellow-500">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-blue-500 underline hover:text-yellow-500 dark:text-blue-400 dark:hover:text-yellow-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {children}
                  </a>
                ),
                code: ({ children }) => (
                  <code className="px-2 py-1 font-mono text-sm bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-100">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="p-4 overflow-auto text-gray-200 bg-gray-800 rounded-lg dark:bg-gray-900">
                    {children}
                  </pre>
                ),
                ul: ({ children }) => <ul className="ml-4 list-disc list-inside">{children}</ul>,
                ol: ({ children }) => <ol className="ml-4 list-decimal list-inside">{children}</ol>,
                li: ({ children }) => <li className="text-gray-800 dark:text-gray-300">{children}</li>,
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-500 dark:text-gray-400">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarkdownViewer;
