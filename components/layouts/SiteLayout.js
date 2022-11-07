import NavBar from '../NavBar'
import Footer from '../Footer'
import React from 'react'


const SiteLayout = ({children}) =>{
return (
  <>
 <section>
  <NavBar/>
  <main className="">

    {children}

  </main>
 </section>
  {/* <Footer/> */}
  </>
)
}
export default SiteLayout
