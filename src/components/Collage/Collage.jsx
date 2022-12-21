import React, { useEffect, useRef } from "react";
import "./index.css";
import image1 from "../../assets/palm.png";
import image2 from "../../assets/pigs.png";
import image3 from "../../assets/goat.png";
import image4 from "../../assets/snail.png";
import image5 from "../../assets/fish.png";
import watermellon from '../../assets/watermellon.png'
import { gsap } from "gsap";

function Collage() {
  // const middleRef = useRef(null);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     delay: 0.2,
  //   });
  //   tl.fromTo(
  //     ".hero-element",
  //     { y: 300 },
  //     {
  //       y: 0,
  //       duration: 1,
  //       delay: function (index) {
  //         return 0.2 * index;
  //       },
  //     }
  //   );
  // }, []);

  // useEffect(() => {
  //   function intro() {
  //     const tl = gsap.timeline();

  //     tl.fromTo(middleRef.current, { y: 200 }, { y: 0, duration: 1 });
  //     return tl;
  //   }

  //   function stopTrigger() {
  //     const tl = gsap.timeline({
  //       delay: 1,

  //       scrollTrigger: {
  //         trigger: middleRef.current,
  //         // start: "top top",
  //         // end: "+=1000",
  //         end: "+=900",
  //         pin: true,
  //         scrub: true,
  //       },
  //     });

  //     // tl.to(middleRef.current, { scale: 1 }, "+=0.1");
  //     tl.to(
  //       ".hero-container",
  //       {
  //         backgroundColor: '#DBD5C9',

  //         duration: 0.25,
  //       },
  //       "-=0.5"
  //     );
  //     return tl;
  //   }

  //   const master = gsap.timeline();
  //   master.add(intro());
  //   setTimeout(() => {
  //     master.add(stopTrigger());
  //   }, 1000);
  // }, []);

  return (
    <div className="hero-collage">
      <div className="left-column">
        <div className="hero-element">
          <img
            src={image1}
            alt="Talent Media"
            className="collage-element-left1"
          />
        </div>

        <div className="hero-element">
          <img
            src={image2}
            alt="Talent Media"
            className="collage-element-left2"
          />
        </div>
      </div>

      <div className="left-column">
        <div className="hero-element">
          <img
            src={image3}
            alt="Talent Media"
            className="collage-element-left1"
          />
        </div>

        <div className="hero-element">
          <img
            src={image4}
            alt="Talent Media"
            className="collage-element-left2"
          />
        </div>
      </div>
      {/* <div className="hero-element-middle">
        <img
          src={image1}
          alt="Talent Media"
          className="collage-element-middle"
          // ref={middleRef}
        />
      </div> */}

      <div className="right-column">
        <div className="hero-element">
          <img
            src='https://i.ibb.co/rvdwjTR/photo-1635013973782-d6577fc8cb0c.png'
            alt="Talent Media"
            className="collage-element-right1"
          />
        </div>

        <div className="hero-element">
          <img
            src={watermellon}
            alt="Talent Media"
            className="collage-element-right2"
          />
        </div>
      </div>
      {/* <div className="right-column">
        <div className="hero-element">
          <img
            src={image15}
            alt="Talent Media"
            className="collage-element-right1"
          />
        </div>

        <div className="hero-element">
          <img
            src={image4}
            alt="Talent Media"
            className="collage-element-right2"
          />
        </div> */}
      {/* </div> */}


    </div>
  );
}

export default Collage;
