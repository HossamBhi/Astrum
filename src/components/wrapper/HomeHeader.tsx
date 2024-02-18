import { motion } from "framer-motion";

const HomeHeader = () => {
  return (
    <motion.header
      // initial={{ y: "-100vh" }}
      // animate={{ y: 0, transition: { duration: 0.5 } }}
      // className="absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-[7vw] py-[3.75vw] text-white"
      className="flex w-full items-center justify-between bg-transparent text-white"
    >
      <div className="flex w-full flex-1 items-center">
        <img
          src={`${process.env.PUBLIC_URL}/imgs/logo-category.png`}
          className="w-[12.77vw] object-contain me-[2vw]"
        />
        <ul className="flex px-2">
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">المزيد</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">بودكاست</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">برامج</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">أفلام قصيرة</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">وثائقيات</li>
        </ul>
      </div>
      <div className="flex w-full flex-1 items-center justify-end">
        <ul className="flex px-[0.75vw] text-[0.75vw]">
          <li className="mx-[0.75vw] cursor-pointer border-b-2 border-[#4D17CE] text-[0.75vw]">
            <span>Enterainment</span>
          </li>
          <li className="cursor-pointer text-[0.75vw]">
            <span className="cursor-pointer border-x-2 px-[0.75vw] text-[0.75vw]">
              Education
            </span>
          </li>
          <li className="cursor-pointer text-[0.75vw]">
            <span className="cursor-pointer border-r-2 px-[0.75vw]">
              Famliy & Kids
            </span>
          </li>
          <li className="cursor-pointer">
            <span className="cursor-pointer px-[0.75vw]">
              New
            </span>
          </li>
        </ul>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/navicon.png`}
          className="w-[2vw]"
        />
      </div>
    </motion.header>
  );
};

export default HomeHeader;
