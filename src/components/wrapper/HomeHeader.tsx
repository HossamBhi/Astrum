import { motion } from "framer-motion";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import KidsImage from "../../assets/KidsImage";
import LogoCategory from "../../assets/LogoCategory";
import { ROUTES } from "../../routes";
import LogoEducation from "../../assets/LogoEducation";
const activeClassName = "border-b-2 border-b-[#4D17CE]";

const HomeHeader = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchParams] = useSearchParams();
  const imageId = searchParams.get("image");
  const imageSrc =
    imageId === "1"
      ? `${process.env.PUBLIC_URL}/imgs/users/user1.svg`
      : imageId === "2"
        ? `${process.env.PUBLIC_URL}/imgs/users/user2.svg`
        : `${process.env.PUBLIC_URL}/imgs/navicon.png`;
  const isEduction = pathname.includes(ROUTES.switchEducation.path);

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
          {isEduction ? (
            <LogoEducation width={"12.77vw"} />
          ) : (
            <LogoCategory width={"12.77vw"} />
          )}
        </div>

        {isEduction ? (
          <input
            placeholder="ماذا ترغب بالتعلم اليوم؟"
            className="w-[50%] rounded-[0.25vw] border-[.5px] border-white/50 bg-[#00000061] px-[1vw] py-[.75vw] text-right text-[0.75vw] text-[#FFFFFF63] outline-none"
          />
        ) : (
          <ul className="flex px-2">
            <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">المزيد</li>
            <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">
              بودكاست
            </li>
            <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">برامج</li>
            <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">
              أفلام قصيرة
            </li>
            <li className="cursor-pointer px-[0.75vw] text-[0.75vw]">
              وثائقيات
            </li>
          </ul>
        )}
      </div>
      <div className="flex w-full flex-1 items-center justify-end">
        <ul className="flex px-[0.75vw] text-[0.75vw]">
          <li
            className={`mx-[0.75vw] cursor-pointer text-[0.75vw] ${pathname.includes(ROUTES.switchHome.path) && activeClassName}`}
          >
            <Link to={ROUTES.switchHome.path}>
              <span>Enterainment</span>
            </Link>
          </li>
          <li className={`relative text-[0.75vw]`}>
            {isEduction && (
              <div
                className={`absolute bottom-0 left-[10%] right-0 w-[80%] ${activeClassName}`}
              />
            )}
            <Link to={ROUTES.switchEducation.path}>
              <span className={` border-x-2 px-[0.75vw] text-[0.75vw]`}>
                Education
              </span>
            </Link>
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
        <a
          onClick={() => navigate(ROUTES.switchUsers.path)}
          className="cursor-pointer"
        >
          {imageId === "3" ? (
            <KidsImage className="w-[2vw]" />
          ) : (
            <img src={imageSrc} className="w-[2vw]" alt="nav icon" />
          )}
        </a>
      </div>
    </motion.header>
  );
};

export default HomeHeader;
