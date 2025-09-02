import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import ServicesFinal from "./ServicesFinal";
import WorkingProcess from "./WorkingProcess";
import Footer3 from "../About/Footer3";
import Footer from "../Footer/Footer";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Our Services | Appz Global Tech</title>
        <meta
          name="description"
          content="Discover Appz Global Tech's professional services including software development, mobile apps, cloud solutions, and digital marketing."
        />
        <meta
          name="keywords"
          content="software development, mobile apps, cloud services, digital marketing, Appz Global Tech"
        />
        <meta property="og:title" content="Our Services | Appz Global Tech" />
        <meta
          property="og:description"
          content="Explore Appz Global Tech's wide range of services to help your business grow."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      <Navbar2 />
      <ServicesFinal />
      <WorkingProcess />
      <Footer3 />
      <Footer />
    </>
  );
};

export default Services;
