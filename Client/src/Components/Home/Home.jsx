import React from "react";
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

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Digital Transformation Company: AI & ML Solutions</title>
        <meta
          name="description"
          content="Discover top-notch digital transformation solutions. Our company leverages AI, ML, App and eCommerce strategies to elevate your business today!"
        />
        <meta name="robots" content="INDEX, FOLLOW" />
        <link rel="canonical" href="https://appzglobaltech.com/" />
        <meta name="author" content="AGT" />
        <meta
          name="keywords"
          content="Digital transformation services, digital transformation consulting services, mobile app, digital marketing, IoT, Cloud, DevOps, AI, ML, Digital transformation company in Noida, India, USA"
        />
        <html lang="en-US" />
      </Helmet>
      <Navbar />
      <Navbar2 />
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

      <Footer />
    </>
  );
};

export default Home;
