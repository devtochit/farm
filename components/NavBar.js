import { useCallback } from "react";
import { useRouter } from "next/router";

const NavBar = () => {
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
    <div className=" bg-white w-full  overflow-hidden text-left text-2xl text-gray-1000 font-sf-pro-display">
      <div className="absolute top-[0px] left-[0px] w-[1440px] h-[991px] text-base text-green">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[80px] overflow-hidden">
          <div className="absolute top-[18px] left-[120px] w-[131px] h-[44px] overflow-hidden">
            <img
              className="absolute h-[91.41%] w-[34.92%] top-[2.27%] right-[65.08%] bottom-[6.32%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector.svg"
            />
            <div className="absolute h-[88.64%] w-[48.85%] top-[2.27%] right-[9.92%] bottom-[9.09%] left-[41.22%]">
              <div className="absolute h-[48.72%] w-full top-[0%] left-[0%] font-extrabold inline-block">
                DFARm
              </div>
              <div className="absolute h-[46.15%] w-[67.19%] top-[53.85%] left-[0%] font-extrabold inline-block">
                AGRI
              </div>
            </div>
          </div>
          <div className="absolute top-[21px] right-[120px] flex flex-row p-[8px] box-border items-start justify-start gap-[32px] text-gray-1000">
            <div className="relative font-semibold text-green inline-block">
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
            <div
              className="relative inline-block cursor-pointer"
              onClick={onContactUsTextClick}
            >
              Contact Us
            </div>
          </div>
        </div>

      </div>
      </div>
)}
export default NavBar
