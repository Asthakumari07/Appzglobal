import React from "react";
import { Calendar } from "lucide-react"; // Example icon
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center mb-16 bg-gradient-to-r from-blue-50 via-white to-blue-50 p-10 rounded-3xl shadow-sm">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Top-Notch <span className="text-blue-600">Software Development</span>{" "}
          Company in India – With Global Results
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-lg">
          As a trusted software development agency in Noida, we can say, we
          served hundreds of clients in India, USA, and globally. Our presence
          in <span className="font-semibold">Noida’s technology hub</span>{" "}
          solutions while keeping your business syncing to international
          markets.
          <br />
          <br />
          FNo matter if you are a startup looking for an MVP, an eCommerce brand
          expanding into new markets, or an enterprise in need of digital
          transformation, Yes! We are the best software development company in
          Noida to collaborate with.
        </p>
      </section>

      {/* Get Started Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-10 rounded-3xl shadow-md mb-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Get Started With Us Today</h3>
        <p className="leading-relaxed max-w-2xl mx-auto text-lg">
          Just like good or error free software can transform your business. At
          Appz Global Tech Pvt. Ltd., we don’t just make software, we understand
          digital experiences that drive numbers of results.
          <br />
          <br />
          Come and Catch with us to leverage our custom software development
          services and take your business to the next level in this competitive
          market trend.
          <br />
          <br />
          Contact us today to book a free consultation and understand how our
          software development solutions can help in your growth in India, USA,
          and globally.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="mt-6 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:scale-105 transition flex items-center mx-auto gap-2"
        >
          <Calendar className="w-5 h-5" /> Book a Free Consultation
        </button>
      </section>

      {/* Blog Section */}
      <section>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Latest Insights & Blogs ✨
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {/* Blog Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img
              src="/assets/Blog1.jpeg"
              alt="Blog 1"
              className="rounded-xl mb-5 h-52 w-full object-cover"
            />
            <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
              Technology
            </span>
            <h4 className="text-2xl font-bold mt-3 mb-2 text-gray-900">
              Emerging Trends in Software Development
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Discover the latest innovations shaping the software industry and
              how they can accelerate your business.
            </p>
            <div className="flex justify-between items-center">
              {/* <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Read More →
              </a> */}
              <span className="text-xs text-gray-400">5 min read</span>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img
              src="/assets/Blog1.jpeg"
              alt="Blog 2"
              className="rounded-xl mb-5 h-52 w-full object-cover"
            />
            <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
              Business
            </span>
            <h4 className="text-2xl font-bold mt-3 mb-2 text-gray-900">
              Why Businesses Need Custom Software
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Learn why custom-built solutions outperform off-the-shelf
              products, boosting efficiency and scalability.
            </p>
            <div className="flex justify-between items-center">
              {/* <a
                href="#"
                className="text-green-600 font-semibold hover:underline"
              >
                Read More →
              </a> */}
              <span className="text-xs text-gray-400">6 min read</span>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <img
              src="/assets/Blog1.jpeg"
              alt="Blog 3"
              className="rounded-xl mb-5 h-52 w-full object-cover"
            />
            <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
              Strategy
            </span>
            <h4 className="text-2xl font-bold mt-3 mb-2 text-gray-900">
              Digital Transformation Made Easy
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Explore digital transformation strategies that can modernize your
              business operations and customer experience.
            </p>
            <div className="flex justify-between items-center">
              {/* <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                Read More →
              </a> */}
              <span className="text-xs text-gray-400">4 min read</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
