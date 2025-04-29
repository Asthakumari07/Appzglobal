import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import DesignSlide1 from "./DesignSlide1";
import DesignPara from "./DesignPara";
import DesignThinking from "./DesignThinking";
import Technologies from "./Technologies";
import Technologies3 from "./Technologies3";
import Technologies2 from "./Technologies2";
import Footer from "../Footer/Footer";
import Footer3 from "../About/Footer3";

const Design = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <DesignSlide1 />
      <DesignPara />
      <DesignThinking />
      <Technologies />
      <Technologies2 />
      {/* <Technologies3 /> */}
      <Footer3 />
      <Footer />
    </>
  );
};

export default Design;
