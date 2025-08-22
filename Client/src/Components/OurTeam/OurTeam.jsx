import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import Footer3 from "../About/Footer3";
import OurTeamBody from "./OurTeamBody";
import AssociateTeam from "./AssociatedTeam";
import Operation from "./Operation";
import Development from "./Development";
import DesigningTeam from "./DesigningTeam";
import MarketingTeam from "./MarketingTeam";
import Footer from "../Footer/Footer";
import OurTeamNew from "./OurTeamNew";

const OurTeam = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      {/* <OurTeamNew /> */}
      {/* <OurTeamBody /> */}
      <AssociateTeam />
      {/* <Operation /> */}
      {/* <Development /> */}
      {/* <DesigningTeam /> */}
      {/* <MarketingTeam /> */}
      <Footer3 />
      <Footer />
    </>
  );
};

export default OurTeam;
