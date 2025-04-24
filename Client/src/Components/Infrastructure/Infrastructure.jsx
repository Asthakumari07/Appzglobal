import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Footer from "../Footer/Footer";
import ParaInfrastructure from "./ParaInfrastructure";
import CardInfrastructure from "./CardInfrastructure";
import Footer3 from "../About/Footer3";

const Infrastructure = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <ParaInfrastructure />
      <CardInfrastructure />
      <Footer3 />
      <Footer />
    </>
  );
};

export default Infrastructure;
