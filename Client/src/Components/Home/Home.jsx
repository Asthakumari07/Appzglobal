import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import Home2 from "./Home2";
import Home1 from "./Home1";
import HomeCounter from "./HomeCounter";
import HomeService from "./HomeService";
import HomeSlider from "./HomeSlider";
import HomeEmployee from "./HomeEmployee";
import HomeStages from "./HomeStages";
import HomePortfolio from "./HomePortfolio";
import HomeBlog from "./HomeBlog";
import HomeTestimonial from "./HomeTestimonial";
import ContactForm from "./ContactForm";
import CustomWhatsAppButton from "../CustomWhatsAppButton";
import { Helmet } from "react-helmet-async";
import Navbar3 from "../Navbar/Navbar3";
import HeroSection from "./HeroSection";
import ContactFormPopup from "./contactFormPopup";

const Home = () => {
  // ✅ Ye state zaroor declare honi chahiye
  // const [showPopup, setShowPopup] = useState(false);

  // ✅ Page load hone pe popup dikhana
  // useEffect(() => {
  //   setShowPopup(true);
  // }, []);
  return (
    <>
      <Helmet>
        <title>
          Digital Transformation Company: AI & ML Solutions | Appz Global Tech
        </title>
        <meta
          name="description"
          content="Discover top-notch digital transformation solutions. Our company leverages AI, ML, App and eCommerce strategies to elevate your business today!"
        />
        <meta
          name="keywords"
          content="Digital transformation services, digital transformation consulting services, mobile app, digital marketing, IoT, Cloud, DevOps, AI, ML, Digital transformation company in Noida, India, USA"
        />
        <meta name="author" content="AGT" />
        <link rel="canonical" href="https://appzglobaltech.com/" />
        <meta property="og:url" content="https://appzglobaltech.com/" />
        <meta
          property="og:title"
          content="Digital Transformation Company: AI & ML Solutions | Appz Global Tech"
        />
        <meta
          property="og:description"
          content="Elevate your business with Appz Global Tech’s AI, ML, App and eCommerce powered digital transformation services."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <Navbar />
      <Navbar2 />
      {/* <Navbar3 /> */}
      {/* <HeroSection /> */}
      <Home1 />
      <HomeSlider />
      <HomeCounter />
      <HomeService />
      <Home2 />
      <HomeEmployee />
      <HomeStages />
      <HomePortfolio />
      <HomeBlog />
      <HomeTestimonial />
      <ContactForm />
      <CustomWhatsAppButton />
      {/* 🔹 Popup form show/hide */}
{/*       {showPopup && <ContactFormPopup onClose={() => setShowPopup(false)} />} */}

      <CustomWhatsAppButton />

      <Footer />
    </>
  );
};

export default Home;
