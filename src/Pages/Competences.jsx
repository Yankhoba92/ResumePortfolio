import { useState } from "react";
import Nav from "../Components/Navbar";

import Skills from "../Components/Competences/Skills";
import Footer from "../Components/Footer/Footer";
import Hobbies from "../Components/Hobbies/hobbies";

function Competences() {
  return (
    <>
      <Nav />
      <Skills />
      <Hobbies/>
      <Footer/>
      
    </>
  );
}

export default Competences;
