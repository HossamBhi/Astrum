import { motion } from "framer-motion";
import LogoWhite from "../assets/LogoWhite";
import { DashWrapper } from "../components/wrapper";
import { useNavigate } from "react-router-dom";
import { useWindowDimensions } from "../hooks";
import { useCallback } from "react";

const Users = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const CardButton = useCallback(
    ({ image, title }: { image: string; title: string }) => (
      <div
        onClick={() => navigate("/home/ddf7aeebdb64677682cbbf0d967a4a92")}
        className="flex min-h-[152px] w-[45%] cursor-pointer flex-col items-center justify-center gap-5 md:w-fit"
      >
        <img
          src={image}
          alt={title}
          className="size-[116px] flex-1 object-contain sm:size-[9vw]"
        />
        <p className="text-[18px] sm:text-[1.5vw]">{title}</p>
      </div>
    ),
    [],
  );

  return (
    <DashWrapper
      style={{
        backgroundImage: !isLandscape
          ? `url(/imgs/shadow-moblie1.png)`
          : `url(/imgs/shadow.png)`,
        backgroundPosition: !isLandscape ? "center" : "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      isShowLogin={false}
      isHideHeader
      id="Homepage"
      className="h-screen"
    >
      <motion.header
        className={`absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-[7vw] py-[30px] text-white sm:px-[7vw] sm:py-[3.75vw]`}
      >
        <div
          onClick={() => navigate("/switch/ddf7aeebdb64677682cbbf0d967a4a92")}
        >
          <LogoWhite width={width > 540 ? undefined : "124px"} />
        </div>
      </motion.header>
      <div className="flex h-screen flex-col items-center justify-start gap-[35px] px-[10%] pt-[95px] text-white sm:gap-[3vw] md:justify-center md:pt-[0] xl:pb-[70px]">
        <h2 className="codecPro-ExtraBold text-[30px] sm:text-[3.5vw]">
          Who's Watching?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[35px] sm:gap-x-[1.25vw]">
          <CardButton title="Abdullah" image="/imgs/users/user1.svg" />
          <CardButton title="Maria" image="/imgs/users/user2.svg" />
          <CardButton title=" Family" image="/imgs/users/user3.svg" />

          <div className="flex h-[152px] w-[45%] flex-col items-center justify-center gap-5 sm:h-full sm:px-[2vw] md:h-full md:w-fit">
            <div className="flex flex-1 items-center justify-center">
              <img
                src={"/imgs/users/plus.svg"}
                alt="Add Profile"
                className="size-[57px] object-contain sm:size-[4vw]"
              />
            </div>
            <p className="text-[18px] sm:pb-[0.25vw] sm:text-[1vw]">
              Add Profile
            </p>
          </div>
        </div>

        <button className="mt-[2%] w-[70%] border border-white py-[6px] text-[22px] sm:mt-[0.5vw] sm:px-[2vw] sm:py-[1vw] sm:text-[1.25vw] md:w-fit md:px-[40px] md:py-[14px]">
          Manage Profiles
        </button>
      </div>
    </DashWrapper>
  );
};

export default Users;
