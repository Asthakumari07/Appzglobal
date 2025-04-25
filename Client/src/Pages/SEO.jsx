import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const SEO = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="px-6 py-12 md:px-20 bg-white text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-4 text-orange-500">
          SEO/SEM Services by Appz Global Tech
        </h1>
        <p className="text-center text-xl mb-10 text-gray-600">
          🚀 Boost Your Website’s Visibility and Drive More Traffic
        </p>

        <p className="mb-6 text-lg">
          In today’s digital landscape, ranking high on search engines is
          crucial for attracting customers and growing your business. At{" "}
          <span className="font-semibold text-blue-700">Appz Global Tech</span>,
          we offer <strong>SEO</strong> (Search Engine Optimization) and{" "}
          <strong>SEM</strong> (Search Engine Marketing) services that help you
          enhance your website’s visibility, increase organic traffic, and
          achieve better conversions. Whether you need to improve your site’s
          ranking on Google or drive targeted traffic with paid search ads, we
          have the strategies to achieve your goals.
        </p>

        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          📊 Our SEO/SEM Services
        </h2>

        <p className="mb-4 text-lg">
          We offer a range of SEO and SEM services designed to improve your
          online presence and deliver tangible results for your business:
        </p>

        <h3 className="text-xl font-bold mt-6 text-orange-500">
          🔍 Search Engine Optimization (SEO)
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-lg mt-2">
          <li>
            🧩 <strong>On-Page SEO:</strong> We optimize your content,
            structure, and metadata for search engine visibility.
          </li>
          <li>
            🔑 <strong>Keyword Research & Strategy:</strong> In-depth research
            to target the right keywords for lead generation.
          </li>
          <li>
            📝 <strong>Content Optimization:</strong> High-quality, relevant
            content that matches search intent.
          </li>
          <li>
            ⚙️ <strong>Technical SEO:</strong> Site speed, mobile optimization,
            and secure (HTTPS) implementation.
          </li>
          <li>
            🔗 <strong>Link Building:</strong> High-quality backlinks from
            trusted domains to boost authority.
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-8 text-blue-700">
          💰 Search Engine Marketing (SEM)
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-lg mt-2">
          <li>
            🎯 <strong>PPC Campaign Management:</strong> Strategic paid search
            campaigns that drive immediate results.
          </li>
          <li>
            ✍️ <strong>Ad Copywriting & Optimization:</strong> Compelling ad
            copy that engages and converts.
          </li>
          <li>
            📄 <strong>Landing Page Optimization:</strong> High-converting pages
            for better user experience and conversion.
          </li>
          <li>
            📈 <strong>Bid Management:</strong> Smart bidding strategies that
            balance performance and cost.
          </li>
          <li>
            🔁 <strong>Remarketing Campaigns:</strong> Re-engage past visitors
            and guide them toward conversion.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-orange-500 mt-10 mb-4">
          🌟 Why Choose Appz Global Tech for SEO/SEM Services?
        </h2>
        <ul className="list-disc ml-6 space-y-3 text-lg">
          <li>
            📊 <strong>Proven Results:</strong> Data-backed strategies that
            improve rankings, traffic, and conversions.
          </li>
          <li>
            🎯 <strong>Tailored Strategies:</strong> Customized plans based on
            your goals and audience.
          </li>
          <li>
            🏆 <strong>Expertise Across Industries:</strong> From tech to
            retail, we know how to reach your audience.
          </li>
          <li>
            📢 <strong>Transparent Reporting:</strong> Detailed performance
            reports to keep you in the loop.
          </li>
          <li>
            🔁 <strong>End-to-End Solutions:</strong> We handle every aspect of
            SEO and SEM for you.
          </li>
        </ul>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            📞 Boost Your Online Visibility and Drive More Conversions
          </h3>
          <p className="text-lg mb-6">
            Ready to take your online presence to the next level? With Appz
            Global Tech’s SEO/SEM services, we help your business attract the
            right audience, improve visibility, and achieve higher conversion
            rates.
          </p>
          <button
            className="text-lg font-medium text-white bg-blue-500 px-5 py-2 rounded-2xl"
            onClick={() => navigate("/contact")}
          >
            📲 Contact Us Today for a Free SEO/SEM Consultation!
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SEO;
