const FooterOne = () => {
  return (
    <div className="relative w-full bg-black md:h-[310px] 2xl:h-[510px] 3xl:h-[992px]">
      <img
        src={require("../../assets/fiad.png")}
        className="h-full w-full rotate-180 object-cover"
      />
      <div className="absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center 3xl:h-[1000px]">
        <img
          src={require("../../assets/logo-white.png")}
          className="-mt-10 w-[40%]"
        />
        <img
          src={require("../../assets/Font.png")}
          className="w-[55%] md:mt-2 2xl:mt-10 3xl:mt-20"
        />
      </div>
    </div>
  );
};

export default FooterOne;
