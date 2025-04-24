import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Portfolio1 from "./Portfolio1";
import BlogPortfolio from "./BlogPortfolio";

import Footer3 from "../About/Footer3";
import Slider from "react-slick/lib/slider";
import HomeSlider from "../Home/HomeSlider";
import Footer from "../Footer/Footer";

const Portfolio = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Portfolio1 />
      <BlogPortfolio />
      <HomeSlider />
      <Footer3 />
      <Footer />
    </>
  );
};

export default Portfolio;
