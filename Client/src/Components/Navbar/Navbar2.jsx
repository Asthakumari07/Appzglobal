import React, { useState, useRef, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Importing route-based images
// import heroImage from "../../assets/hero section.gif";
import serviceImage from "../../assets/ServicesPage.png";
import aboutImage from "../../assets/About22.jpeg";
import productsImage from "../../assets/Products.png";
import careerImage from "../../assets/CareerPage.png";
import portfolioImage from "../../assets/Portfolio1.png";
import blogsImage from "../../assets/BlogNav.png";
import teamImage from "../../assets/TeamPage.png";
import contactImage from "../../assets/ContactImage.png";
import partnerImage from "../../assets/Partner.png";
import infraImage from "../../assets/infrastructure.png";
import qualityImage from "../../assets/Quality.png";
import modelImage from "../../assets/ModelPage.png";
import clientImage from "../../assets/Client.png";
import designImage from "../../assets/Quality.png";
import staffImage from "../../assets/Staff.png";

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
      title: "Our Future is here",
      description:
        "Stay ahead with AI-powered smart solutions that drive innovation, enhance efficiency, and accelerate business growth-empowering you to thrive in a future-ready digital-world",
    },
    "/services": {
      image: serviceImage,
      title: "Explore Our Services",
      description: "We offer cutting-edge development and marketing...",
    },
    "/about": {
      image: aboutImage,
      title: "About Appz Global",
      description: "Discover our journey and mission...",
    },
    "/products": {
      image: productsImage,
      title: "Our Products",
      description: "Explore our innovative products...",
    },
    "/career": {
      image: careerImage,
      title: "Join Our Team",
      description: "Be part of a growing tech company...",
    },
    "/portfolio": {
      image: portfolioImage,
      title: "Our Portfolio",
      description: "Check out our work and success stories...",
    },
    "/blogs": {
      image: blogsImage,
      title: "Latest Insights",
      description: "Read our blog for the latest trends and updates...",
    },
    "/team": {
      image: teamImage,
      title: "Meet Our Team",
      description: "The minds behind Appz Global Tech...",
    },
    "/contact": {
      image: contactImage,
      title: "Get In Touch",
      description: "We’d love to hear from you...",
    },
    "/partner": {
      image: partnerImage,
      title: "Our Partners",
      description: "We collaborate with global leaders...",
    },
    "/infrastructure": {
      image: infraImage,
      title: "Our Infrastructure",
      description: "Built on robust tech and scalable systems...",
    },
    "/quality": {
      image: qualityImage,
      title: "Quality Standards",
      description: "Committed to delivering excellence...",
    },
    "/model": {
      image: modelImage,
      title: "Business Model",
      description: "Flexible engagement models tailored for you...",
    },
    "/Client": {
      image: clientImage,
      title: "Our Clients",
      description: "Trusted by businesses around the world...",
    },
    "/design": {
      image: designImage,
      title: "Design Methodology",
      description: "Our approach to user-centric design...",
    },
    "/staff": {
      image: staffImage,
      title: "Staff Augmentation",
    },
    "/term": {
      image: designImage,
      title: "Term & Condition",
    },
    "/privacy": {
      image: designImage,
      title: "Privacy Policy",
    },
    "/analytical": {
      image: serviceImage,
      title: "Analytical",
    },
    "/erpservice": {
      image: serviceImage,
      title: "ERP Services",
    },
    "/uiux": {
      image: serviceImage,
      title: "UI/UX",
    },
    "/crm": {
      image: serviceImage,
      title: "CRM",
    },
    "/testing": {
      image: serviceImage,
      title: "Testing",
    },
    "/database": {
      image: serviceImage,
      title: "Database",
    },
    "/development": {
      image: serviceImage,
      title: "Development",
    },
    "/cloud": {
      image: serviceImage,
      title: "Cloud",
    },
    "/Software-dev": {
      image: serviceImage,
      title: "Software Development",
    },
    "/digital-marketing": {
      image: serviceImage,
      title: "Digital Marketing",
    },
    "/oracle": {
      image: serviceImage,
      title: "Oracle",
    },
    "/game": {
      image: serviceImage,
      title: "Game",
    },
    "/seo": {
      image: serviceImage,
      title: "SEO",
    },
    "/mobile-app": {
      image: serviceImage,
      title: "Mobile App",
    },
    "/products/hospital-system": {
      image: productsImage,
      title: "Hospital-System",
    },
    "/products/hrms": {
      image: productsImage,
      title: "HRMS",
    },
    "/products/pos": {
      image: productsImage,
      title: "Point of sale",
    },
    "/products/library": {
      image: productsImage,
      title: "Library",
    },
    "/products/educational": {
      image: productsImage,
      title: "Educational Management",
    },
    "/products/collage-erp": {
      image: productsImage,
      title: "Collage-ERP",
    },
    "/products/parking": {
      image: productsImage,
      title: "Parking Management",
    },
    "/products/vision-track": {
      image: productsImage,
      title: "Vision Track",
    },
    "/profilelokesh": {
      image: teamImage,
      title: "Lokesh Kumar",
    },
    "/profilevikas": {
      image: teamImage,
      title: "Vikas Kumar",
    },
    "/profileaditi": {
      image: teamImage,
      title: "Aditi",
    },
    "/saloniprofile": {
      image: teamImage,
      title: "Saloni Jha",
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
        <h1 className="font-bold hidden lg:block">Menu</h1>
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
                ["Client", "/Client"],
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
              className="absolute top-8 right-10 border px-4 py-2 rounded z-50 hover:bg-white hover:text-blue-900 font-bold"
              onClick={() => {
                setIsOpen(false);
                navigate("/login");
              }}
            >
              LOGIN
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
