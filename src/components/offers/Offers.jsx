import React from 'react'
import styles from './offer.module.css'
function Offers() {


  return (
<>
<div className={styles.frameDiv0}>

        <div className={styles.frameDiv21}>

           <div className={styles.frameDiv22}>
            <div className={styles.whatOurClientsSay}>
            Trust us to deliver on our promises
            </div>
            <div className={styles.loremIpsumDolorSitAmetCo3}>
            From large scale distributors to small scale SMEs, we are there for you. Our goal is to bridge
            the gap between supply and the ever increasing demand of our customers across the agro landscape.
            </div>
          </div>


          <div className={styles.groupDiv6}>
            <img
              className={styles.rectangleIcon5}
              alt=""
              src="../rectangle-31@2x.png"
            />
            <img
              className={styles.rectangleIcon6}
              alt=""
              src="../rectangle-6@2x.png"
            />
            <img
              className={styles.rectangleIcon7}
              alt=""
              src="../rectangle-41@2x.png"
            />
            <img
              className={styles.rectangleIcon8}
              alt=""
              src="../rectangle-7@2x.png"
            />
            <img
              className={styles.rectangleIcon9}
              alt=""
              src="../rectangle-52@2x.png"
            />
            <img
              className={styles.rectangleIcon10}
              alt=""
              src="../rectangle-8@2x.png"
            />
            <b className={styles.poultryAnimals}>Poultry Animals</b>
            <b className={styles.freshVegetables}>Fresh Vegetables</b>
            <b className={styles.millets}>Millets</b>
            <b className={styles.cows}>Cows</b>
            <b className={styles.pigs}>Pigs</b>
            <b className={styles.pigs}>Pigs</b>
            <b className={styles.oilMilling}>Oil Milling</b>
          </div>
        </div>
        <button
          className={styles.frameButton}
        //   onClick={onFrameButtonClick}
          data-animate-on-scroll
        >
          <b className={styles.viewMore}>View more</b>
        </button>
      </div>
</>
  )
}

export default Offers
