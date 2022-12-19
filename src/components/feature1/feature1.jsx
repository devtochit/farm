import React from 'react'
import styles from './feature1.module.css'

function Feature1() {
  return (
<>
          <div className={styles.groupDiv1}>

        <div className={styles.groupDiv2}>
<div className={ styles.firstRow}>
<img
            className={styles.rectangleIcon}
            alt=""
            src="../rectangle-1@2x.png"
          />
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="../rectangle-2@2x.png"
          />
    </div>
<div className='secondRow'>
<img
            className={styles.rectangleIcon2}
            alt=""
            src="../rectangle-3@2x.png"
          />
          <img
            className={styles.rectangleIcon3}
            alt=""
            src="../rectangle-4@2x.png"
          />
</div>
        </div>

        <div className={styles.frameDiv7}>
          <div className={styles.enjoyOurRichAndFreshFarm}>
            Enjoy our rich and fresh farm product
          </div>
          <div className={styles.loremIpsumDolorSitAmetCo1}>

          From livestock to nuts, we provide a wide range of products to the agro community starting locally and expanding to the horizons of Africa. Sustainability, quality, reliability and customer satisfaction are our watch
 word at Dfarm Agri as we are committed to being the supplier of choice to the African agro ecosystem.
          </div>
        </div>


      </div>

</>
  )
}

export default Feature1
