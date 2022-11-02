const PlaceAndOrder1 = ({ onClose }) => {
  return (
    <div className="relative rounded-[8px] bg-white w-[643px] h-[657px] overflow-hidden max-w-[90%] max-h-[90%] text-left text-[30px] text-black font-sf-pro-display">
      <div className="absolute top-[48px] left-[56px] flex flex-col items-start justify-start gap-[24px]">
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <b className="relative inline-block w-[368px]">
            We would love to know what you need
          </b>
          <div className="flex flex-col items-start justify-start gap-[24px] text-sm text-gray-1000">
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-medium inline-block">Name</div>
              <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-600">
                <div className="relative font-medium inline-block">
                  Enter your fullname
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-medium inline-block">
                Phone Number
              </div>
              <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-600">
                <div className="relative font-medium inline-block">
                  Enter your phone number
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[8px]">
              <div className="relative font-medium inline-block">Message</div>
              <div className="rounded-[8px] [border:1px_solid_#969090] box-border w-[469px] h-[148px] shrink-0 flex flex-row p-[18px_24px] items-start justify-start text-xs text-gray-900">
                <div className="relative font-medium inline-block w-[385px] shrink-0">
                  Hello, I would appreciate further details regarding your cows
                  and their prices.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-[8px] bg-green h-[48px] shrink-0 flex flex-row p-[16px_53px] box-border items-start justify-start text-base text-gray-100">
          <b className="relative inline-block">Send</b>
        </div>
      </div>
    </div>
  );
};

export default PlaceAndOrder1;
