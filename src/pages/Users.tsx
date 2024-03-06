import { motion } from "framer-motion";
import LogoWhite from "../assets/LogoWhite";
import { DashWrapper } from "../components/wrapper";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();
  return (
    <DashWrapper
      style={{
        backgroundImage: `url(/imgs/shadow.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      isShowLogin={false}
      isHideHeader
      id="Homepage"
      className="h-screen"
    >
      <motion.header
        className={`absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-[7vw] py-[30px] text-white xl:py-[60px] 2xl:py-[120px] 3xl:py-[150px]`}
      >
        <div className="w-[35%] md:w-[20%] ">
          <LogoWhite width="100%" />
        </div>
      </motion.header>
      <div className="flex h-screen flex-col items-center justify-start gap-[35px] px-[10%] pt-[135px] text-white md:justify-center md:pt-[0] xl:pb-[70px] 2xl:gap-[80px] 3xl:gap-[150px]">
        {/* <div className="flex h-screen flex-col items-center justify-center gap-[40px] px-[10%] pb-[100px] text-white xl:pb-[70px] 2xl:gap-[80px] 3xl:gap-[150px]"> */}
        <h2 className="codecPro-ExtraBold text-[30px] xl:text-[3.5vw]">
          Who's Watching?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[35px] md:gap-y-[4vw] xl:gap-x-[50px]">
          <div
            onClick={() => navigate("/home/ddf7aeebdb64677682cbbf0d967a4a92")}
            className="flex min-h-[152px] w-[45%] cursor-pointer flex-col items-center justify-center gap-5 md:w-fit"
          >
            <img
              src={"/imgs/users/user1.png"}
              alt="user1"
              className="size-[116px] object-contain xl:size-[120px] 2xl:size-[200px] 3xl:size-[332px]"
            />
            <p className="text-[18px] md:mt-[21px] md:text-[18px] xl:text-[34px]">
              Abdullah
            </p>
          </div>
          <div
            onClick={() => navigate("/home/ddf7aeebdb64677682cbbf0d967a4a92")}
            className="flex min-h-[152px] w-[45%] cursor-pointer flex-col items-center justify-center gap-5 md:w-fit"
          >
            <img
              src={"/imgs/users/user2.png"}
              alt="user2"
              className="size-[116px] object-contain xl:size-[120px] 2xl:size-[200px] 3xl:size-[332px]"
            />
            <p className="text-[18px] md:mt-[21px] md:text-[18px] xl:text-[34px]">
              Maria
            </p>
          </div>
          <div
            onClick={() => navigate("/home/ddf7aeebdb64677682cbbf0d967a4a92")}
            className="flex min-h-[152px] w-[45%] cursor-pointer flex-col items-center justify-center gap-5 md:w-fit"
          >
            <img
              src={"/imgs/users/user3.png"}
              alt="Family"
              className="size-[116px] object-contain xl:size-[120px] 2xl:size-[200px] 3xl:size-[332px]"
            />
            <p className="text-[18px] md:mt-[21px] md:text-[18px] xl:text-[34px]">
              Family
            </p>
          </div>
          <div className="flex h-[152px] w-[45%] flex-col items-center justify-center gap-5 md:h-full md:w-fit">
            <div className="flex flex-1 items-center justify-center">
              <img
                src={"/imgs/users/plus.png"}
                alt="Add Profile"
                className="size-[57px] object-contain md:size-[42px] xl:size-[60px] 2xl:size-[100px] 3xl:size-[150px]"
              />
            </div>
            <p className="text-[18px] xl:text-[34px]">Add Profile</p>
          </div>
        </div>
        {/* <div className="flex flex-col items-center gap-5 md:hidden">
          <img
            src={"/imgs/users/plus.png"}
            alt="Add Profile"
            className="size-[10vw] object-contain"
          />
          <p className="text-[18px]">Add Profile</p>
        </div> */}
        <button className="mt-[2%] w-[70%] border border-white px-[25px] py-[6px] text-[22px] md:w-fit md:px-[40px] md:py-[14px] xl:text-[45px] 2xl:px-[80px] 2xl:py-[24px]">
          Manage Profiles
        </button>
      </div>
    </DashWrapper>
  );
};

export default Users;
