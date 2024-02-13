import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HomeSection = () => {
  const navigate = useNavigate();
  return (
    <motion.section
      // animate={{ opacity: 1 }}
      className="h-[550px] w-full text-white md:h-[550px] xl:h-[750px] 3xl:h-[1280px]"
    >
      <div className="relative h-full w-full bg-gradient-to-r from-black/40 to-black/40">
        <div className="absolute flex h-full w-full items-end justify-center pb-[25%] xl:pb-[10%] pt-16 2xl:pb-[4%]">
          <div className="z-10 flex w-[54%] flex-col items-center justify-center text-white md:w-[50%] xl:w-[33%] 3xl:w-[20%]">
            <motion.h1
              // initial={{ x: "100vw" }}
              // animate={{ x: 0, transition: { duration: 0.5 } }}
              className="w-full flex-1 text-center text-xl font-extrabold !leading-tight sm:text-2xl xl:text-[41px] 2xl:text-6xl 3xl:pb-10 3xl:text-[56pt]"
            >
              إنتاجات أصلية وأكثر من 800 ساعة من المحتوى العربي الحصري
            </motion.h1>
            <div className="flex w-full flex-1 justify-center gap-4 pt-5 sm:pt-8">
              <input
                placeholder="عنوان البريد الإلكتروني"
                className="flex-1 rounded-[5px] border-[.5px] bg-[#00000061] px-4 py-2 text-[8px] placeholder-[#FFFFFF63] outline-none sm:text-[12px] 3xl:px-4 3xl:py-6 3xl:text-xl"
              />
              <button
                onClick={() => navigate("/home")}
                className="rounded-[5px] bg-[#5F2CFF] px-2 py-2 text-xs font-bold text-white md:px-12 md:py-2 3xl:px-16 3xl:text-3xl"
              >
                أبدأ الآن
              </button>
            </div>
            <motion.p
              // initial={{ y: "100vh" }}
              // animate={{ y: 0, transition: { duration: 0.5 } }}
              className="w-full pb-4 pt-4 text-center text-[12px] !leading-tight sm:pt-10 sm:text-sm xl:text-lg 3xl:pb-8 3xl:pt-20 3xl:text-2xl"
            >
              {/* {truncateString("LOSERS", 150)}*/}
              .استمتع بعالم من المحتوى العربي <br />
              الترفيهي والتعليمي المتنوع
            </motion.p>
            <strong className="z-30 w-full pb-4 text-center text-[12px] font-bold sm:text-sm xl:text-lg 3xl:text-2xl">
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
