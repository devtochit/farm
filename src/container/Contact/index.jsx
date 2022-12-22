import React from "react";
import Banner from "../../components/firstPage/Contact/index";
import Hero from "../../components/herosection/team";
import TalentSlides from "../../components/SlideShow/team/TalentSlides";
import Contact from "../../components/GetinTouch/Contact";
import Footer from "../../components/Footer/Footer";



function Home() {
  return (
    <div name=" contact">
      <Banner />
    <Contact />
      <Footer />
    </div>
  );
}

export default Home;
