import React, { useEffect, useState } from "react";
import axios from "axios";

const JobPostData = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    para: "",
    location: "",
    image: "",
  });

  const [editingId, setEditingId] = useState(null); // Track which job is being edited

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/jobposts");
      setJobPosts(res.data);
    } catch (error) {
      console.error("Error fetching job posts:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update existing job post
        const res = await axios.put(`/api/jobposts/${editingId}`, formData);
        setJobPosts((prev) =>
          prev.map((job) => (job._id === editingId ? res.data : job))
        );
        setEditingId(null);
      } else {
        // Create new job post
        const res = await axios.post("/api/jobposts", formData);
        setJobPosts((prev) => [...prev, res.data]);
      }
      setFormData({ title: "", para: "", location: "", image: "" });
    } catch (error) {
      console.error("Error submitting job post:", error);
    }
  };

  const handleEdit = (job) => {
    setEditingId(job._id);
    setFormData({
      title: job.title,
      para: job.para,
      location: job.location,
      image: job.image,
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/jobposts/${id}`);
      setJobPosts((prev) => prev.filter((job) => job._id !== id));
    } catch (error) {
      console.error("Error deleting job post:", error);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Job Posts</h3>

      {/* Form for Create/Update */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          name="para"
          placeholder="Description"
          value={formData.para}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update Job Post" : "Add Job Post"}
        </button>
        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({ title: "", para: "", location: "", image: "" });
            }}
            className="ml-2 bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        )}
      </form>

      {/* List of job posts */}
      <div className="space-y-4">
        {jobPosts.length === 0 ? (
          <p className="text-gray-500">No job posts available.</p>
        ) : (
          jobPosts.map((job) => (
            <div
              key={job._id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <h4 className="text-lg font-bold">{job.title}</h4>
              <p>{job.para}</p>
              <p className="text-sm text-gray-600">{job.location}</p>
              {job.image && (
                <img
                  src={job.image}
                  alt={job.title}
                  className="mt-2 w-40 h-24 object-cover rounded"
                />
              )}
              <div className="mt-2 space-x-2">
                <button
                  onClick={() => handleEdit(job)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  className="text-red-600 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default JobPostData;
