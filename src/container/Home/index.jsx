import React from "react";
import Banner from "../../components/firstPage/home/home";
import Hero from "../../sections/HeroSection";
import Hero3 from "../../components/feature4/Feature4";
import Hero2  from "../../components/Collage/Collage";


import ValueSlides from "../../components/ValueSlides/index";
import TalentSlides from "../../components/SlideShow/TalentSlides";
// import Contact from "../../components/GetinTouch/Contact";
import Footer from "../../components/Footer/Footer";
import { GlobalStyle } from "../../styles/GlobalStyle";



function Home() {
  return (
    <div name="home">
      <Banner />
      <ValueSlides />
      <Hero />
      <Hero2 />
      <Hero3 />


      {/* <TalentSlides /> */}
      {/* <CameraSection/> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Home;
