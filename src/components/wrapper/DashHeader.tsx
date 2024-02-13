import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const DashHeader = () => {
  const location = useLocation();
  const isHome = location.pathname.includes("/home/ddf7aeebdb64677682cbbf0d967a4a92");
  return (
    <motion.header
      // initial={{ y: "-100vh" }}
      // animate={{ y: 0, transition: { duration: 0.5 } }}
      className="absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-4 py-4 text-white xl:px-[60px] xl:py-[50px] 3xl:px-[120px] 3xl:py-[100px]"
    >
      {isHome ? (
        <img
          src={require("../../assets/nav.png")}
          alt="Switch Nav"
          className="w-full object-contain bg-blend-color-burn "
        />
      ) : (
        <>
          <img
            src={require("../../assets/logo-white.png")}
            alt="Switch Logo"
            className="w-[120px] object-contain sm:w-[150px] md:w-[151px] 2xl:w-[250px] 3xl:w-[400px]"
          />
          <button className="rounded-[5px] border-[.5px] border-white px-5 py-2 text-[8px] text-white sm:font-bold md:text-[10px] 2xl:text-[20px] 3xl:rounded-[10px] 3xl:py-4 3xl:text-3xl">
            تسجيل الدخول
          </button>
        </>
      )}
    </motion.header>
  );
};

export default DashHeader;
