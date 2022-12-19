import React from 'react'
// import {swiper} from "./swiperData"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './index.css'
import image1 from "../../assets/floor/555and309/bryanston-9-floorplans-1-mobile-314998 (1).png";


function Swiper() {
  return (
<div>


  <AwesomeSlider>
  <div>
  <div
  className="slideshow__item"
  style={{ backgroundImage: `url('${image1}')` }}>
  {/* <p className="slideshow__item-label">{item.name}</p> */}
</div>
<div>
  <p> hello hello  </p>
</div>
    </div>







  </AwesomeSlider>

</div>
  )
}

export default Swiper
