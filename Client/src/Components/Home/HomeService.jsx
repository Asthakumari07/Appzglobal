import React from "react";
import { motion } from "framer-motion";
import img1 from "../../assets/Services/Website Development.png";
import img2 from "../../assets/Services/Mobile App Development.png";
import img3 from "../../assets/Services/Mobile app Development2.png";
import img6 from "../../assets/Services/marketing.png";
import img5 from "../../assets/Services/oracle.png";
import img4 from "../../assets/Services/noun-digital-marketing-7719755 1.png";
import img7 from "../../assets/Services/noun-seo-7712277 1.png";
import img8 from "../../assets/Services/game.png";

import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: img1,
    title: "Website Development",
    para: "We empower our clients with dynamic, responsive website builds using PHP, Java, .NET, Wordpress, React JS, React Native, Drupal, CMS, and more — ensuring seamless performance, scalability, and user engagement.",
    btn1: CiCirclePlus,
    link: "/development",
  },
  {
    image: img2,
    title: "Mobile app Development",
    para: "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
    btn1: CiCirclePlus,
    link: "mobile-app",
  },
  {
    image: img3,
    title: "Software Development",
    para: "Transform your ideas into powerful digital solutions with our cutting-edge software development services. From scalable web and mobile apps to enterprise solutions, we build high-performance, user-centric software tailored to your business needs.",
    btn1: CiCirclePlus,
    link: "software-dev",
  },
  {
    image: img4,
    title: "Digital Marketing Services",
    para: "Boost your brand’s online presence with our result-driven digital marketing services. From SEO and social media to paid ads, we help you reach, engage, and convert your audience effectively.",
    btn1: CiCirclePlus,
    link: "/digital-marketing",
  },
  {
    image: img5,
    title: "Oracle SQL Development",
    para: "Optimize your data management with our expert Oracle SQL development services. We design efficient, scalable, and secure database solutions tailored to your business needs",
    btn1: CiCirclePlus,
    link: "/oracle",
  },
  {
    image: img6,
    title: "Affiliated Marketing Services",
    para: "Optimize your data management with our expert Oracle SQL development services. We design efficient, scalable, and secure database solutions tailored to your business needs.",
    btn1: CiCirclePlus,
    link: "/digital-marketing",
  },
  {
    image: img7,
    title: "SEO/SEM",
    para: "Boost your website’s visibility with our SEO services. We optimize your site for higher rankings, increased traffic, and better conversions.",
    btn1: CiCirclePlus,
    link: "/seo",
  },
  {
    image: img8,
    title: "Game Development",
    para: "Bring your gaming ideas to life with our expert game development services. We create immersive, high-performance games for mobile, PC, and consoles with stunning visuals and smooth gameplay.",
    btn1: CiCirclePlus,
    link: "game",
  },
];

const HomeService = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10 bg-gradient-to-br from-blue-100 via-white to-orange-100">
      <font family="Papyrus">
        <div className="text-center mb-10">
          <h2 className="text-blue-800 hover:underline text-4xl font-semibold">
            Services
          </h2>
          <h2 className="text-blue-800 text-2xl font-semibold">
            Transforming Businesses with Cutting-Edge{" "}
            <span className="text-orange-400">IT Services</span>
          </h2>
        </div>
      </font>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 duration-500  hover:bg-gradient-to-br hover:from-orange-100 hover:via-white hover:to-blue-100 hover:border-b-[3px] hover:border-r-[3px] border-blue-500 "
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-16 w-16 mb-4 object-contain"
            />

            <h3 className="text-lg font-semibold text-blue-800 transition-transform duration-300 group-hover:scale-105">
              {item.title}
            </h3>

            <p className="text-gray-600 text-sm mt-2 transition-transform duration-300 group-hover:scale-105">
              {item.para}
            </p>

            <button
              className="mt-6 text-orange-400 hover:text-orange-500 transition"
              onClick={() => navigate(item.link)}
            >
              <item.btn1 size={24} />
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-10">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 font-bold text-blue-800 border border-blue-800 hover:border-b-[3px] hover:border-r-[3px] hover:border-orange-400 hover:bg-blue-800 hover:text-white rounded-xl transition"
          onClick={() => navigate("/services")}
        >
          VIEW MORE
        </motion.button>
      </div>
    </div>
  );
};

export default HomeService;
