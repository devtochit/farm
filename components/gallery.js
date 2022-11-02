const Gallery = ({ onClose }) => {
  return (
    <div className="relative rounded-[8px] bg-gray-800 w-[643px] h-[495px] overflow-hidden max-w-[90%] max-h-[90%]">
      <img
        className="absolute top-[115px] left-[87px] w-[470px] h-[287px] object-cover"
        alt=""
        src="../rectangle-20@2x.png"
      />
      <img
        className="absolute top-[235px] left-[61px] w-[522px] h-[46px]"
        alt=""
        src="../group-12.svg"
      />
      <div className="absolute top-[373px] left-[306px] flex flex-row items-start justify-start gap-[4px]">
        <img
          className="relative w-[8px] h-[8px] shrink-0"
          alt=""
          src="../ellipse-6.svg"
        />
        <img
          className="relative w-[8px] h-[8px] shrink-0"
          alt=""
          src="../ellipse-7.svg"
        />
        <img
          className="relative w-[8px] h-[8px] shrink-0"
          alt=""
          src="../ellipse-7.svg"
        />
      </div>
    </div>
  );
};

export default Gallery;
