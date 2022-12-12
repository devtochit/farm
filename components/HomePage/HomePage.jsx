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
    <div className=" container   bg-white w-full h-[5919px] overflow-hidden text-left text-2xl text-gray-1000 font-sf-pro-display">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[991px] text-base text-green">


        <div className="absolute top-[509px] left-[50px] rounded-[350px_350px_0px_0px] w-[1440px] h-[435px] overflow-hidden">
          <img
            className="  w-[2880px] h-[870px] "
            alt=""
            src="../highanglefarmlandview-1@2x.png"
          />
        </div>

        <div className="absolute top-[204px] left-[381px] flex flex-col items-center justify-start gap-[24px] text-center text-[80px] text-gray-1000 font-inter">
          <b className="relative leading-[110.02%] inline-block w-[678px]">
            <span>{`Local, natural, and `}</span>
            <span className="text-green">long-lasting.</span>
          </b>
          <div className="relative text-base font-medium text-gray-700 inline-block w-[596px] h-[73px] shrink-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nunc egestas sodales fermentum proin augue non. `}</div>
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
            src="../rectangle-2@2x.png"
          />
          <img
            className="absolute top-[395px] left-[31px] rounded-[16px] w-[265px] h-[272px] object-cover"
            alt=""
            src="../rectangle-3@2x.png"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
            iaculis consequat et mollis. Consectetur nibh elit euismod aenean
            ullamcorper sit vitae eget quis. Ac, pulvinar pulvinar integer risus
            lobortis integer consectetur nulla sit. Rutrum vitae, sem ipsum
            egestas sollicitudin magna vel nisl. Id fringilla tellus ultrices at
            ultrices orci. Nibh dignissim viverra turpis quis id. Dictumst amet
            eg.
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              iaculis consequat et mollis. Consectetur nibh elit euismod aenean
              ullamcorper sit vitae eget quis. Ac, pulvinar pulvinar integer
              risus lobortis integer consectetur nulla sit. Rutrum vitae, sem
              ipsum egestas sollicitudin magna vel nisl. Id fringilla tellus
              ultrices at ultrices orci. Nibh dignissim viverra turpis quis id.
              Dictumst amet eg.
            </div>
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
      <div className="absolute top-[3087px] left-[0px] w-full flex flex-col items-center justify-start gap-[56px] text-3xl">
        <div className="relative font-semibold inline-block">
          What our clients say
        </div>
        <div className="relative bg-green w-[1440px] h-[553px] shrink-0 overflow-hidden text-base text-gray-900">
          <div className="absolute top-[78px] left-[145px] w-[344px] h-[217px]">
            <div className="absolute top-[0px] left-[0px] rounded-[8px] bg-gray-100 shadow-[0px_0px_4px_#837f7f,_-4px_4px_8px_rgba(131,_127,_127,_0.06)] w-[344px] h-[200px]" />
            <div className="absolute top-[32px] left-[32px] inline-block w-[268px]">
              Dfarm is the best they always deliver my goods on time without any
              delays.
            </div>
            <div className="absolute top-[153px] left-[32px] flex flex-row p-[0px_4px] box-border items-start justify-start gap-[19px] text-sm">
              <img
                className="relative w-[72px] h-[72px] shrink-0 object-cover"
                alt=""
                src="../ellipse-1@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[3px]">
                <div className="relative font-semibold inline-block w-[141px]">
                  Olumide Akani
                </div>
                <div className="relative text-xs font-semibold text-gray-500 inline-block w-[102px]">
                  Fooddeck CEO
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[81px] left-[944px] w-[344px] h-[217px]">
            <div className="absolute top-[0px] left-[0px] rounded-[8px] bg-gray-100 shadow-[0px_0px_4px_#837f7f,_-4px_4px_8px_rgba(131,_127,_127,_0.06)] w-[344px] h-[200px]" />
            <div className="absolute top-[32px] left-[32px] inline-block w-[268px]">
              If you want quality and good meat, I recommend Dfarm. They are the
              best.
            </div>
            <div className="absolute top-[153px] left-[32px] flex flex-row p-[0px_4px] box-border items-start justify-start gap-[19px] text-sm">
              <img
                className="relative w-[72px] h-[72px] shrink-0 object-cover"
                alt=""
                src="../ellipse-11@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[3px]">
                <div className="relative font-semibold inline-block w-[141px]">
                  Tunde Alamudu
                </div>
                <div className="relative text-xs font-semibold text-gray-500 inline-block w-[102px]">
                  Uydm CEO
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-[78px] left-[538px] w-[344px] h-[305px]">
            <div className="absolute top-[0px] left-[0px] rounded-[8px] bg-gray-100 shadow-[0px_0px_4px_#837f7f,_-4px_4px_8px_rgba(131,_127,_127,_0.06)] w-[344px] h-[289px]" />
            <div className="absolute top-[32px] left-[32px] inline-block w-[268px]">
              Ever since I started doing business with Dfarm my customers have
              always been giving good compliments about the freshness of my
              vegetables and soup ingredients.
            </div>
            <div className="absolute top-[241px] left-[32px] flex flex-row p-[0px_4px] box-border items-start justify-start gap-[19px] text-sm">
              <img
                className="relative w-[72px] h-[72px] shrink-0 object-cover"
                alt=""
                src="../ellipse-12@2x.png"
              />
              <div className="flex flex-col items-start justify-start gap-[3px]">
                <div className="relative font-semibold inline-block w-[141px]">
                  Raymond Felix
                </div>
                <div className="relative text-xs font-semibold text-gray-500 inline-block w-[102px]">
                  Gudly Manager
                </div>
              </div>
            </div>
          </div>
          <i className="absolute top-[500px] left-[532px] text-xl inline-block font-medium text-gray-100">
            We love to satisfy our customers
          </i>
        </div>
      </div>
      <div className="absolute top-[3916px] left-[123px] w-[1194px] h-[959px] text-3xl">
        <div className="absolute top-[0px] left-[0px] flex flex-col items-center justify-start gap-[56px]">
          <div className="flex flex-col items-center justify-start gap-[16px]">
            <div className="relative font-semibold inline-block">
              We have everything you need
            </div>
            <div className="relative text-sm leading-[30px] text-center inline-block w-[701px] h-[85px] shrink-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
              iaculis consequat et mollis. Consectetur nibh elit euismod aenean
              ullamcorper sit vitae eget quis. Ac.
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
      <div className="absolute top-[5047px] left-[120px] rounded-[8px] bg-green w-[1200px] h-[406px] overflow-hidden text-center text-[42px] text-gray-100">
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
          Pyxus builds upon 150 years of agricultural expertise to create
          solutions that will transform the world for the next generation
        </div>
        <div className="flex flex-row items-start justify-start gap-[196px] text-5xl text-green font-sf-pro-display">
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[4px]">
              <b className="relative inline-block">15</b>
              <div className="relative border-t-[2px_solid_#04b256] box-border w-[114px] h-[2px] shrink-0" />
            </div>
            <div className="relative text-lg text-gray-900 text-left inline-block w-[181px]">
              Years of farming experience
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <b className="relative inline-block">9</b>
              <div className="relative border-t-[2px_solid_#04b256] box-border w-[114px] h-[2px] shrink-0" />
            </div>
            <div className="relative text-lg text-gray-900 text-left inline-block w-[181px]">
              Countries in operation
            </div>
          </div>
          <div className="flex flex-col items-start justify-center gap-[16px]">
            <div className="flex flex-col items-start justify-center gap-[4px]">
              <b className="relative inline-block">12</b>
              <div className="relative border-t-[2px_solid_#04b256] box-border w-[114px] h-[2px] shrink-0" />
            </div>
            <div className="relative text-lg text-gray-900 text-left inline-block w-[181px]">
              Acres of farming Area
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-[0px]  bg-gray-1100 w-full  h-[365px] overflow-hidden text-sm text-white">
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
        </div> */}

        {/* <div className=" top-[72px] left-[975px] w-[256px] h-[159px]">
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
              onClick={onAboutUsText1Click}
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
        </div> */}
      </div>
  );
};

export default Home;
