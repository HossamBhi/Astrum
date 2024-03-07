import { motion } from "framer-motion";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogoWhite from "../assets/LogoWhite";
import { DashWrapper } from "../components/wrapper";
import { useWindowDimensions } from "../hooks";
// import { Tilt } from "react-tilt";

const Users = () => {
  const navigate = useNavigate();
  const { height, width } = useWindowDimensions();
  const isLandscape = width > height;

  const CardButton = useCallback(
    ({ id, image, title }: { id: number; image: string; title: string }) => (
      // <Tilt options={{ max: 35, scale: 1.05, axis: "x" }}>
      <motion.div
        // whileHover={{ scale: 1.1 }}
        // initial={{ x: -200, opacity: 0 }}
        // animate={{
        //   x: 0,
        //   opacity: 1,
        //   transition: {
        //     type: "spring",
        //     delay: 0.5 * id,
        //     duration: 0.75,
        //     ease: "easeOut",
        //   },
        // }}
        onClick={() =>
          navigate("/home/ddf7aeebdb64677682cbbf0d967a4a92?image=" + id)
        }
        className="flex min-h-[152px] w-[45%] cursor-pointer flex-col items-center justify-center gap-5 md:w-fit"
      >
        <img
          src={image}
          alt={title}
          className="size-[116px] flex-1 object-contain md:size-[9vw]"
        />
        <p className="text-[18px] md:text-[1.5vw]">{title}</p>
      </motion.div>
      // </Tilt>
    ),
    [],
  );

  return (
    <DashWrapper
      style={{
        backgroundImage:
          width < 720
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
        className={`absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-[7vw] py-[30px] text-white md:px-[7vw] md:py-[3.75vw]`}
      >
        <div
          onClick={() => navigate("/switch/ddf7aeebdb64677682cbbf0d967a4a92")}
        >
          <LogoWhite width={width > 540 ? undefined : "124px"} />
        </div>
      </motion.header>
      <div className="relative flex h-screen flex-col items-center justify-start gap-[35px] px-[10%] pt-[125px] text-white md:justify-center md:gap-[3vw] md:pt-[0]">
        {/* <div className="bg-fade-users-page">
          <div className="bg-fade-inside-users-page"></div>
        </div> */}
        <motion.h2
          // initial={{ y: -50, opacity: 0 }}
          // animate={{
          //   y: 0,
          //   opacity: 1,
          //   transition: {
          //     type: "tween",
          //     duration: 0.7,
          //   },
          // }}
          className="codecPro-ExtraBold z-[100] text-[30px] md:text-[3.5vw]"
        >
          Who's Watching?
        </motion.h2>
        <div className="z-[100] flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[35px] md:gap-x-[1.25vw]">
          <CardButton id={1} title="Abdullah" image="/imgs/users/user1.svg" />
          <CardButton id={2} title="Maria" image="/imgs/users/user2.svg" />
          <CardButton id={3} title="Family" image="/imgs/users/user3.svg" />
          <CardButton id={4} title="Add Profile" image="/imgs/users/plus.svg" />

          {/* <div className="flex h-[152px] w-[45%] flex-col items-center justify-center gap-5 md:h-full md:w-fit md:px-[2vw]">
            <div className="flex flex-1 items-center justify-center">
              <img
                src={"/imgs/users/plus.svg"}
                alt="Add Profile"
                className="size-[57px] object-contain md:size-[4vw]"
              />
            </div>
            <p className="text-[18px] md:pb-[0.25vw] md:text-[1vw]">
              Add Profile
            </p>
          </div> */}
        </div>

        <motion.button
          // initial={{ y: 50, opacity: 0 }}
          // animate={{
          //   y: 0,
          //   opacity: 1,
          //   transition: {
          //     type: "tween",
          //     duration: 0.7,
          //   },
          // }}
          // whileHover={{ scale: 1.05 }}
          className="z-[100] mt-[2%] w-[70%] rounded-[10px] border border-white py-[6px] text-[22px] md:mt-[0.5vw] md:w-fit md:px-[2vw] md:py-[1vw] md:text-[1.25vw]"
        >
          Manage Profiles
        </motion.button>
      </div>
    </DashWrapper>
  );
};

export default Users;
