import React from "react";
import Banner from "../../components/firstPage/Investment/index";
import Hero from "../../components/whyAgri/index";
import Hero1 from "../../components/investWhy/index";
import Footer from "../../components/Footer/Footer";



function Home() {
  return (
    <div name="home">
      <Banner />
      <Hero />
      {/* <Hero1 /> */}

      <Footer />
    </div>
  );
}

export default Home;
