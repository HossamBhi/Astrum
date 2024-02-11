import { motion } from "framer-motion";

const DashHeader = () => {
  return (
    <motion.header
      initial={{ y: "-100vh" }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      className="absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-2 py-2 text-white"
    >
      <img
        src={require("../../assets/logo.png")}
        alt="Switch Logo"
        className="lg:[15%] md:[25%] w-[35%] object-contain"
      />
      {/* <nav>Header</nav> */}
    </motion.header>
  );
};

export default DashHeader;
