import React from 'react'

function Footer() {
  return (
    <div className="absolute top-[3000px] left-[calc(50%_-_670px)] bg-gray-1100 w-[1440px] h-[365px] overflow-hidden text-sm text-white">
    <div className="absolute top-[58px] left-[120px] w-[350px] h-[205px] text-lg text-green">
      <div className="absolute top-[0px] left-[2px] w-[131px] h-[44px] overflow-hidden text-base">
        <img
          className="absolute h-[91.41%] w-[34.92%] top-[2.27%] right-[65.08%] bottom-[6.32%] left-[0%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector1.svg"
        />
        <div className="absolute h-[88.64%] w-[48.85%] top-[2.27%] right-[9.92%] bottom-[9.09%] left-[41.22%]">
          <div className="absolute h-[48.72%] w-full top-[0%] left-[0%] font-extrabold inline-block">
            DFARM
          </div>
          <div className="absolute h-[46.15%] w-[67.19%] top-[53.85%] left-[0%] font-extrabold inline-block">
            AGRI
          </div>
        </div>
      </div>
      <div className="absolute top-[60px] left-[3px] font-medium text-gray-100 inline-block w-[347px] h-[57px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
      <div className="absolute top-[141px] left-[0px] flex flex-col items-start justify-start gap-[16px] text-white">
        <div className="flex flex-row items-center justify-start gap-[16px]">
          <img
            className="relative w-[24px] h-[24px] shrink-0"
            alt=""
            src="../vuesaxboldcall.svg"
          />
          <div className="relative font-medium inline-block">
            +23484394034
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img
            className="relative w-[24px] h-[24px] shrink-0"
            alt=""
            src="../vuesaxboldsmsnotification.svg"
          />
          <div className="relative font-medium inline-block">
            JohnDoe@gmail.com
          </div>
        </div>
      </div>
    </div>
    <div className="absolute top-[72px] left-[975px] w-[256px] h-[159px]">
      <div className="absolute top-[0px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
        <b className="relative inline-block">QUICK LINKS</b>
        <div
          className="relative inline-block cursor-pointer"
          // onClick={onHomeText1Click}
        >
          Home
        </div>
        <div
          className="relative inline-block cursor-pointer"
          // onClick={onAboutUsText1Click}
        >
          About Us
        </div>
        <div
          className="relative inline-block cursor-pointer"
          // onClick={onServicesTextClick}
        >
          Services
        </div>
        <div
          className="relative inline-block cursor-pointer"
          // onClick={onContactUsText1Click}
        >
          Contact Us
        </div>
      </div>
      <div className="absolute top-[0px] left-[207px] flex flex-col items-start justify-start gap-[16px]">
        <b className="relative inline-block">LEGAL</b>
        <div className="relative inline-block">Privacy</div>
        <div className="relative inline-block">Terms</div>
      </div>
    </div>
    <div className="absolute top-[314px] left-[585px] font-medium inline-block">
      © 2022 DFarm Agri. All rights Reserved
    </div>
  </div>
  )
}

export default Footer
