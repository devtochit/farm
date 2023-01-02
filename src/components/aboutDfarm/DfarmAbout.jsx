import React from "react";
import Button from "../Button/Button";
import "./index.css";

function DfarmAbout() {
  return (
    <>
      <div className="banner__wrapper">
        <div className="banner__heading">
          <h1 className=''>
                    Dfarm Agri is an agricultural organization registered<br/>
  as a limited liability company (LLC) under the regulation of the CAC in<br/>
  Nigeria. We pride ourselves as farmers who are passionate about producing<br/>
  and manufacturing high quality and sustainable farm products.<br/>
  High quality because we adopt the industry best practices in<br/>
   our production process and benchmark against top tier global<br/>
   organizations. Sustainable because our business model is structured to<br/>
    reflect our concern on the environment thereby adopting practices such<br/>
    as clean power production, CSR programs, Empowerment, ETC….
          </h1>
        </div>

        <div className="banner__buttons hide-on-mobile">
          <div className="banner__btn-first">
            <Button title="Learn More" />
          </div>

          <div className="button__description">
            <p>Delivering the best produce in Nigeria.</p>
          </div>

          <div className="banner__btn-second">
            <Button title="what we do" />
          </div>
        </div>

        {/* display on mobile*/}
        <div className="banner__buttons-mobile  hide-on-desktop">
          <div className="two-buttons-wrap">
            <div className="banner__btn-first-mobile">
              <Button title="Learn More" />
            </div>

            <div className="banner__btn-second-mobile">
              <Button title="what we do" />
            </div>
          </div>

          <div className="button__description-mobile">
            <p>Delivering the best produce in Nigeria</p>
          </div>
        </div>

        <div className='valuePages'>
           <div>
             <h1>Purpose & Vision </h1>
             <p> we aim to achive the challenges involved in meetingthe need for a growing population, while achieving postive  impact for faming communities, our planet and our stakeholders</p>
             </div>
             <div>
             <h1>Our Values </h1>
             <p> Our values are at the heart of our business they're the tangiable expression of our culture and the foundation of our shared philosophy</p>
             </div>
          </div>
      </div>
    </>
  );
}

export default DfarmAbout;
