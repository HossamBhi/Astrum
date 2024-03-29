const FooterSection = () => {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-white px-[5%] py-[2%] text-black">
      <div className="flex w-full justify-between">
        <img
          src={require("../../assets/Logo Switch.png")}
          className="w-[232px] object-contain 3xl:w-[466px]"
        />
        <h3 className="text-end text-[38px] font-bold 3xl:text-[75px]">
          أعمال أصلية
        </h3>
      </div>
      <div className="flex h-full w-full justify-between pt-[24px]">
        <p className="text-[16px] 3xl:text-[26px]">
          © 2024 Switch Arabia, All Rights Reserved.
        </p>

        <div className="flex justify-end gap-5 text-[16px] 3xl:text-[26px]">
          <span>Terms of Use </span>
          <span>Privacy</span>
          <span>Cookie Preferences</span>
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="flex min-h-[200px] w-full items-center justify-between bg-white px-[5%] py-[2%] text-black">
  //     <div className="flex h-full flex-col justify-between">
  //       <img
  //         src={require("../../assets/Logo Switch.png")}
  //         className="w-[252px] object-top pb-[12%] 3xl:w-[466px]"
  //       />
  //       <p className="text-[16px] 3xl:text-[26px]">
  //         © 2024 Switch Arabia, All Rights Reserved.
  //       </p>
  //     </div>
  //     <div className="flex h-full flex-col justify-between">
  //       <h3 className="pb-[12%] text-end text-[38px] font-bold 3xl:text-[75px]">
  //         أعمال أصلية
  //       </h3>
  //       <div className="flex w-full justify-end gap-5 text-[16px] 3xl:text-[26px]">
  //         <span>Terms of Use </span>
  //         <span>Privacy</span>
  //         <span>Cookie Preferences</span>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default FooterSection;
