import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CareerCardCRUD = () => {
  const navigate = useNavigate();
  const initialForm = { title: "", para: "", location: "", image: "" };

  const [formData, setFormData] = useState(initialForm);
  const [editingId, setEditingId] = useState(null);
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("/api/jobposts");
      setJobPosts(res.data);
      setError("");
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to load job posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        const res = await axios.put(`/api/jobposts/${editingId}`, formData);
        setJobPosts((prev) =>
          prev.map((job) => (job._id === editingId ? res.data : job))
        );
      } else {
        const res = await axios.post("/api/jobposts", formData);
        setJobPosts((prev) => [...prev, res.data]);
      }
      setFormData(initialForm);
      setEditingId(null);
      setError("");
    } catch (err) {
      console.error("Error saving job:", err);
      setError("Failed to save job. Please check your input.");
    }
  };

  const startEdit = (job) => {
    setEditingId(job._id);
    setFormData({
      title: job.title,
      para: job.para,
      location: job.location,
      image: job.image,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job post?"))
      return;
    try {
      await axios.delete(`/api/jobposts/${id}`);
      setJobPosts((prev) => prev.filter((job) => job._id !== id));
    } catch (err) {
      console.error("Error deleting job:", err);
      setError("Failed to delete job post.");
    }
  };

  return (
    <div className="py-10 bg-gray-50">
      {/* Form Section */}
      <div className="max-w-3xl mx-auto mb-10">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {editingId ? "Edit Job Post" : "Add New Job Post"}
          </h2>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. React Developer"
                className="mt-1 w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="para"
                value={formData.para}
                onChange={handleChange}
                placeholder="Experience 3+ Years"
                className="mt-1 w-full border border-gray-300 rounded p-2"
                rows={3}
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Noida"
                className="mt-1 w-full border border-gray-300 rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700">Image URL</label>
              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="/assets/react.jpg"
                className="mt-1 w-full border border-gray-300 rounded p-2"
              />
              {formData.image && (
                <img
                  src={formData.image}
                  alt="Preview"
                  className="mt-2 h-20 w-auto rounded"
                />
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-2xl font-semibold"
              >
                {editingId ? "Update Job" : "Add Job"}
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setFormData(initialForm);
                  }}
                  className="bg-gray-400 text-white px-4 py-2 rounded-2xl"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-10 py-10 bg-cover bg-center rounded-t-2xl"
          style={{ backgroundImage: `url("/assets/back-image.png")` }}
        >
          <h1 className="text-3xl font-semibold">
            Quick Links to{" "}
            <span className="text-orange-400">Open Positions</span>
          </h1>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading jobs…</p>
        ) : jobPosts.length === 0 ? (
          <p className="text-center text-gray-500">No open positions found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-10 mb-10">
            {jobPosts.map((job) => (
              <div
                key={job._id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition"
              >
                <div>
                  {job.image && (
                    <img
                      src={job.image}
                      alt={job.title}
                      className="h-20 w-auto object-cover rounded-md mb-2"
                    />
                  )}
                  <h2 className="text-2xl font-bold">{job.title}</h2>
                  <p className="text-xl text-gray-600">{job.para}</p>
                  <h3 className="text-sm text-gray-500">{job.location}</h3>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button
                    className="text-sm border border-blue-800 text-blue-800 px-4 py-1 rounded-3xl flex items-center gap-1 font-semibold"
                    onClick={() => navigate("/application")}
                  >
                    Apply Now <MdArrowOutward />
                  </button>

                  <div className="space-x-2">
                    <button
                      onClick={() => startEdit(job)}
                      className="text-sm bg-yellow-400 text-white px-3 py-1 rounded-full font-semibold hover:bg-yellow-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(job._id)}
                      className="text-sm bg-red-500 text-white px-3 py-1 rounded-full font-semibold hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerCardCRUD;
