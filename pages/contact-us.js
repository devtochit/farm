import { useCallback } from "react";
import { useRouter } from "next/router";

const ContactUs = () => {
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
    <div className="relative bg-white w-full h-[2068px] overflow-hidden text-left text-3xl text-white font-sf-pro-display">
      <div className="absolute top-[80px] left-[0px] w-full  h-[453px] overflow-hidden text-4xl">
        <img
          className="absolute top-[0px] left-[0px] w-full  h-[960px] object-cover"
          alt=""
          src="../portraitsmilingafricanmanagronomistisworkinghisfarm-3379916512-1@2x.png"
        />
        <div className="absolute top-[141px] left-[209px] font-medium inline-block w-[702px]">{`We await your mails and requests `}</div>
      </div>
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
          <div
            className="relative inline-block cursor-pointer"
            onClick={onOurCompanyTextClick}
          >
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
          <div className="relative font-semibold text-green inline-block">
            Contact Us
          </div>
        </div>
      </div>
      <div className="absolute top-[708px] left-[118px] flex flex-col items-start justify-start gap-[40px] text-gray-1000">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <div className="relative font-medium inline-block">
            Send us a message
          </div>
          <div className="relative text-sm inline-block w-[495px]">
            Our customer representatives are very effective, we respond to
            messages as soon as possible
          </div>
        </div>
        <div className="relative rounded-[16px] bg-white shadow-[0px_0px_4px_rgba(0,_0,_0,_0.04),_-4px_4px_8px_rgba(0,_0,_0,_0.06)] w-[610px] h-[693px] shrink-0 overflow-hidden text-sm">
          <div className="absolute top-[56px] left-[40px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium inline-block">Name</div>
            <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-600">
              <div className="relative font-medium inline-block">
                Enter your fullname
              </div>
            </div>
          </div>
          <div className="absolute top-[185px] left-[40px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium inline-block">Email</div>
            <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-600">
              <div className="relative font-medium inline-block">
                Enter your email address
              </div>
            </div>
          </div>
          <div className="absolute top-[324px] left-[40px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium inline-block">
              Phone Number
            </div>
            <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-600">
              <div className="relative font-medium inline-block">
                Enter your phone number
              </div>
            </div>
          </div>
          <div className="absolute top-[437px] left-[40px] flex flex-col items-start justify-start gap-[8px]">
            <div className="relative font-medium inline-block">Message</div>
            <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] h-[148px] shrink-0 flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-600">
              <div className="relative font-medium inline-block">
                How can we be of help to you?
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[677.5px] left-[831.5px] border-r-[1px_solid_#e9e9e9] box-border w-[1px] h-[903px]" />
      <div className="absolute top-[708px] left-[907px] flex flex-col items-start justify-center gap-[32px] text-gray-1000">
        <div className="relative font-medium inline-block">Contact details</div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-sm text-gray-900">
          <div className="relative font-medium inline-block w-[347px] h-[47px] shrink-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-lg text-gray-1000">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxboldcall3.svg"
              />
              <div className="relative font-medium inline-block">
                +23484394034
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxboldsmsnotification3.svg"
              />
              <div className="relative font-medium inline-block">
                JohnDoe@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[0px] left-[calc(50%_-_720px)] bg-gray-1100 w-[1440px] h-[365px] overflow-hidden text-sm">
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
    </div>
  );
};

export default ContactUs;
