import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";

const DigitalMarketing = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <div className="px-6 py-12 lg:px-20 max-w-7xl mx-auto text-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-indigo-600">
          Digital Marketing Services by Appz Global Tech
        </h1>
        <h2 className="text-xl font-semibold mb-6">
          Drive Traffic. Generate Leads. Boost Your Brand.
        </h2>

        <p className="mb-6">
          In today’s digital-first world, having a strong online presence is
          crucial to your business’s success. At{" "}
          <span className="font-semibold text-indigo-500">
            Appz Global Tech
          </span>
          , we offer comprehensive digital marketing services designed to
          elevate your brand, increase visibility, and drive measurable results.
          From increasing website traffic to improving conversion rates, our
          strategies are tailored to meet your specific business goals.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4">
          Our Digital Marketing Services
        </h3>
        <p className="mb-4">
          We combine innovative strategies with the latest marketing
          technologies to deliver high-impact digital marketing solutions:
        </p>

        <ul className="space-y-4 list-disc list-inside">
          <li>
            <strong>Search Engine Optimization (SEO):</strong> Increase your
            website’s visibility with keyword research, on-page optimization,
            content strategy, and link-building.
          </li>
          <li>
            <strong>Pay-Per-Click (PPC) Advertising:</strong> Run targeted ads
            on Google and Bing to generate cost-effective leads and measurable
            results.
          </li>
          <li>
            <strong>Social Media Marketing (SMM):</strong> Build your brand
            across Facebook, Instagram, LinkedIn, and Twitter with engaging
            content and strategic campaigns.
          </li>
          <li>
            <strong>Content Marketing:</strong> Publish valuable content like
            blogs, videos, and infographics to engage your audience and boost
            conversions.
          </li>
          <li>
            <strong>Email Marketing:</strong> Connect with customers through
            personalized emails, newsletters, and promotions that drive
            conversions.
          </li>
          <li>
            <strong>Online Reputation Management (ORM):</strong> Monitor and
            protect your brand image across platforms to maintain trust and
            credibility.
          </li>
          <li>
            <strong>Influencer Marketing:</strong> Partner with influencers to
            reach new audiences and increase authentic engagement.
          </li>
          <li>
            <strong>Affiliate Marketing:</strong> Drive sales through strategic
            affiliate partnerships and maximize conversions.
          </li>
        </ul>

        <h3 className="text-2xl font-bold mt-10 mb-4">
          Why Choose Appz Global Tech for Digital Marketing?
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Customized Strategies tailored to your business and audience.</li>
          <li>Data-Driven Approach using analytics to ensure maximum ROI.</li>
          <li>
            Experienced Team that stays ahead of trends and industry changes.
          </li>
          <li>End-to-End Services from planning to execution and reporting.</li>
        </ul>

        <div className="mt-10 p-6 bg-indigo-50 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold mb-2">
            Let’s Take Your Brand to the Next Level
          </h4>
          <p className="mb-4">
            Whether you're a startup looking to build your online presence or an
            established brand aiming for digital transformation, Appz Global
            Tech has the expertise to drive results.
          </p>
          <p className="font-semibold text-indigo-600">
            Get in Touch for a Free Digital Marketing Consultation Today!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DigitalMarketing;
