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

const Home = () => {
  return (
    <>
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
