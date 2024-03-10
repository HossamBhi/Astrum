import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="webp-bg relative h-[80vh] w-full text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${process.env.PUBLIC_URL + "/imgs/education/banner.jpg"}`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute flex h-full w-full justify-end `}>
        <div className="flex w-full flex-col px-[3vw] text-right text-[0.75vw] pt-[24vh]">
          <div className="flex-2 flex flex-col items-end justify-center px-[3vw]">
            <motion.p
              // initial={{ y: "100vh" }}
              // animate={{ y: 0, transition: { duration: 0.5 } }}
              className="codecPro-ExtraBold w-full whitespace-pre-line text-[2.25vw] text-white"
            >
              ,تعلم من الأفضل <br />
              .كن الأفضل
            </motion.p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
