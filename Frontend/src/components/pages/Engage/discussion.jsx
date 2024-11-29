import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/threads"; // Replace with your backend URL

const DiscussionForum = () => {
  const [threads, setThreads] = useState([]);
  const [newThread, setNewThread] = useState({ title: "", content: "" });
  const [selectedThread, setSelectedThread] = useState(null);
  const [newComment, setNewComment] = useState("");

  // Fetch threads from the backend
  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((res) => setThreads(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Add a new thread
  const handleNewThread = () => {
    if (newThread.title && newThread.content) {
      axios
        .post(API_BASE_URL, newThread)
        .then((res) => {
          setThreads([...threads, res.data]);
          setNewThread({ title: "", content: "" });
        })
        .catch((err) => console.error(err));
    }
  };

  // Add a comment to the selected thread
  const handleNewComment = () => {
    if (newComment) {
      axios
        .post(`${API_BASE_URL}/${selectedThread._id}/comments`, {
          content: newComment,
          author: "You", // Replace with actual user data if authentication is implemented
        })
        .then((res) => {
          const updatedThread = res.data;
          setThreads((prevThreads) =>
            prevThreads.map((thread) =>
              thread._id === updatedThread._id ? updatedThread : thread
            )
          );
          setSelectedThread(updatedThread);
          setNewComment("");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className="container p-6 mx-auto space-y-6">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-500">
        Samvidhan Path Forum
      </h1>

      {/* Thread List */}
      {!selectedThread && (
        <div>
          <h2 className="text-2xl font-semibold">All Discussions</h2>
          <ul className="space-y-4">
            {threads.map((thread) => (
              <li
                key={thread._id}
                className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:shadow-lg"
                onClick={() => setSelectedThread(thread)}
              >
                <h3 className="text-xl font-semibold">{thread.title}</h3>
                <p className="text-gray-500">
                  By {thread.author} on{" "}
                  {new Date(thread.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>

          {/* New Thread Form */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Start a New Discussion</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-3 mt-4 border rounded-lg"
              value={newThread.title}
              onChange={(e) => setNewThread({ ...newThread, title: e.target.value })}
            />
            <textarea
              placeholder="Content"
              className="w-full p-3 mt-4 border rounded-lg"
              value={newThread.content}
              onChange={(e) => setNewThread({ ...newThread, content: e.target.value })}
            />
            <button
              onClick={handleNewThread}
              className="px-6 py-3 mt-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
            >
              Post Discussion
            </button>
          </div>
        </div>
      )}

      {/* Thread Details */}
      {selectedThread && (
        <div>
          <button
            onClick={() => setSelectedThread(null)}
            className="mb-6 text-yellow-500 underline"
          >
            Back to Discussions
          </button>
          <h2 className="text-2xl font-semibold">{selectedThread.title}</h2>
          <p className="mb-4 text-gray-500">
            By {selectedThread.author} on{" "}
            {new Date(selectedThread.createdAt).toLocaleDateString()}
          </p>
          <p className="mb-6">{selectedThread.content}</p>

          {/* Comments Section */}
          <h3 className="text-xl font-semibold">Comments</h3>
          <ul className="space-y-4">
            {selectedThread.comments.map((comment) => (
              <li key={comment._id} className="p-4 bg-gray-100 rounded-lg">
                <p>{comment.content}</p>
                <p className="text-sm text-gray-500">— {comment.author}</p>
              </li>
            ))}
          </ul>

          {/* Add Comment */}
          <textarea
            placeholder="Write your comment..."
            className="w-full p-3 mt-4 border rounded-lg"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            onClick={handleNewComment}
            className="px-6 py-3 mt-4 text-white bg-yellow-500 rounded-lg hover:bg-yellow-600"
          >
            Post Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default DiscussionForum;
