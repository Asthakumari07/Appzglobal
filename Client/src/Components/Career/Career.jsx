import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import CareerCard from "./CareerCard";
import Gallery from "./Gallery";
import Footer3 from "../About/Footer3";
import Footer from "../Footer/Footer";

const Career = () => {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/api/jobposts");
        setJobPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch job posts", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />
      <Navbar2 />
      {loading ? (
        <p className="text-center py-10 text-gray-500">Loading job posts…</p>
      ) : (
        <CareerCard data={jobPosts} />
      )}
      <Gallery />
      <Footer3 />
      <Footer />
    </>
  );
};

export default Career;
