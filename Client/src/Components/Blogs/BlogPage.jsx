import React from "react";
import BlogCard from "./BlogsCard";
import blog1 from "../../assets/Client.png";

const BlogPage = () => {
  const blogs = [
    {
      image: blog1,
      title: "How AI is Transforming Tech",
      date: "April 15, 2025",
      description:
        "Discover how artificial intelligence is driving innovation across industries and redefining the future of technology at Appz Global Tech.",
    },
    {
      image: blog1,
      title: "5 Must-Know Trends in Web Development",
      date: "April 10, 2025",
      description:
        "Explore emerging trends like micro frontends and serverless architecture that are shaping the next generation of web solutions.",
    },
    {
      image: blog1,
      title: "UX Tips That Actually Work",
      date: "April 5, 2025",
      description:
        "Learn tried-and-tested UX principles that help boost engagement, retention, and conversions — essentials we prioritize at Appz Global Tech.",
    },
    {
      image: blog1,
      title: "How AI is Transforming Tech",
      date: "April 15, 2025",
      description:
        "Discover how artificial intelligence is driving innovation across industries and redefining the future of technology at Appz Global Tech.",
    },
    {
      image: blog1,
      title: "How AI is Transforming Tech",
      date: "April 15, 2025",
      description:
        "Discover how artificial intelligence is driving innovation across industries and redefining the future of technology at Appz Global Tech.",
    },
    {
      image: blog1,
      title: "How AI is Transforming Tech",
      date: "April 15, 2025",
      description:
        "Discover how artificial intelligence is driving innovation across industries and redefining the future of technology at Appz Global Tech.",
    },
  ];

  return (
    <div className="p-6 lg:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Latest Blogs</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
