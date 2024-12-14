import React, { useState, useEffect } from "react";
import { Client, Databases } from "appwrite";

// Initialize the Appwrite client
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("675b364a00240d898950"); // Use your Appwrite endpoint and project ID

const databases = new Databases(client);

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [newBlog, setNewBlog] = useState({
    title: "",
    author: "",
    content: "",
    image: "",
  });
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Fetch blogs from the Appwrite database
  const fetchBlogs = async () => {
    try {
      const response = await databases.listDocuments(
        "675b37430018b762a571", // Database ID
        "675d5aef00362e2205bf", // Collection ID
      );
      setBlogs(response.documents);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  // Use useEffect to fetch blogs on page load
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Add a new blog to the Appwrite database
  const handleAddBlog = async () => {
    try {
      const blogData = {
        title: newBlog.title,
        author: newBlog.author,
        content: newBlog.content,
        image: newBlog.image || "https://via.placeholder.com/150", // Default image
        createdAt: new Date().toISOString(),
      };
  
      const response = await databases.createDocument(
        "675b37430018b762a571", // Database ID
        "675d5aef00362e2205bf", // Collection ID
        "unique()", // Unique ID (Appwrite will auto-generate a unique ID)
        blogData
      );
      
      console.log('Blog Added:', response); // Check the response
  
      // Add the new blog to the state
      setBlogs([response, ...blogs]);
      setNewBlog({ title: "", author: "", content: "", image: "" }); // Reset the form fields
      setIsPopupVisible(false); // Close the popup after adding the blog
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen md:flex-row">
      {/* Left Panel: Blog List */}
      <div
        className={`p-6 bg-gray-100 md:w-1/3 ${
          selectedBlog ? "hidden md:block" : "block w-full"
        }`}
      >
        <h1 className="mb-6 text-4xl font-bold text-yellow-500">Samvidhan Path Blogs</h1>
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div
              key={blog.$id}
              className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-20 h-20 rounded-md"
              />
              <div>
                <h2 className="text-lg font-bold">{blog.title}</h2>
                <p className="text-sm text-gray-600">
                  By {blog.author} on{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel: Blog Details */}
      <div
        className={`p-6 bg-white md:w-1/2 overflow-y-auto ${
          selectedBlog ? "block" : "hidden md:block"
        }`}
      >
        {selectedBlog ? (
          <>
            <button
              onClick={() => setSelectedBlog(null)}
              className="mb-6 text-yellow-500 underline"
            >
              Back to Blogs
            </button>
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="object-cover w-auto rounded-lg h-80"
            />
            <h2 className="mt-6 text-3xl font-bold">{selectedBlog.title}</h2>
            <p className="text-gray-600">
              By {selectedBlog.author} on{" "}
              {new Date(selectedBlog.createdAt).toLocaleDateString()}
            </p>
            <p className="mt-4 text-gray-700">{selectedBlog.content}</p>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-xl text-gray-500">Select a blog to view details</p>
          </div>
        )}
      </div>

      {/* Add Blog Popup Button */}
      <button
        onClick={() => setIsPopupVisible(true)}
        className="fixed p-4 text-white bg-yellow-500 rounded-full shadow-lg bottom-10 right-10 hover:bg-yellow-400"
      >
        <span className="text-xl">+ Add Blog</span>
      </button>

      {/* Add Blog Popup */}
      {isPopupVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-yellow-500">Add New Blog</h2>
            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 mb-4 border rounded"
              value={newBlog.title}
              onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full p-2 mb-4 border rounded"
              value={newBlog.author}
              onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
            />
            <textarea
              placeholder="Content"
              className="w-full p-2 mb-4 border rounded"
              value={newBlog.content}
              onChange={(e) => setNewBlog({ ...newBlog, content: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL (optional)"
              className="w-full p-2 mb-4 border rounded"
              value={newBlog.image}
              onChange={(e) => setNewBlog({ ...newBlog, image: e.target.value })}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setIsPopupVisible(false)} // Close the popup
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddBlog}
                className="px-4 py-2 text-white bg-yellow-500 rounded"
              >
                Add Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
