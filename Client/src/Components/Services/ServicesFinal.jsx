import React from "react";

import { CiCirclePlus } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const data = [
  {
    image: "/assets/cloud.png",
    title: "Cloud & DevOps",
    para: "Optimize your infrastructure with our Cloud & DevOps solutions. We ensure seamless deployment, scalability, and automation for faster, more efficient operations.",
    btn1: CiCirclePlus,
    link: "/cloud",
  },
  {
    image: "/assets/Website Development.png",
    title: "Website Development",
    para: "We empower our clients with dynamic, responsive website builds using PHP, Java, .NET, Wordpress, React JS, React Native, Drupal, CMS, and more — ensuring seamless performance, scalability, and user engagement.",
    btn1: CiCirclePlus,
    link: "/mobile-app",
  },

  {
    image: "/assets/noun-digital-marketing-7719755 1.png",
    title: "Digital Marketing Services",
    para: "Boost your brand’s online presence with our result-driven digital marketing services. From SEO and social media to paid ads, we help you reach, engage, and convert your audience effectively.",
    btn1: CiCirclePlus,
    link: "/digital-marketing",
  },
  {
    image: "/assets/Mobile app Development2.png",
    title: "Mobile App Development",
    para: "We build high-performance Android and iOS apps with seamless user experiences, ensuring innovation and scalability for your business.",
    btn1: CiCirclePlus,
    link: "/mobile-app",
  },
  {
    image: "/assets/Mobile App Development.png",
    title: "Software Development",
    para: "Transform your ideas into powerful digital solutions with our cutting-edge software development services. From scalable web and mobile apps to enterprise solutions, we build high-performance, user-centric software tailored to your business needs.",
    btn1: CiCirclePlus,
    link: "/software-dev",
  },
  {
    image: "/assets/oracle.png",
    title: "Oracle SQL Development",
    para: "Optimize your data management with our expert Oracle SQL development services. We design efficient, scalable, and secure database solutions tailored to your business needs",
    btn1: CiCirclePlus,
    link: "/oracle",
  },

  {
    image: "/assets/noun-seo-7712277 1.png",
    title: "SEO/SEM",
    para: "Boost your website’s visibility with our SEO services. We optimize your site for higher rankings, increased traffic, and better conversions.",
    btn1: CiCirclePlus,
    link: "/seo",
  },
  {
    image: "/assets/game.png",
    title: "Game Development",
    para: "Bring your gaming ideas to life with our expert game development services. We create immersive, high-performance games for mobile, PC, and consoles with stunning visuals and smooth gameplay.",
    btn1: CiCirclePlus,
    link: "/game",
  },

  {
    image: "/assets/cloud.png",
    title: "Cloud & DevOps",
    para: "Optimize your infrastructure with our Cloud & DevOps solutions. We ensure seamless deployment, scalability, and automation for faster, more efficient operations.",
    btn1: CiCirclePlus,
    link: "/cloud",
  },

  {
    image: "/assets/database.png",
    title: "Database Administration",
    para: "Ensure optimal performance and security with our database administration services. We manage, optimize, and safeguard your databases for seamless business operations.",
    btn1: CiCirclePlus,
    link: "/database",
  },
  {
    image: "/assets/analytical.png",
    title: "Analytical Solutions",
    para: "Unlock valuable insights with our analytical solutions. We leverage data-driven strategies to help you make informed decisions and drive business growth.",
    btn1: CiCirclePlus,
    link: "/analytical",
  },
  {
    image: "/assets/testing.png",
    title: "Software Testing",
    para: "Ensure flawless performance with our software testing services. We detect bugs, enhance quality, and optimize functionality for a seamless user experience.",
    btn1: CiCirclePlus,
    link: "/testing",
  },
  {
    image: "/assets/erp.png",
    title: "ERP Development",
    para: "Streamline your business operations with our custom ERP development services. We build scalable, integrated solutions to enhance efficiency, automation, and decision-making.",
    btn1: CiCirclePlus,
    link: "/erpservice",
  },
  {
    image: "/assets/crm.png",
    title: "CRM Development",
    para: "Optimize customer interactions with our custom CRM development, enhancing sales, automation, and engagement.",
    btn1: CiCirclePlus,
    link: "/crm",
  },
  {
    image: "/assets/ui ux.png",
    title: "UI/UX Designing",
    para: "Create stunning, user-friendly designs with our UI/UX services. We craft intuitive, engaging experiences that enhance usability and drive user satisfaction.",
    btn1: CiCirclePlus,
    link: "/uiux",
  },
];

const ServicesFinal = () => {
  const navigate = useNavigate();
  return (
    <div
      className="py-10"
      style={{
        backgroundImage: `url("/assets/back-image.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center mb-10">
        <h2 className="text-blue-800 hover:underline text-4xl font-semibold">
          Services
        </h2>
        <h2 className="text-blue-800 text-2xl font-semibold">
          Transforming Businesses with Cutting-Edge{" "}
          <span className="text-orange-400">IT Services</span>
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
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
    </div>
  );
};

export default ServicesFinal;
