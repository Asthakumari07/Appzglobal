import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Navbar2 from "../Components/Navbar/Navbar2";
import Footer from "../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Contact } from "lucide-react";
import Industries from "./Industries";
import Benefits from "./Benefits";
import ContactForm from "../Components/Home/ContactForm";
import Footer3 from "../Components/About/Footer3";
import BlogFAQSection from "./BlogFAQSection";
import { Helmet } from "react-helmet-async";
import Stages from "./Stages";
import BlogPage from "./BlogPage";

const points = [
  {
    title: "Good Expertise",
    desc: "Numbers of experience in delivering software development solutions for various industries.",
  },
  {
    title: "World-wide Presence",
    desc: "Offering businesses in India, USA, and globally.",
  },
  {
    title: "B2B & eCommerce Focus",
    desc: "We understand solutions that help you in eCommerce growth and enterprise needs.",
  },
  {
    title: "Agile Development Approach",
    desc: "We serve you like rapid metro delivery cycles with flexibility for evolving requirements according to market trends.",
  },
  {
    title: "From Start to End Services",
    desc: "From ideation to post-launch support, we cover it all.",
  },
];

const industries = [
  { img: "/assets/Indo-1.jpeg", title: "Ecommerce & Retail" },
  { img: "/assets/Indo-2.jpeg", title: "Healthcare" },
  { img: "/assets/Indo-3.jpeg", title: "Finance & Banking" },
  { img: "/assets/Indo-4.jpeg", title: "Manufacturing" },
  { img: "/assets/Indo-5.jpeg", title: "Education & e-learning" },
  { img: "/assets/Indo-6.jpeg", title: "Automotive" },
];

const NewPage = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>
          Custome Software Development Company | Software Development Services
        </title>
        <meta
          name="description"
          content="Appz Global Tech offers scalable and secure software development services, including enterprise solutions, web apps, mobile apps, and consulting to help businesses grow globally."
        />
        <meta
          name="keywords"
          content="software development, enterprise solutions, web applications, mobile apps, software consulting, Appz Global Tech"
        />
        <meta name="author" content="Appz Global Tech" />
        <meta
          property="og:title"
          content="Custome Software Development Company | Software Development Services"
        />
        <meta
          property="og:description"
          content="Transform your vision into reality with Appz Global Tech’s custom software development, enterprise solutions, and mobile app services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/FirstImage.jpeg" />
        <meta
          property="og:url"
          content="https://appzglobaltech.com/software/Development"
        />
      </Helmet>

      <Navbar />
      <Navbar2 />

      {/* Hero Section with Background Image */}
      {/* <h1 className=" mt-10 mb-10 text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
        Start Future-Ready Digital Solutions With Our Software Expertise
      </h1> */}
      <div
        className="relative bg-cover bg-center bg-no-repeat text-gray-800"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        {/* Gradient Overlay
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div> */}
        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-16 text-left">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
            Start Future-Ready Digital Solutions With Our Software Expertise
          </h2>

          <p className="text-xl leading-relaxed text-gray-700 mb-4">
            In today’s fast-moving digital world, markets need more than just
            software, they want scalable, secure, and high-performing software
            development services that give growth.
          </p>
          <p className="text-xl leading-relaxed text-gray-700 mb-4">
            At Appz Global Tech Pvt. Ltd., we are not just innovative,
            result-oriented software solutions that build B2B business,
            eCommerce businesses, and SMEs to stay top-notch in the global
            market, the USA, and across the world.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            We understand your needs for custom-built applications,
            enterprise-grade software,  advanced digital solutions, and we blend
            our strategy, technology, and innovation to transform your vision
            into reality.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            OUR SOFTWARE DEVELOPMENT SOLUTIONS
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            Yes! We can say, <strong>Appz Global Tech Pvt. Ltd.,</strong>{" "}
            provides <strong>end-to-end software development solutions</strong>{" "}
            for businesses of all sizes and industries. From strategy to
            deployment, our team ensures seamless integration of technology into
            your operations.
          </p>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center py-16 px-6 md:px-12"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center backdrop-blur-sm p-8">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Custom Software Development Services
            </h3>
            <p className="text-gray-700 mb-4 text-xl">
              Every business is with a new vision and new goal and so are its
              software needs. Our AGT custom software development services are
              available to build solutions that perfectly match with your
              business goals.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-xl">
              <li>Scalable and Safe applications</li>
              <li>
                Solutions oriented for eCommerce, healthcare, fintech, and many
                more
              </li>
              <li>
                Future-ready architectures that adapt to evolving business needs
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/assets/FirstImage.jpeg"
              alt="Custom Software Development"
              className="w-full h-full object-cover rounded-tl-[160px]"
            />
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center py-16 px-6 md:px-12"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/assets/SecondImage.jpeg"
              alt="Mobile App Development"
              className="w-full max-w-md rounded-tr-[140px] shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Enterprise Software Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-xl">
              We build robust enterprise solutions that streamline operations,
              improve workflows, and enhance decision-making.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-xl">
              <li>ERP and CRM solutions</li>
              <li>Business process automation</li>
              <li>Cloud-based enterprise applications</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center py-16 px-6 md:px-12"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center backdrop-blur-sm p-8">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Web Application Development
            </h3>
            <p className="text-gray-700 mb-4 text-xl">
              From standard to dynamic eCommerce platforms to SaaS-based
              products, Appz Global Tech Pvt. Ltd. software development agency
              in Noida provides responsive, scalable, and bug-free web
              applications that give seamless user experiences.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/assets/ThirdImage.jpeg"
              alt="Custom Software Development"
              className="w-full h-full object-cover rounded-tl-[160px]"
            />
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center py-16 px-6 md:px-12"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/assets/ForthImage.jpeg"
              alt="Mobile App Development"
              className="w-full max-w-md rounded-tr-[140px] shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Mobile Application Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-xl">
              We deliver feature-oriented mobile apps for iOS and Android that
              help your business reach a global brand.
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-2 text-xl">
              <li>Native and cross-platform apps</li>
              <li>eCommerce and B2B mobile solutions</li>
              <li>AI-powered, user-centric apps</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="relative bg-cover bg-center py-16 px-6 md:px-12"
        style={{ backgroundImage: "url('/assets/Component.jpg')" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center backdrop-blur-sm p-8">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Software Development Consulting Services
            </h3>
            <p className="text-gray-700 mb-4 text-xl">
              We know you don’t know where to start? Our software development
              consulting services help businesses design the right tech
              strategy.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 text-xl">
              <li>Technology stack consultation</li>
              <li>Product roadmaps and MVP planning</li>
              <li>Scalability and cloud migration guidance</li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="/assets/FifthImage.jpeg"
              alt="Custom Software Development"
              className="w-full h-full object-cover rounded-tl-[160px]"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Us as Your Software Development Partner?
          </h2>

          <ul className="space-y-5 text-xl">
            {points.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                <p>
                  <span className="font-semibold">{item.title}:</span>{" "}
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-10 ml-9 text-xl">
            We understand the client-first approach that not only understands
            your business to offer you software that is not only technically
            enriched but also result-oriented.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/assets/SixthImage.jpeg"
            alt="Why Choose Us"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
      <Industries />
      {/* <div className="flex justify-center">
        <img
          src="/assets/Proccess.jpeg"
          alt="Why Choose Us"
          className="rounded-2xl shadow-lg w-full max-w-6xl"
        />
      </div> */}
      <Stages />
      <Benefits />
      <BlogPage />
      <BlogFAQSection />
      <ContactForm />

      <Footer3 />
      <Footer />
    </>
  );
};

export default NewPage;
