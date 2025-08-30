import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Products from "./Components/Products/Products";
import Career from "./Components/Career/Career";
import Portfolio from "./Components/Portfolio/Portfolio";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import OurTeam from "./Components/OurTeam/OurTeam";
import Partner from "./Components/Partner/Partner";
import Infrastructure from "./Components/Infrastructure/Infrastructure";
import Quality from "./Components/Quality/Quality";
import Model from "./Components/Model/Model";
import Client from "./Components/Client/Client";

// our team

import ProfileLokesh from "./Components/OurTeam/ProfileLokesh";
import ProfileVikas from "./Components/OurTeam/ProfileVikas";
import SaloniProfile from "./Components/OurTeam/SaloniProfile";
import AditiProfile from "./Components/OurTeam/AditiProfile";
import ProfileNarendra from "./Components/OurTeam/Naredra";
import Design from "./Components/Design/Design";
import Staff from "./Components/Staff/Staff";

// services
import Analytical from "./Pages/Analytical";
import ERPServices from "./Pages/ERPServices";
import UIUX from "./Pages/UIUX";
import CRM from "./Pages/CRM";
import Testing from "./Pages/Testing";
import Database from "./Pages/Database";
import Development from "./Pages/Development";
import Cloud from "./Pages/Cloud";
import Software from "./Pages/Software";
import Digital from "./Pages/DigitalMarketing";
import Oracle from "./Pages/Oracle";
import SEO from "./Pages/SEO";
import MobileApp from "./Pages/AppDevelopment";
import Game from "./Pages/Game";
import SoftwareNewPage from "./Pages/NewPage";

import SchoolERP from "./Pages/SchoolERP";
import HospitalSystem from "./Pages/HospitalSystem";
import HRMS from "./Pages/HRMS";
import POS from "./Pages/POS";
import Library from "./Pages/Library";
import Educational from "./Pages/Educational";
import CollegeERP from "./Pages/CollegeERP";
import Parking from "./Pages/Parking";
import VisionTrack from "./Pages/VisionTrack";

import Application from "./Components/Career/Aplication";
import BlogPara from "./Components/Blogs/BlogArea";
import Privacy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Term from "./Components/TermCondition/Term";

import Login from "./Components/Form";
import Login2 from "./Components/Form2";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/career" element={<Career />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<OurTeam />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/model" element={<Model />} />
          <Route path="/client" element={<Client />} />
          <Route path="/design" element={<Design />} />
          <Route path="/staff" element={<Staff />} />
          {/* our team */}
          <Route path="/profilelokesh" element={<ProfileLokesh />} />
          <Route path="/profilevikas" element={<ProfileVikas />} />
          <Route path="/saloniprofile" element={<SaloniProfile />} />
          <Route path="/profileaditi" element={<AditiProfile />} />
          <Route path="/profilenarendra" element={<ProfileNarendra />} />
          // Services
          <Route path="/analytical" element={<Analytical />} />
          <Route path="/erpservice" element={<ERPServices />} />
          <Route path="/uiux" element={<UIUX />} />
          <Route path="/crm" element={<CRM />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/database" element={<Database />} />
          <Route path="/development" element={<Development />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/Software-dev" element={<Software />} />
          <Route path="/digital-marketing" element={<Digital />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/mobile-app" element={<MobileApp />} />
          <Route path="/game" element={<Game />} />
          // Product
          <Route path="/products/school-erp" element={<SchoolERP />} />
          <Route
            path="/products/hospital-system"
            element={<HospitalSystem />}
          />
          <Route path="/products/hrms" element={<HRMS />} />
          <Route path="/products/pos" element={<POS />} />
          <Route path="/products/library" element={<Library />} />
          <Route path="/products/educational" element={<Educational />} />
          <Route path="/products/college-erp" element={<CollegeERP />} />
          <Route path="/products/parking" element={<Parking />} />
          <Route path="/products/vision-track" element={<VisionTrack />} />
          <Route path="/application" element={<Application />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/blogpara" element={<BlogPara />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/term" element={<Term />} />
          <Route path="/software/new" element={<SoftwareNewPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
