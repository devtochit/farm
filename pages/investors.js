import { useCallback } from "react";
import { useRouter } from "next/router";

const Investors = () => {
  const router = useRouter();

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

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
    <div className=" h-full bg-white w-full overflow-hidden text-left text-3xl text-gray-1000 font-sf-pro-display">
      <div className="absolute top-[80px] left-[0px] w-full  h-[453px] overflow-hidden bg-[url(../public/frame-28@3x.png)] bg-cover bg-no-repeat bg-[top] text-4xl text-white">
        <div className="absolute top-[141px] left-[209px] font-medium inline-block w-[702px]">
          Your Funds, Working for you...
        </div>
      </div>




      <div className="absolute top-[2000px]  bg-gray-1100 w-full  h-[365px] overflow-hidden text-sm text-white">
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
                src="../vuesaxboldcall1.svg"
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

      <div className="absolute top-[621px] left-[333px] flex flex-col items-center justify-start gap-[24px] text-center">
        <b className="relative inline-block">Why Dfarm Agri?</b>
        <div className="relative text-sm leading-[30px] flex items-center justify-center w-[775px] h-[133px] shrink-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae iaculis
          consequat et mollis. Consectetur nibh elit euismod aenean ullamcorper
          sit vitae eget quis. Ac, pulvinar pulvinar integer risus lobortis
          integer consectetur nulla sit. Rutrum vitae, sem ipsum egestas
          sollicitudin magna vel nisl. Id fringilla tellus ultrices at ultrices
          orci. Nibh dignissim viverra turpis quis id. Dictumst amet eg.
        </div>
      </div>
      <div className="absolute top-[966px] left-[274px] flex flex-col items-center justify-start gap-[72px] text-center">
        <b className="relative inline-block">Our Process</b>
        <div className="flex flex-row items-start justify-start gap-[104px] text-lg">
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <img
                className="relative w-[64px] h-[64px] shrink-0 overflow-hidden"
                alt=""
                src="../note-1.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">
                  Fill a form
                </div>
                <div className="relative text-2xs inline-block w-[236px] h-[44px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  sit.
                </div>
              </div>
            </div>
            <div className="relative w-[30px] h-[30px] shrink-0 text-left text-2xs text-gray-100 font-inter">
              <img
                className="absolute top-[0px] left-[0px] w-[30px] h-[30px]"
                alt=""
                src="../ellipse-9.svg"
              />
              <div className="absolute top-[7px] left-[12px] font-medium inline-block">
                1
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <img
                className="relative w-[64px] h-[64px] shrink-0"
                alt=""
                src="../vuesaxlinearpeople.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">
                  Schedule a meeting
                </div>
                <div className="relative text-2xs inline-block w-[236px] h-[44px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  sit.
                </div>
              </div>
            </div>
            <div className="relative w-[30px] h-[30px] shrink-0 text-left text-2xs text-gray-100 font-inter">
              <img
                className="absolute top-[0px] left-[0px] w-[30px] h-[30px]"
                alt=""
                src="../ellipse-9.svg"
              />
              <div className="absolute top-[7px] left-[11px] font-medium inline-block">
                2
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-[24px]">
            <div className="flex flex-col items-center justify-start gap-[32px]">
              <img
                className="relative w-[64px] h-[64px] shrink-0 overflow-hidden"
                alt=""
                src="../handshake-1.svg"
              />
              <div className="flex flex-col items-center justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">
                  Invest
                </div>
                <div className="relative text-2xs inline-block w-[236px] h-[44px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                  sit.
                </div>
              </div>
            </div>
            <div className="relative w-[30px] h-[30px] shrink-0 text-left text-2xs text-gray-100 font-inter">
              <img
                className="absolute top-[0px] left-[0px] w-[30px] h-[30px]"
                alt=""
                src="../ellipse-9.svg"
              />
              <div className="absolute top-[7px] left-[11px] font-medium inline-block">
                3
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[1452px] left-[120px] w-[1200px] h-[473px]">
        <img
          className="absolute top-[0px] left-[616px] rounded-[16px] w-[584px] h-[473px] object-cover"
          alt=""
          src="../rectangle-5@2x.png"
        />
        <div className="absolute top-[36px] left-[0px] flex flex-col items-start justify-start gap-[16px]">
          <div className="relative font-semibold inline-block w-[460px]">
            Investments that will make you grow
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
      </div>
    </div>
  );
};

export default Investors;
