import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import HomeHeader from "./HomeHeader";

const DashHeader = () => {
  const location = useLocation();
  const isHome = location.pathname.includes(
    "/home/ddf7aeebdb64677682cbbf0d967a4a92",
  );
  return (
    <motion.header
      // initial={{ y: "-100vh" }}
      // animate={{ y: 0, transition: { duration: 0.5 } }}
      className={`absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent ${isHome ? 'px-[3vw]': 'px-[7vw]'} ${isHome ? 'pt-[2.25vw]': 'py-[3.75vw]'}  text-white`}
    >
      {isHome ? (
        <HomeHeader />
      ) : (
        <>
          <img
            // src={require("../../assets/logo-white.png")}
            src={`${process.env.PUBLIC_URL}/imgs/Switch-Landing-page.svg`}
            
            alt="Switch Logo"
            className="w-[15.77vw] object-contain"
            // className="w-[120px] object-contain sm:w-[150px] md:w-[151px] 2xl:w-[250px] 4xl:w-[400px]"
          />
          <button className="codecPro-bold rounded-[0.25vw] border-[.12vw] border-white px-[1.75vw] py-[.5vw] text-[1.25vw] text-white">
            تسجيل الدخول
          </button>
        </>
      )}
    </motion.header>
  );
};

export default DashHeader;
