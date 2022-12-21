import React from 'react'
import styles from './index.css'


function hero() {
  return (
    <div>
              <div className='heroSection'>
        <div className='frameDiv2'>
          <b className='localNaturalAndLongLasti'>
            <span>{`Local, natural, and `}</span>
            <span className='longLasting'>long-lasting.</span>
          </b>
          <div
            className='loremIpsumDolorSitAmetCo'
          >
            <p className=' feature-slide-description'> Welcome to Dfarm Agri, home to Africa’s natural flavor and taste for farm products. We help our customers meet their demands for sustainable and healthy agro products.</p> </div>
        </div>
         <div className='frameDiv1'>
          <img
            className='highAngleFarmlandView1Icon'
            alt=""
            src="https://i.ibb.co/pyKY1nD/highanglefarmlandview-1-2x.png"
          />
        </div>

      </div>
    </div>
  )
}

export default hero
