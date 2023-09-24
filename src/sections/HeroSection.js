import React from 'react'
import styles from '../styles/feature3.module.css'
import CountUp from "react-countup";


function Feature3() {
  return (

              <div className={styles.frameDiv26}>
        <div className={styles.pyxusBuildsUpon150YearsOf}>
        Dfarm builds upon 10 years plus of collective agricultural expertise to create products and services in the agricultural landscape across Africa and beyond.
        </div>
        <div className={styles.frameDiv27}  data-aos="fade-up">
          <div className={styles.frameDiv28}>
            <div className={styles.frameDiv29}>
              <b className={styles.b}>
              <CountUp end={7} duration={5} delay={5} />

              </b>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.yearsOfFarmingExperience}>
            Collective years of farming experience             </div>
          </div>
          <div className={styles.frameDiv28}>
            <div className={styles.frameDiv31}>
              <b className={styles.b}>
              <CountUp end={3} duration={5} delay={5} />

              </b>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.yearsOfFarmingExperience}>
state in operation
            </div>
          </div>
          <div className={styles.frameDiv28}>
            <div className={styles.frameDiv31}>
              <b className={styles.b}>
              <CountUp end={27} duration={5} delay={5} /> <span>+</span>

              </b>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.yearsOfFarmingExperience}>
            Plots of farming area.            </div>
          </div>
        </div>
      </div>

  )
}

export default Feature3
