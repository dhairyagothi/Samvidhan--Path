import React, { useState, useEffect } from "react";
import { Client, Databases } from "appwrite";

const DISCUSSION_COLLECTION_ID = "675eac3b000a64368373"; // Threads collection ID
const COMMENTS_COLLECTION_ID = "675ead18003ad5a61c1e"; // Comments collection ID
const DATABASE_ID = "675b37430018b762a571"; // Replace with your actual database ID

const DiscussionForum = () => {
  const [threads, setThreads] = useState([]);
  const [selectedThread, setSelectedThread] = useState(null);
  const [newThread, setNewThread] = useState({ title: "", content: "", author: "" });
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("675b364a00240d898950"); // Replace with your project ID
  const databases = new Databases(client);

  // Fetch all threads
  useEffect(() => {
    const fetchThreads = async () => {
      try {
        const response = await databases.listDocuments(DATABASE_ID, DISCUSSION_COLLECTION_ID);
        setThreads(response.documents);
      } catch (err) {
        console.error("Error fetching threads:", err);
      }
    };
    fetchThreads();
  }, [databases]);

  // Fetch comments for a thread
  const fetchComments = async (threadId) => {
    try {
      const response = await databases.listDocuments(DATABASE_ID, COMMENTS_COLLECTION_ID, [
        `threadId=${threadId}`,
      ]);
      setComments(response.documents);
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  // Add a new thread
  const handleNewThread = async () => {
    if (newThread.title && newThread.content && newThread.author) {
      try {
        const response = await databases.createDocument(
          DATABASE_ID,
          DISCUSSION_COLLECTION_ID,
          "unique()",
          {
            title: newThread.title,
            content: newThread.content,
            author: newThread.author,
            createdAt: new Date().toISOString(),
          }
        );
        setThreads([...threads, response]);
        setNewThread({ title: "", content: "", author: "" });
      } catch (err) {
        console.error("Error adding thread:", err);
      }
    }
  };

  // Add a new comment
  const handleNewComment = async () => {
    if (newComment) {
      try {
        const response = await databases.createDocument(
          DATABASE_ID,
          COMMENTS_COLLECTION_ID,
          "unique()",
          {
            threadId: selectedThread.$id,
            content: newComment,
            author: "Anonymous", // Replace with authenticated user info if available
            createdAt: new Date().toISOString(),
          }
        );
        setComments([...comments, response]);
        setNewComment("");
      } catch (err) {
        console.error("Error adding comment:", err);
      }
    }
  };

  return (
    <div className="container p-6 mx-auto space-y-6">
      <h1 className="text-4xl font-bold text-center text-yellow-500">
        Samvidhan Path Forum
      </h1>

      {/* Display threads */}
      {!selectedThread && (
        <div>
          <h2 className="text-2xl font-semibold">All Discussions</h2>
          <ul className="space-y-4">
            {threads.map((thread) => (
              <li
                key={thread.$id}
                className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:shadow-lg"
                onClick={() => {
                  setSelectedThread(thread);
                  fetchComments(thread.$id);
                }}
              >
                <h3 className="text-xl font-semibold">{thread.title}</h3>
                <p className="text-gray-500">
                  By {thread.author} on{" "}
                  {new Date(thread.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>

          {/* New thread form */}
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
            <input
              type="text"
              placeholder="Author Name"
              className="w-full p-3 mt-4 border rounded-lg"
              value={newThread.author}
              onChange={(e) => setNewThread({ ...newThread, author: e.target.value })}
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

      {/* Display selected thread details */}
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

          {/* Comments */}
          <h3 className="text-xl font-semibold">Comments</h3>
          <ul className="space-y-4">
            {comments.map((comment) => (
              <li key={comment.$id} className="p-4 bg-gray-100 rounded-lg">
                <p>{comment.content}</p>
                <p className="text-sm text-gray-500">— {comment.author}</p>
              </li>
            ))}
          </ul>

          {/* Add a new comment */}
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
