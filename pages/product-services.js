import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import PlaceAndOrder1 from "../components/place-and-order1";
import PortalPopup from "../components/portal-popup";
import Gallery from "../components/gallery";

const ProductServices = () => {
  const router = useRouter();
  const [isPlaceAndOrderOpen, setPlaceAndOrderOpen] = useState(false);
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const onHomeTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onOurCompanyTextClick = useCallback(() => {
    router.push("/our-company");
  }, [router]);

  const onProductServicesClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const onInvestorsTextClick = useCallback(() => {
    router.push("/investors");
  }, [router]);

  const onContactUsTextClick = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  const openPlaceAndOrder = useCallback(() => {
    setPlaceAndOrderOpen(true);
  }, []);

  const closePlaceAndOrder = useCallback(() => {
    setPlaceAndOrderOpen(false);
  }, []);

  const openGallery = useCallback(() => {
    setGalleryOpen(true);
  }, []);

  const closeGallery = useCallback(() => {
    setGalleryOpen(false);
  }, []);

  const onHomeText1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onAboutUsTextClick = useCallback(() => {
    router.push("/our-company");
  }, [router]);

  const onServicesText1Click = useCallback(() => {
    router.push("/product-services");
  }, [router]);

  const onContactUsText1Click = useCallback(() => {
    router.push("/contact-us");
  }, [router]);

  return (
    <>
      <div className="relative bg-white w-full h-[2552px] overflow-hidden text-left text-base text-white font-sf-pro-display">
        <div className="absolute top-[0px] left-[0px] w-[1440px] h-[80px] overflow-hidden text-green">
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
              className="relative font-semibold text-green inline-block cursor-pointer"
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
        <div className="absolute top-[80px] left-[0px] w-full  h-[453px] overflow-hidden bg-[url(../public/frame-281@3x.png)] bg-cover bg-no-repeat bg-[top] text-4xl">
          <div className="absolute top-[141px] left-[209px] font-medium inline-block w-[702px]">
            We produce one of the finest in Africa
          </div>
        </div>
        <div className="absolute top-[615px] left-[378px] w-[684px] h-[56px] text-gray-100">
          <div className="absolute top-[0px] left-[520px] rounded-[8px] bg-green h-[56px] flex flex-row p-[16px_53px] box-border items-start justify-start">
            <b className="relative inline-block">Search</b>
          </div>
          <div className="absolute top-[0px] left-[0px] w-[512px] h-[56px] text-sm text-gray-400">
            <div className="absolute top-[0px] left-[0px] rounded-[8px] bg-gray-300 w-[512px] h-[56px]" />
            <div className="absolute top-[18px] left-[32px] flex flex-row items-center justify-start gap-[8px]">
              <img
                className="relative w-[20px] h-[20px] shrink-0"
                alt=""
                src="../vuesaxlinearsearchnormal.svg"
              />
              <div className="relative inline-block">
                Search for an agricultural product
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[732px] left-[120px] rounded-[8px] flex flex-col p-[40px_48px_88px_24px] box-border items-start justify-center gap-[29px] text-xl text-gray-1000">
          <div className="relative leading-[30px] font-medium inline-block">
            Categories
          </div>
          <div className="flex flex-col items-start justify-start gap-[16px] text-base">
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxboldticksquare.svg"
              />
              <div className="relative leading-[30px] inline-block">
                All products
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxlinearstop.svg"
              />
              <div className="relative leading-[30px] inline-block">
                Animals or livestocks
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxlinearstop.svg"
              />
              <div className="relative leading-[30px] inline-block">
                Vegetables
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxlinearstop.svg"
              />
              <div className="relative leading-[30px] inline-block">Fruits</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxlinearstop.svg"
              />
              <div className="relative leading-[30px] inline-block">Grains</div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxlinearstop.svg"
              />
              <div className="relative leading-[30px] inline-block">
                Services
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[9px]">
              <img
                className="relative w-[24px] h-[24px] shrink-0"
                alt=""
                src="../vuesaxlinearstop.svg"
              />
              <div className="relative leading-[30px] inline-block">Others</div>
            </div>
          </div>
        </div>
        <div className="absolute top-[732px] left-[425px] w-[895px] h-[1226px] overflow-hidden text-xl text-gray-1000">
          <div className="absolute top-[46px] left-[19px] w-[826px] h-[234px]">
            <div className="absolute top-[16px] left-[435px] flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">Cows</div>
                <div className="relative text-xs inline-block w-[391px] h-[115px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                  suscipit ornare quis sit habitant nisl. Eget malesuada mauris
                  non eget sapien dictum porta. Libero, eget turpis nec,
                  faucibus fermentum nibh neque vitae sit. Imperdiet lacus
                  luctus duisd in. Condimentum maecenas nec proin nibh. Erat
                  vitae arcu purus vel dui eros, sit. Vitae erat arcu, tristique
                  porta. Sed varius pulvinar.
                </div>
              </div>
              <b
                className="relative text-sm inline-block text-green cursor-pointer"
                onClick={openPlaceAndOrder}
              >
                Place an order
              </b>
            </div>
            <div
              className="absolute top-[0px] left-[0px] w-[387px] h-[234px] cursor-pointer"
              onClick={openGallery}
            >
              <img
                className="absolute top-[0px] left-[0px] rounded-[8px] w-[387px] h-[234px] object-cover"
                alt=""
                src="../rectangle-16@2x.png"
              />
              <div className="absolute top-[183px] left-[250px] flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-19@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-17@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-17@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[344px] left-[19px] w-[826px] h-[234px]">
            <div className="absolute top-[16px] left-[435px] flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">
                  Turkeys
                </div>
                <div className="relative text-xs inline-block w-[391px] h-[115px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                  suscipit ornare quis sit habitant nisl. Eget malesuada mauris
                  non eget sapien dictum porta. Libero, eget turpis nec,
                  faucibus fermentum nibh neque vitae sit. Imperdiet lacus
                  luctus duisd in. Condimentum maecenas nec proin nibh. Erat
                  vitae arcu purus vel dui eros, sit. Vitae erat arcu, tristique
                  porta. Sed varius pulvinar.
                </div>
              </div>
              <b className="relative text-sm inline-block text-green">
                Place an order
              </b>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[387px] h-[234px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[8px] w-[387px] h-[234px] object-cover"
                alt=""
                src="../rectangle-161@2x.png"
              />
              <div className="absolute top-[183px] left-[250px] flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-191@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-171@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-181@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[642px] left-[19px] w-[826px] h-[234px]">
            <div className="absolute top-[16px] left-[435px] flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">
                  Fresh Oranges
                </div>
                <div className="relative text-xs inline-block w-[391px] h-[115px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                  suscipit ornare quis sit habitant nisl. Eget malesuada mauris
                  non eget sapien dictum porta. Libero, eget turpis nec,
                  faucibus fermentum nibh neque vitae sit. Imperdiet lacus
                  luctus duisd in. Condimentum maecenas nec proin nibh. Erat
                  vitae arcu purus vel dui eros, sit. Vitae erat arcu, tristique
                  porta. Sed varius pulvinar.
                </div>
              </div>
              <b className="relative text-sm inline-block text-green">
                Place an order
              </b>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[387px] h-[234px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[8px] w-[387px] h-[234px] object-cover"
                alt=""
                src="../rectangle-162@2x.png"
              />
              <div className="absolute top-[183px] left-[250px] flex flex-row items-start justify-start gap-[4px] bg-[url(../public/frame-65@3x.png)] bg-cover bg-no-repeat bg-[top]">
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-192@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-172@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-182@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="absolute top-[940px] left-[19px] w-[826px] h-[234px]">
            <div className="absolute top-[16px] left-[435px] flex flex-col items-start justify-start gap-[8px]">
              <div className="flex flex-col items-start justify-start gap-[8px]">
                <div className="relative font-semibold inline-block">Garri</div>
                <div className="relative text-xs inline-block w-[391px] h-[115px] shrink-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. At id
                  suscipit ornare quis sit habitant nisl. Eget malesuada mauris
                  non eget sapien dictum porta. Libero, eget turpis nec,
                  faucibus fermentum nibh neque vitae sit. Imperdiet lacus
                  luctus duisd in. Condimentum maecenas nec proin nibh. Erat
                  vitae arcu purus vel dui eros, sit. Vitae erat arcu, tristique
                  porta. Sed varius pulvinar.
                </div>
              </div>
              <b className="relative text-sm inline-block text-green">
                Place an order
              </b>
            </div>
            <div className="absolute top-[0px] left-[0px] w-[387px] h-[234px]">
              <img
                className="absolute top-[0px] left-[0px] rounded-[8px] w-[387px] h-[234px] object-cover"
                alt=""
                src="../rectangle-163@2x.png"
              />
              <div className="absolute top-[183px] left-[250px] flex flex-row items-start justify-start gap-[4px]">
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-193@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-173@2x.png"
                />
                <img
                  className="relative w-[37px] h-[37px] shrink-0 object-cover"
                  alt=""
                  src="../rectangle-183@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[2031px] left-[572px] overflow-hidden flex flex-row items-center justify-start gap-[0px] text-xs text-gray-900 font-sf-pro-text">
          <img
            className="relative w-[32px] h-[32px] shrink-0 overflow-hidden"
            alt=""
            src="../pagination-arrow-left.svg"
          />
          <div className="rounded-[3px] bg-green overflow-hidden flex flex-row p-[6px_12px] box-border items-center justify-start text-gray-200">
            <div className="relative leading-[20px] inline-block">1</div>
          </div>
          <div className="rounded-[3px] bg-gray-1200 overflow-hidden flex flex-row p-[6px_12px] box-border items-center justify-start">
            <div className="relative leading-[20px] inline-block">2</div>
          </div>
          <div className="rounded-[3px] bg-gray-1200 overflow-hidden flex flex-row p-[6px_12px] box-border items-center justify-start">
            <div className="relative leading-[20px] inline-block">3</div>
          </div>
          <div className="rounded-[3px] bg-gray-1200 overflow-hidden flex flex-row p-[6px_12px] box-border items-center justify-start">
            <div className="relative leading-[20px] inline-block">4</div>
          </div>
          <div className="rounded-[3px] bg-gray-1200 overflow-hidden flex flex-row p-[6px_12px] box-border items-center justify-start">
            <div className="relative leading-[20px] inline-block">5</div>
          </div>
          <div className="rounded-[3px] bg-gray-1200 overflow-hidden flex flex-row p-[6px_8px] box-border items-start justify-start">
            <img
              className="relative w-[12px] h-[20px] shrink-0"
              alt=""
              src="../.svg"
            />
          </div>
          <div className="rounded-[3px] bg-gray-1200 overflow-hidden flex flex-row p-[6px_12px] box-border items-center justify-start">
            <div className="relative leading-[20px] inline-block">10</div>
          </div>
          <img
            className="relative w-[32px] h-[32px] shrink-0 overflow-hidden"
            alt=""
            src="../pagination-arrow-right.svg"
          />
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
                onClick={onServicesText1Click}
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
      {isPlaceAndOrderOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePlaceAndOrder}
        >
          <PlaceAndOrder1 onClose={closePlaceAndOrder} />
        </PortalPopup>
      )}
      {isGalleryOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeGallery}
        >
          <Gallery onClose={closeGallery} />
        </PortalPopup>
      )}
    </>
  );
};

export default ProductServices;
