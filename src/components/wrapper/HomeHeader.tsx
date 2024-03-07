import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import LogoCategory from "../../assets/LogoCategory";
import { ROUTES } from "../../routes";

const HomeHeader = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const imageId = searchParams.get("image");
  const imageSrc =
    imageId === "1"
      ? `${process.env.PUBLIC_URL}/imgs/users/user1.svg`
      : imageId === "2"
        ? `${process.env.PUBLIC_URL}/imgs/users/user2.svg`
        : imageId === "3"
          ? `${process.env.PUBLIC_URL}/imgs/users/user3.svg`
          : `${process.env.PUBLIC_URL}/imgs/navicon.png`;
  return (
    <motion.header
      // initial={{ y: "-100vh" }}
      // animate={{ y: 0, transition: { duration: 0.5 } }}
      // className="absolute top-0 z-[100] flex w-full items-center justify-between bg-transparent px-[7vw] py-[3.75vw] text-white"
      className="flex w-full items-center justify-between bg-transparent text-white"
    >
      <div className="flex w-full flex-1 items-center">
        <div
          className="me-[2vw] cursor-pointer object-contain"
          onClick={() => navigate("/switch/ddf7aeebdb64677682cbbf0d967a4a92")}
        >
          <LogoCategory width={"12.77vw"} />
        </div>
        {/* <img
          src={`${process.env.PUBLIC_URL}/imgs/Logo-Switch.svg`}
          className="w-[12.77vw] object-contain me-[2vw] cursor-pointer"
          onClick={() => navigate('/switch/ddf7aeebdb64677682cbbf0d967a4a92')}
          alt="Logo category"
        /> */}
        <ul className="flex px-2">
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">المزيد</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">بودكاست</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">برامج</li>
          <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">
            أفلام قصيرة
          </li>
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
              Family & Kids
            </span>
          </li>
          <li className="cursor-pointer">
            <span className="cursor-pointer px-[0.75vw]">Now</span>
          </li>
        </ul>
        <img
          src={imageSrc}
          className="w-[2vw]"
          alt="nav icon"
          onClick={() => navigate(ROUTES.switchUsers.path)}
        />
      </div>
    </motion.header>
  );
};

export default HomeHeader;
