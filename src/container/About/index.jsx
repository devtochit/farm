import React from "react";
import Banner from "../../components/firstPage/amenities/index";
import Hero1 from "../../components/aboutDfarm/DfarmAbout";
import SlideShow  from "../../components/SlideShow/amentie/TalentSlides";
import  ValueSlide  from "../../components/ValueSlides/about/index";

import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div name="">
      <Banner />
      <Hero1 />
      <SlideShow/>
      <ValueSlide/>
      <Footer />
    </div>
  );
}

export default Home;
