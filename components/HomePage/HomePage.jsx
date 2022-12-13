import { useCallback } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  const onOurCompanyTextClick = useCallback(() => {
    router.push("/our-company");
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

  const onFrameContainer6Click = useCallback(() => {
    router.push("/our-company");
  }, [router]);

  const onFrameContainer19Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onFrameContainer21Click = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onHomeText1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsText1Click = useCallback(() => {
    router.push("/our-company");
  }, [router]);

  const onServicesTextClick = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onContactUsText1Click = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <div className=" container   bg-white w-full overflow-hidden text-left text-2xl text-gray-1000 font-sf-pro-display">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[991px] text-base text-green">


        <div className="absolute top-[509px] left-[50px] rounded-[350px_350px_0px_0px] w-[1440px] h-[435px] overflow-hidden">
          <img
            className="  w-[2880px] h-[870px] "
            alt=""
            src="../highanglefarmlandview-1@2x.png"
          />
        </div>

        <div className="absolute top-[204px] left-[481px] flex flex-col items-center justify-start gap-[24px] text-center text-[80px] text-gray-1000 font-inter">
          <b className=" leading-[110.02%] inline-block w-[678px]">
            <span>{`Local, natural, and `}</span>
            <span className="text-green">long-lasting.</span>
          </b>
          <div className="relative text-base font-medium text-gray-700 inline-block w-[596px] h-[73px] shrink-0">{`Welcome to Dfarm Agri, home to Africa’s natural flavor and taste for farm products. We help our customers meet their demands for sustainable and healthy agro products. `}</div>
        </div>
      </div>
      <div className="absolute top-[1079px] left-[120px] w-[1176px] h-[667px]">
        <div className="absolute top-[0px] left-[0px] w-[592px] h-[667px]">
          <img
            className="absolute  top-[95px] left-[0px] rounded-[16px] w-[265px] h-[272px] object-cover"
            alt=""
            src="../rectangle-1@2x.png"
          />
          <img
            className="absolute top-[0px] left-[292px] rounded-[16px] w-[265px] h-[272px] object-cover"
            alt=""
            src="../rectangle-8@2x.png"
          />
          <img
            className="absolute top-[395px] left-[31px] rounded-[16px] w-[265px] h-[272px] object-cover"
            alt=""
            src="../rectangle-51@2x.png"
          />
          <img
            className="absolute top-[308px] left-[327px] rounded-[16px] w-[265px] h-[271px] object-cover"
            alt=""
            src="../rectangle-4@2x.png"
          />
        </div>
        <div className="absolute top-[66px] left-[688px] flex flex-col items-start justify-start gap-[16px]">
          <div className="relative leading-[40px] font-semibold inline-block w-[460px]">
            Enjoy our rich and fresh farm product
          </div>
          <div className="relative text-base leading-[30px] inline-block w-[488px] h-[249px] shrink-0">

From livestock to nuts, we provide a wide range of products to the agro community starting locally and expanding to the horizons of Africa. Sustainability, quality, reliability and customer satisfaction are our watch
 word at Dfarm Agri as we are committed to being the supplier of choice to the African agro ecosystem.
          </div>
        </div>
      </div>
      <div className="absolute top-[1928px] left-[120px] flex flex-row items-center justify-start gap-[128px]">
        <div className="flex flex-col items-start justify-start gap-[16px]">
          <div className="flex flex-col items-start justify-start gap-[24px]">
            <div className="relative leading-[40px] font-semibold inline-block w-[460px]">
              Delivering the best produce in Nigeria
            </div>
            <div className="relative text-base leading-[30px] inline-block w-[488px] h-[249px] shrink-0">

            Customer satisfaction is one of our core values at DA, and we are sufficiently invested
             in making sure that we meet up to expected standards and even beyond the average market benchmark.             </div>
          </div>
          <div
            className="flex flex-row items-center justify-center gap-[16px] cursor-pointer text-base text-green font-inter"
            onClick={onFrameContainer6Click}
          >
            <div className="relative font-medium inline-block">About us</div>
            <img
              className="relative w-[32px] h-[32px] shrink-0"
              alt=""
              src="../vuesaxlineararrowcircleright.svg"
            />
          </div>
        </div>
        <img
          className="relative rounded-[16px] w-[584px] h-[473px] shrink-0 object-cover"
          alt=""
          src="../rectangle-5@2x.png"
        />
      </div>



      <div className="absolute top-[3300px] left-[123px] w-[1194px] h-[959px] text-3xl">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[56px]">
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <div className="relative font-semibold inline-block">
            Trust us to deliver on our promises

</div>
            <div className="relative text-sm leading-[30px] text-center inline-block w-[701px] h-[85px] shrink-0">
            From large scale distributors to small scale SMEs, we are there for you. Our goal is to bridge
            the gap between supply and the ever increasing demand of our customers across the agro landscape.
            </div>
          </div>
          <div className="relative w-[1194px] h-[618px] shrink-0 text-center text-xl text-white">
            <img
              className="absolute top-[0px] left-[0px] rounded-[16px] w-[382px] h-[280px] object-cover"
              alt=""
              src="../rectangle-31@2x.png"
            />
            <img
              className="absolute top-[338px] left-[0px] rounded-[16px] w-[382px] h-[280px] object-cover"
              alt=""
              src="../rectangle-6@2x.png"
            />
            <img
              className="absolute top-[0px] left-[406px] rounded-[16px] w-[382px] h-[280px] object-cover"
              alt=""
              src="../rectangle-41@2x.png"
            />
            <img
              className="absolute top-[338px] left-[406px] rounded-[16px] w-[382px] h-[280px] object-cover"
              alt=""
              src="../rectangle-7@2x.png"
            />
            <img
              className="absolute top-[0px] left-[812px] rounded-[16px] w-[382px] h-[280px] object-cover"
              alt=""
              src="../rectangle-51@2x.png"
            />
            <img
              className="absolute top-[338px] left-[812px] rounded-[16px] w-[382px] h-[280px] object-cover"
              alt=""
              src="../rectangle-8@2x.png"
            />
            <b className="absolute top-[214px] left-[24px] leading-[30px] inline-block">
              Poultry Animals
            </b>
            <b className="absolute top-[558px] left-[24px] leading-[30px] inline-block text-left">
              Fresh Vegetables
            </b>
            <b className="absolute top-[552px] left-[430px] leading-[30px] inline-block text-left">
              Millets
            </b>
            <b className="absolute top-[214px] left-[430px] leading-[30px] inline-block">
              Cows
            </b>
            <b className="absolute top-[214px] left-[836px] leading-[30px] inline-block">
              Pigs
            </b>
            <b className="absolute top-[214px] left-[836px] leading-[30px] inline-block">
              Pigs
            </b>
            <b className="absolute top-[555px] left-[836px] leading-[30px] inline-block">
              Oil Milling
            </b>
          </div>
        </div>
        <div
          className="absolute top-[903px] left-[501px] rounded-[8px] bg-green flex flex-row p-[13px_55px] box-border items-start justify-start cursor-pointer text-center text-base text-white"
          onClick={onFrameContainer19Click}
        >
          <b className="relative leading-[30px] inline-block">View more</b>
        </div>
      </div>
      <div className="absolute top-[4647px] left-[120px] rounded-[8px] bg-green w-[1200px] h-[406px] overflow-hidden text-center text-[42px] text-gray-100">
        <img
          className="absolute top-[0px] left-[494.33px] w-[705.67px] h-[406px]"
          alt=""
          src="../group-15.svg"
        />
        <div className="absolute top-[161px] left-[206px] flex flex-col items-center justify-start gap-[16px]">
          <b className="relative inline-block w-[788px] h-[114px] shrink-0">
            Buy from DFarm Agri today and enjoy the best of nature’s gift
          </b>
          <div
            className="rounded-[8px] bg-gray-100 flex flex-row p-[13px_55px] box-border items-start justify-start cursor-pointer text-base text-green"
            onClick={onFrameContainer21Click}
          >
            <b className="relative leading-[30px] inline-block">
              Contact us today
            </b>
          </div>
        </div>
      </div>
      <div className="absolute top-[2573px] left-[252px] flex flex-col items-center justify-start gap-[72px] text-center text-xl font-inter">
        <div className="relative font-medium inline-block w-[646px]">
        Dfarm builds upon 10 years plus of collective agricultural expertise to create products and services in the agricultural landscape across Africa and beyond.
        </div>
        <div className="flex flex-row items-start justify-start gap-[196px] text-5xl text-green font-sf-pro-display">
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <b className="relative inline-block">7</b>
              <div className="relative border-t-[2px_solid_#04b256] box-border w-[114px] h-[2px] shrink-0" />
            </div>
            <div className="relative text-lg text-gray-900 text-left inline-block w-[181px]">
            Collective years of farming experience            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <b className="relative inline-block">3</b>
              <div className="relative border-t-[2px_solid_#04b256] box-border w-[114px] h-[2px] shrink-0" />
            </div>
            <div className="relative text-lg text-gray-900 text-left inline-block w-[181px]">
              States in operation
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <b className="relative inline-block">27+</b>
              <div className="relative border-t-[2px_solid_#04b256] box-border w-[114px] h-[2px] shrink-0" />
            </div>
            <div className="relative text-lg text-gray-900 text-left inline-block w-[181px]">
            Plots of farming area.
            </div>
          </div>
        </div>
      </div>


      <div className="absolute top-[5400px]  bg-gray-1100 w-[1500px]  h-[365px] overflow-hidden text-sm">
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
      </div>
            <div className="absolute top-[141px] left-[0px] flex flex-col items-start justify-start gap-[16px] text-white">
              <div className="flex flex-row items-center justify-start gap-[16px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../vuesaxboldcall1.svg"
                />
                <div className="relative font-medium inline-block">
                  +234 908 022 4402
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[16px]">
                <img
                  className="relative w-[24px] h-[24px] shrink-0"
                  alt=""
                  src="../vuesaxboldsmsnotification.svg"
                />
                <div className="relative font-medium inline-block">
               Dfarmagri@gmail.com                </div>
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
                // onClick={onAboutUsTextClick}
              >
                About Us
              </div>
              <div
                className="relative inline-block cursor-pointer"
                // onClick={onServicesText1Click}
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
      </div>


  );
};

export default Home;
