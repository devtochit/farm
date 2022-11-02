import { useCallback } from "react";
import { useRouter } from "next/router";

const OurCompany = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProductServicesClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onInvestorsTextClick = useCallback(() => {
    router.push("/investors");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onHomeText1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/our-company");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onContactUsText1Click = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[3286px] overflow-hidden text-left text-2xl text-gray-1000 font-sf-pro-display">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[80px] overflow-hidden text-base text-green">
        <div className="absolute top-[18px] left-[120px] w-[131px] h-[44px] overflow-hidden">
          <img
            className="absolute h-[91.41%] w-[34.92%] top-[2.27%] right-[65.08%] bottom-[6.32%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="../vector.svg"
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
        <div className="absolute top-[21px] right-[120px] flex flex-row p-[8px] box-border items-start justify-start gap-[32px] text-gray-1000">
          <div
            className="relative inline-block cursor-pointer"
            onClick={onHomeTextClick}
          >
            Home
          </div>
          <div className="relative font-semibold text-green inline-block">
            Our Company
          </div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={onProductServicesClick}
          >{`Product & Services`}</div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={onInvestorsTextClick}
          >
            Investors
          </div>
          <div
            className="relative inline-block cursor-pointer"
            onClick={onContactUsTextClick}
          >
            Contact Us
          </div>
        </div>
      </div>
      <div className="absolute top-[81px] left-[0px] w-[1440px] h-[453px] overflow-hidden bg-[url(../public/frame-282@3x.png)] bg-cover bg-no-repeat bg-[top] text-4xl text-white">
        <div className="absolute top-[141px] left-[209px] font-medium inline-block">
          About
        </div>
        <div className="absolute top-[233px] left-[329px] font-medium inline-block">
          DFarm Agric
        </div>
      </div>
      <div className="absolute top-[1439px] left-[118px] w-[1202px] h-[473px]">
        <img
          className="absolute top-[0px] left-[574px] rounded-[8px] w-[628px] h-[473px] object-cover"
          alt=""
          src="../rectangle-11@2x.png"
        />
        <div className="absolute top-[36px] left-[2px] flex flex-col items-start justify-start gap-[24px]">
          <div className="relative font-semibold inline-block w-[460px]">
            We are efficient, reliable and we give quality
          </div>
          <div className="flex flex-col items-start justify-start gap-[32px] text-base">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../checked-1.svg"
              />
              <div className="relative font-medium inline-block">
                Good livestock care and feeding
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../checked-11.svg"
              />
              <div className="relative font-medium inline-block">
                Fresh and natural grown plants
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../checked-12.svg"
              />
              <div className="relative font-medium inline-block">
                Well experienced and educated Farmer
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0 overflow-hidden"
                alt=""
                src="../checked-13.svg"
              />
              <div className="relative font-medium inline-block">
                Reliable market supply
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2164px] left-[163px] flex flex-col items-center justify-start gap-[64px] text-3xl font-inter">
        <div className="relative font-semibold inline-block">{`Meet our Executive Board `}</div>
        <div className="flex flex-row items-start justify-start gap-[64px] text-xl">
          <div className="flex flex-col items-center justify-start gap-[27px]">
            <img
              className="relative rounded-[8px] w-[329px] h-[386px] shrink-0 object-cover"
              alt=""
              src="../rectangle-12@2x.png"
            />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative font-semibold inline-block">
                Jide Adekule
              </div>
              <div className="relative text-base text-green inline-block">{`CEO & Owner`}</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[26px]">
            <img
              className="relative rounded-[8px] w-[329px] h-[386px] shrink-0 object-cover"
              alt=""
              src="../rectangle-13@2x.png"
            />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative font-semibold inline-block">
                Jada Harris
              </div>
              <div className="relative text-base text-green inline-block">
                General Manger
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[26px]">
            <img
              className="relative rounded-[8px] w-[329px] h-[386px] shrink-0 object-cover"
              alt=""
              src="../rectangle-14@2x.png"
            />
            <div className="flex flex-col items-center justify-start gap-[8px]">
              <div className="relative font-semibold inline-block">
                Shamika Thompson
              </div>
              <div className="relative text-base text-green inline-block">
                Farmer Facilitor
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2921px] left-[0px] bg-gray-1100 w-[1440px] h-[365px] overflow-hidden text-sm text-white">
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
              onClick={onHomeText1Click}
            >
              Home
            </div>
            <div
              className="relative inline-block cursor-pointer"
              onClick={onAboutUsTextClick}
            >
              About Us
            </div>
            <div
              className="relative inline-block cursor-pointer"
              onClick={onServicesTextClick}
            >
              Services
            </div>
            <div
              className="relative inline-block cursor-pointer"
              onClick={onContactUsText1Click}
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
      <div className="absolute top-[674px] left-[118px] w-[1152px] h-[560px]">
        <img
          className="absolute top-[115px] left-[0px] rounded-[8px] w-[382px] h-[445px] object-cover"
          alt=""
          src="../rectangle-9@2x.png"
        />
        <div className="absolute top-[36px] left-[664px] flex flex-col items-start justify-start gap-[16px]">
          <div className="relative font-semibold inline-block w-[460px]">
            Enjoy our rich and fresh farm product
          </div>
          <div className="relative text-lg leading-[30px] inline-block w-[488px] h-[249px] shrink-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            iaculis consequat et mollis. Consectetur nibh elit euismod aenean
            ullamcorper sit vitae eget quis. Ac, pulvinar pulvinar integer risus
            lobortis integer consectetur nulla sit. Rutrum vitae, sem ipsum
            egestas sollicitudin magna vel nisl. Id fringilla tellus ultrices at
            ultrices orci. Nibh dignissim viverra turpis quis id. Dictumst amet
            eg.
          </div>
        </div>
        <img
          className="absolute top-[0px] left-[218px] rounded-[8px] w-[382px] h-[445px] object-cover"
          alt=""
          src="../rectangle-10@2x.png"
        />
      </div>
    </div>
  );
};

export default OurCompany;
