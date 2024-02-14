const FooterOne = () => {
  return (
    <div className="relative h-[24.3vw] w-full bg-black">
      <img
        // src={require("../../assets/fiad.png")}
        src={require("../../assets/bg.png")}
        className="h-full w-full object-cover opacity-70"
        // className="h-full w-full rotate-180 object-cover"
      />
      <div className="absolute left-1/2 top-1/2 z-40 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center">
        <img src={require("../../assets/logo-white.png")} className="w-[30%]" />
        <img
          src={require("../../assets/Font.png")}
          className="mt-[4vw] w-[60%]"
        />
      </div>
    </div>
  );
};

export default FooterOne;
