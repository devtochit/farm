const PlaceAndOrder = () => {
  return (
    <div className="relative rounded-[8px] bg-white w-full h-[295px] overflow-hidden text-center text-xl text-black font-sf-pro-display">
      <div className="absolute top-[80px] left-[201px] flex flex-col items-center justify-center gap-[16px]">
        <img
          className="relative w-[64px] h-[64px] shrink-0 overflow-hidden"
          alt=""
          src="../mail-1.svg"
        />
        <div className="flex flex-col items-center justify-center gap-[8px]">
          <b className="relative flex items-center justify-center w-[216px]">
            Message sent
          </b>
          <div className="relative text-xs font-medium inline-block">
            We will responsed to you within 24hours
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceAndOrder;
