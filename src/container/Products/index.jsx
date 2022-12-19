import React from "react";
import Banner from "../../components/firstPage/neighbor/index";
import ValueSlides from "../../components/ValueSlides/neighbor";
import Footer from "../../components/Footer/Footer";
import Search from "../../components/Search/Search";


function Neighbourhood() {
  return (
    <div name="home">
      <Banner />
      <Search/>
      <ValueSlides />

      <Footer />
    </div>
  );
}

export default Neighbourhood;
