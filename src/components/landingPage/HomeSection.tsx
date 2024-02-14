import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      // animate={{ opacity: 1 }}
      className="4xl:h-[1280px] h-[550px] w-full text-white md:h-[550px] xl:h-[750px] 3xl:h-[980px]"
    >
      <div className="relative h-full w-full bg-gradient-to-r from-black/40 to-black/40">
        <div className="4xl:pb-[4%] absolute flex h-full w-full items-end justify-center pb-[25%] pt-16 md:pb-[6%] xl:pb-[10%] 2xl:pb-[4%] 3xl:pb-[6%]">
          <div className="4xl:w-[20%] z-10 flex w-[54%] flex-col items-center justify-center text-white md:w-[35%] xl:w-[32%] 2xl:w-[33%] 3xl:w-[25%]">
            <motion.h1
              // initial={{ x: "100vw" }}
              // animate={{ x: 0, transition: { duration: 0.5 } }}
              className="4xl:pb-10 4xl:text-[56pt] w-full flex-1 text-center text-xl font-extrabold !leading-tight sm:text-2xl xl:text-[41px] 2xl:text-6xl"
            >
              إنتاجات أصلية وأكثر من 800 ساعة من المحتوى العربي الحصري
            </motion.h1>
            <div className="flex w-full flex-1 justify-center gap-4 pt-5 sm:pt-8">
              <input
                placeholder="عنوان البريد الإلكتروني"
                className="4xl:px-4 4xl:py-6 4xl:text-xl flex-1 rounded-[5px] border-[.5px] bg-[#00000061] px-4 py-2 text-[8px] placeholder-[#FFFFFF63] outline-none sm:text-[12px] md:py-3 3xl:px-2 3xl:py-4 3xl:text-[1.2em]"
              />
              <button
                onClick={() =>
                  navigate("/home/ddf7aeebdb64677682cbbf0d967a4a92")
                }
                className="4xl:px-16 4xl:text-3xl rounded-[5px] bg-[#5F2CFF] px-2 py-2 text-xs font-bold text-white md:px-12 md:py-2 3xl:px-16 md:text-lg 3xl:text-2xl"
              >
                أبدأ الآن
              </button>
            </div>
            <motion.p
              // initial={{ y: "100vh" }}
              // animate={{ y: 0, transition: { duration: 0.5 } }}
              className="4xl:pb-8 4xl:pt-20 4xl:text-2xl w-full pb-4 pt-4 text-center text-[12px] !leading-tight sm:pt-10 sm:text-sm xl:text-lg 3xl:pb-8 3xl:pt-20"
            >
              {/* {truncateString("LOSERS", 150)}*/}
              .استمتع بعالم من المحتوى العربي <br />
              الترفيهي والتعليمي المتنوع
            </motion.p>
            <strong className="4xl:text-2xl z-30 w-full pb-4 text-center text-[12px] font-bold sm:text-sm xl:text-lg 3xl:-mb-4 3xl:pt-4">
              .مجاني بالكامل
            </strong>
          </div>
        </div>
        <img
          alt={"faid"}
          src={require("../../assets/fiad.png")}
          className="absolute h-full w-full object-cover"
        />
        <img
          alt={"banner"}
          src={require("../../assets/banner.png")}
          className="h-full w-full object-cover"
        />
      </div>
    </motion.section>
  );
};

export default HomeSection;
