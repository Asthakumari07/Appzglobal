import React from "react";
import Navbar from "../Navbar/Navbar";
import Navbar2 from "../Navbar/Navbar2";
import ContactForm from "./Feedback.tsx";
import MapContact from "./MapContact.jsx";
import Footer from "../Footer/Footer.jsx";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <ContactForm />
      <MapContact />
      <Footer />
    </>
  );
};

export default Contact;
