import React, { useState, useRef, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiLogIn } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const Navbar2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const heroImage =
    "https://raw.githubusercontent.com/Asthakumari07/imagegif/main/hero%20section.gif";

  const routeContent = {
    "/": {
      image: heroImage,
      title: "We Grow With You",
      description:
        "Stay ahead with AI-powered smart solutions that drive innovation, enhance efficiency, and accelerate business growth-empowering you to thrive in a future-ready digital-world",
    },
    "/services": {
      image: "/assets/ServicesPage.jpg",
      title: "Explore Our Services",
      description:
        "We offer cutting-edge development and marketing services tailored to your business needs.",
    },
    "/about": {
      image: "/assets/About22.jpeg",
      title: "About Appz Global",
      description:
        "Discover our journey and mission to deliver transformative digital solutions.",
    },
    "/products": {
      image: "/assets/Products.jpg",
      title: "Our Products",
      description:
        "Explore our innovative and industry-specific products designed for impact.",
    },
    "/career": {
      image: "/assets/CareerPage.jpg",
      title: "Join Our Team",
      description:
        "Be part of a growing tech company with exciting opportunities.",
    },
    "/portfolio": {
      image: "/assets/Portfolio1.jpg",
      title: "Our Portfolio",
      description:
        "Check out our work, success stories, and impactful case studies.",
    },
    "/blogs": {
      image: "/assets/BlogNav.jpg",
      title: "Latest Insights",
      description:
        "Read our blog for the latest tech trends and industry updates.",
    },
    "/team": {
      image: "/assets/TeamPage.jpg",
      title: "Meet Our Team",
      description: "The brilliant minds behind Appz Global Tech's success.",
    },
    "/contact": {
      image: "/assets/ContactImage.jpg",
      title: "Get In Touch",
      description: "We’d love to hear from you and discuss how we can help.",
    },
    "/partner": {
      image: "/assets/Partner.jpg",
      title: "Our Partners",
      description: "We collaborate with global leaders for mutual success.",
    },
    "/infrastructure": {
      image: "/assets/infrastructure.jpg",
      title: "Our Infrastructure",
      description: "Built on robust technology and scalable systems.",
    },
    "/quality": {
      image: "/assets/Quality.jpg",
      title: "Quality Standards",
      description: "Committed to delivering excellence in every project.",
    },
    "/model": {
      image: "/assets/Partner.jpg",
      title: "Business Model",
      description: "Flexible engagement models tailored for your business.",
    },
    "/client": {
      image: "/assets/Client.jpg",
      title: "Our Clients",
      description:
        "Trusted by businesses around the world for quality delivery.",
    },
    "/design": {
      image: "/assets/Quality.jpg",
      title: "Design Methodology",
      description:
        "Our approach to crafting intuitive and effective user interfaces.",
    },
    "/staff": {
      image: "/assets/Staff.jpg",
      title: "Staff Augmentation",
      description: "Extend your team with our skilled professionals.",
    },
    "/term": {
      image: "/assets/Client.jpg",
      title: "Term & Condition",
      description: "Review our terms and conditions for service clarity.",
    },
    "/privacy": {
      image: "/assets/Client.jpg",
      title: "Privacy Policy",
      description: "Understand how we handle and protect your data.",
    },
    "/analytical": {
      image: "/assets/ServicesPage.jpg",
      title: "Analytical",
      description: "Harness the power of analytics for smarter decisions.",
    },
    "/erpservice": {
      image: "/assets/ServicesPage.jpg",
      title: "ERP Services",
      description: "Streamline your operations with our ERP solutions.",
    },
    "/uiux": {
      image: "/assets/ServicesPage.jpg",
      title: "UI/UX",
      description:
        "Create engaging experiences with our UI/UX design services.",
    },
    "/crm": {
      image: "/assets/ServicesPage.jpg",
      title: "CRM",
      description: "Enhance customer relationships with effective CRM tools.",
    },
    "/testing": {
      image: "/assets/ServicesPage.jpg",
      title: "Testing",
      description: "Ensure quality with our comprehensive testing services.",
    },
    "/database": {
      image: "/assets/ServicesPage.jpg",
      title: "Database",
      description:
        "Robust database solutions for data integrity and performance.",
    },
    "/development": {
      image: "/assets/ServicesPage.jpg",
      title: "Development",
      description: "Custom software development to meet your goals.",
    },
    "/cloud": {
      image: "/assets/ServicesPage.jpg",
      title: "Cloud & DevOps",
      description: "Scalable cloud solutions for your growing business.",
    },
    "/Software-dev": {
      image: "/assets/ServiceNew.jpg",
      title: "Software Development",
      description: "Bespoke software development services to fit your needs.",
    },
    "/digital-marketing": {
      image: "/assets/ServicesPage.jpg",
      title: "Digital Marketing Services",
      description:
        "Achieve top brand visibility with strategic digital marketing services in India. Appz Global Tech Pvt. Ltd., a trusted industry leader, offers a complete package of Digital Marketing—all in one place.",
    },
    "/software/Development": {
      image: "/assets/ServiceNew.jpeg",
      title: "SOFTWARE DEVELOPMENT SERVICES",
      description:
        "Start Future-Ready Digital Solutions With Our Software Expertise",
      para: "In today's fast-moving digital world, markets need more than just software, they want scalable, secure, and high-performing software development services that give growth.",
      button: "Book Now <FaArrowRight />",
    },

    "/oracle": {
      image: "/assets/ServicesPage.jpg",
      title: "Oracle SQL Development",
      description: "Enterprise-grade Oracle solutions for your business.",
    },
    "/game": {
      image: "/assets/ServicesPage.jpg",
      title: "Game Development",
      description: "Game development services to bring your ideas to life.",
    },
    "/seo": {
      image: "/assets/ServicesPage.jpg",
      title: "SEO/SEM Services",
      description: "Improve your search visibility and rankings organically.",
    },
    "/mobile-app": {
      image: "/assets/ServicesPage.jpg",
      title: "Mobile App",
      description: "Intuitive mobile app solutions for Android and iOS.",
    },
    "/products/school-erp": {
      image: "/assets/Products.jpg",
      title: "School ERP",
      description: "Comprehensive ERP system designed for schools.",
    },
    "/products/hospital-system": {
      image: "/assets/Products.jpg",
      title: "Hospital-System",
      description: "Advanced management system for healthcare institutions.",
    },
    "/products/hrms": {
      image: "/assets/Products.jpg",
      title: "HRMS",
      description: "Efficient human resource management made simple.",
    },
    "/products/pos": {
      image: "/assets/Products.jpg",
      title: "Point of sale",
      description: "Streamlined POS systems for retail and businesses.",
    },
    "/products/library": {
      image: "/assets/Products.jpg",
      title: "Library",
      description: "Digital library solutions for educational institutions.",
    },
    "/products/educational": {
      image: "/assets/Products.jpg",
      title: "Educational Management",
      description: "Manage educational activities and records efficiently.",
    },
    "/products/collage-erp": {
      image: "/assets/Products.jpg",
      title: "Collage-ERP",
      description: "End-to-end ERP for college administration.",
    },
    "/products/parking": {
      image: "/assets/Products.jpg",
      title: "Parking Management",
      description: "Automated parking solutions for modern infrastructure.",
    },
    "/products/vision-track": {
      image: "/assets/Products.jpg",
      title: "Vision Track",
      description: "Intelligent vehicle tracking with real-time analytics.",
    },
    "/profilelokesh": {
      image: "/assets/TeamPage.jpg",
      title: "Lokesh Kumar",
      description: "Managing Director with a vision for innovation and growth.",
    },
    "/profilevikas": {
      image: "/assets/TeamPage.jpg",
      title: "Vikas Kumar",
      description: "Chief Technology Officer driving technology excellence.",
    },
    "/profileaditi": {
      image: "/assets/TeamPage.jpg",
      title: "Aditi",
      description: "Director with a focus on strategy and leadership.",
    },
    "/saloniprofile": {
      image: "/assets/TeamPage.jpg",
      title: "Saloni Jha",
      description: "HR leader and key contributor at Appz Global Tech.",
    },
    "/profilenarendra": {
      image: "/assets/TeamPage.jpg",
      title: "Narendra Yadav",
      description: "Tech leader and key contributor at Appz Global Tech.",
    },
    "/blogpara": {
      image: "/assets/BlogNav.jpg",
      title: "blogs",
      description: "Insights and updates from our technology experts.",
    },
  };

  const currentContent = routeContent[location.pathname] || routeContent["/"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Prevent horizontal scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowX = "hidden";
    } else {
      document.body.style.overflowX = "";
    }
    return () => {
      document.body.style.overflowX = "";
    };
  }, [isOpen]);

  const menuVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 0.2 } },
  };

  return (
    <nav className="relative">
      <img src={currentContent.image} alt="Hero" className="w-full h-auto" />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <button
        ref={buttonRef}
        className="absolute top-5 left-3 flex items-center gap-2 z-[1000] text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <CgMenuRightAlt size={34} />
        <h2 className="font-bold hidden lg:block text-xl">Menu</h2>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className="absolute top-0 pt-20 right-0 bg-blue-900 text-white w-full flex flex-wrap justify-start px-10 gap-10 p-5 shadow-lg z-50 overflow-hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <ul className="flex flex-col gap-1 font-bold text-[12px] lg:text-xl">
              {[
                ["Home", "/"],
                ["Services", "/services"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Career", "/career"],
                ["Portfolio", "/portfolio"],
                ["Blogs", "/blogs"],
                ["Our Team", "/team"],
                ["Contact Us", "/contact"],
              ].map(([label, path]) => (
                <motion.li
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={path} onClick={() => setIsOpen(false)}>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <ul className="flex flex-col gap-1 font-bold text-[12px] lg:text-xl">
              {[
                ["Our Partner", "/partner"],
                ["Our Infrastructure", "/infrastructure"],
                ["Quality", "/quality"],
                ["Business Engagement Model", "/model"],
                ["Client", "/client"],
                ["Design Methodology", "/design"],
                ["Staff Augmentation", "/staff"],
              ].map(([label, path]) => (
                <motion.li
                  key={label}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link to={path} onClick={() => setIsOpen(false)}>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <button
              className="absolute top-8 right-10 border px-4 py-2 rounded z-50 hover:bg-white hover:text-blue-900 font-bold text-sm sm:text-base flex items-center justify-center"
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
            >
              {/* Show icon only on small screens, text on medium and up */}
              <span className="sm:hidden">
                <FiLogIn size={20} />
              </span>
              <span className="hidden sm:inline">LOGIN</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10">
        <h1 className="text-2xl lg:text-4xl font-bold text-white animate-text mt-3 lg:mt-0">
          {currentContent.title}
        </h1>
        <p className="mt-2 max-w-xl lg:max-w-2xl text-sm lg:text-lg hidden lg:block">
          {currentContent.description}
        </p>
      </div>
    </nav>
  );
};

export default Navbar2;
