import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/blogs"; // Replace with your backend URL

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Fetch blogs from the backend
  useEffect(() => {
    axios
      .get(API_BASE_URL)
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container p-6 mx-auto space-y-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-yellow-500">
        Samvidhan Path Blogs
      </h1>

      {/* Blog List */}
      {!selectedBlog && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="p-4 bg-gray-100 rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
              onClick={() => setSelectedBlog(blog)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-40 rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold">{blog.title}</h2>
                <p className="text-gray-500">
                  By {blog.author} on{" "}
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-2 text-gray-700 line-clamp-3">
                  {blog.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Selected Blog Details */}
      {selectedBlog && (
        <div>
          <button
            onClick={() => setSelectedBlog(null)}
            className="mb-6 text-yellow-500 underline"
          >
            Back to Blogs
          </button>
          <img
            src={selectedBlog.image}
            alt={selectedBlog.title}
            className="object-cover w-full rounded-lg h-80"
          />
          <h2 className="mt-6 text-3xl font-bold">{selectedBlog.title}</h2>
          <p className="text-gray-500">
            By {selectedBlog.author} on{" "}
            {new Date(selectedBlog.createdAt).toLocaleDateString()}
          </p>
          <p className="mt-4 text-gray-700">{selectedBlog.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
