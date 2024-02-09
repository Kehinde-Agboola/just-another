import React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Home } from "../../pages/Home";
import { About } from "../UI/About";
import { Contact } from "../UI/Contact";
export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};
