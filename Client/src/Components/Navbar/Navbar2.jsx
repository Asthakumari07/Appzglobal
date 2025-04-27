import React, { useState, useRef, useEffect } from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
      image: "/assets/ServicesPage.png",
      title: "Explore Our Services",
      description: "We offer cutting-edge development and marketing...",
    },
    "/about": {
      image: "/assets/About22.jpeg",
      title: "About Appz Global",
      description: "Discover our journey and mission...",
    },
    "/products": {
      image: "/assets/Products.png",
      title: "Our Products",
      description: "Explore our innovative products...",
    },
    "/career": {
      image: "/assets/CareerPage.png",
      title: "Join Our Team",
      description: "Be part of a growing tech company...",
    },
    "/portfolio": {
      image: "/assets/Portfolio1.png",
      title: "Our Portfolio",
      description: "Check out our work and success stories...",
    },
    "/blogs": {
      image: "/assets/BlogNav.png",
      title: "Latest Insights",
      description: "Read our blog for the latest trends and updates...",
    },
    "/team": {
      image: "/assets/TeamPage.png",
      title: "Meet Our Team",
      description: "The minds behind Appz Global Tech...",
    },
    "/contact": {
      image: "/assets/ContactImage.png",
      title: "Get In Touch",
      description: "We’d love to hear from you...",
    },
    "/partner": {
      image: "/assets/Partner.png",
      title: "Our Partners",
      description: "We collaborate with global leaders...",
    },
    "/infrastructure": {
      image: "/assets/infrastructure.png",
      title: "Our Infrastructure",
      description: "Built on robust tech and scalable systems...",
    },
    "/quality": {
      image: "/assets/Quality.png",
      title: "Quality Standards",
      description: "Committed to delivering excellence...",
    },
    "/model": {
      image: "/assets/Quality.png",
      title: "Business Model",
      description: "Flexible engagement models tailored for you...",
    },
    "/client": {
      image: "/assets/Client.png",
      title: "Our Clients",
      description: "Trusted by businesses around the world...",
    },
    "/design": {
      image: "/assets/Quality.png",
      title: "Design Methodology",
      description: "Our approach to user-centric design...",
    },
    "/staff": {
      image: "/assets/Staff.png",
      title: "Staff Augmentation",
    },
    "/term": {
      image: "/assets/Quality.png",
      title: "Term & Condition",
    },
    "/privacy": {
      image: "/assets/Quality.png",
      title: "Privacy Policy",
    },
    "/analytical": {
      image: "/assets/ServicesPage.png",
      title: "Analytical",
    },
    "/erpservice": {
      image: "/assets/ServicesPage.png",
      title: "ERP Services",
    },
    "/uiux": {
      image: "/assets/ServicesPage.png",
      title: "UI/UX",
    },
    "/crm": {
      image: "/assets/ServicesPage.png",
      title: "CRM",
    },
    "/testing": {
      image: "/assets/ServicesPage.png",
      title: "Testing",
    },
    "/database": {
      image: "/assets/ServicesPage.png",
      title: "Database",
    },
    "/development": {
      image: "/assets/ServicesPage.png",
      title: "Development",
    },
    "/cloud": {
      image: "/assets/ServicesPage.png",
      title: "Cloud",
    },
    "/Software-dev": {
      image: "/assets/ServicesPage.png",
      title: "Software Development",
    },
    "/digital-marketing": {
      image: "/assets/ServicesPage.png",
      title: "Digital Marketing",
    },
    "/oracle": {
      image: "/assets/ServicesPage.png",
      title: "Oracle",
    },
    "/game": {
      image: "/assets/ServicesPage.png",
      title: "Game",
    },
    "/seo": {
      image: "/assets/ServicesPage.png",
      title: "SEO",
    },
    "/mobile-app": {
      image: "/assets/ServicesPage.png",
      title: "Mobile App",
    },
    "/products/hospital-system": {
      image: "/assets/ServicesPage.png",
      title: "Hospital-System",
    },
    "/products/hrms": {
      image: "/assets/Products.png",
      title: "HRMS",
    },
    "/products/pos": {
      image: "/assets/Products.png",
      title: "Point of sale",
    },
    "/products/library": {
      image: "/assets/Products.png",
      title: "Library",
    },
    "/products/educational": {
      image: "/assets/Products.png",
      title: "Educational Management",
    },
    "/products/collage-erp": {
      image: "/assets/Products.png",
      title: "Collage-ERP",
    },
    "/products/parking": {
      image: "/assets/Products.png",
      title: "Parking Management",
    },
    "/products/vision-track": {
      image: "/assets/Products.png",
      title: "Vision Track",
    },
    "/profilelokesh": {
      image: "/assets/TeamPage.png",
      title: "Lokesh Kumar",
    },
    "/profilevikas": {
      image: "/assets/TeamPage.png",
      title: "Vikas Kumar",
    },
    "/profileaditi": {
      image: "/assets/TeamPage.png",
      title: "Aditi",
    },
    "/saloniprofile": {
      image: "/assets/TeamPage.png",
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
