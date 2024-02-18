import { motion } from "framer-motion";
import { truncateString } from "../../utils/helper";
import { useWindowDimensions } from "../../hooks";

const HeroSection = ({
  item,
}: {
  item: {
    isComming?: boolean;
    title: string;
    banner: string;
    logo: string;
    des: string;
    flag: string;
    video?: string;
    serious: number;
    epsiod: number;
    tags: string;
    location: string;
    copyRights: JSX.Element;
    x?: string
  };
}) => {
  const { width } = useWindowDimensions();
  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="webp-bg h-full w-full text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${item.banner})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative h-full w-full">
        <div
          className={`absolute flex h-full w-full justify-end bg-gradient-to-t from-black via-white/10 to-black/40 ${width < 1480 ? "items-center" : "items-end"}`}
        >
          <div className="mb-[3.5vw] flex w-full flex-col items-end justify-center px-[3vw] text-right text-[0.75vw]">
            {item.flag && (
              <div className="mb-2 flex items-center justify-center rounded-[0.35vw] bg-[#27FF55] px-[1vw] text-black">
                <span className="codecPro-bold  text-center uppercase">
                  {item.flag}
                </span>
              </div>
            )}
            {item.isComming && (
              <motion.p
                // initial={{ y: "100vh" }}
                // animate={{ y: 0, transition: { duration: 0.5 } }}
                className="w-full whitespace-pre-line text-[0.75vw] text-white"
              >
                COMING SOON
              </motion.p>
            )}
            <motion.p
              // initial={{ y: "100vh" }}
              // animate={{ y: 0, transition: { duration: 0.5 } }}
              className={`w-full whitespace-pre-line text-[1vw] text-white ${item.isComming && "codecPro-bold text-[1.5vw]"}`}
            >
              {item.location}
            </motion.p>
            <img
              alt={item.title}
              src={item.logo}
              className="mt-[3vw] h-full w-[32%] object-fill"
            />
            <motion.p
              // initial={{ y: "100vh" }}
              // animate={{ y: 0, transition: { duration: 0.5 } }}
              className="mt-[3vw] w-full whitespace-pre-line text-[0.93vw] text-white"
            >
              {item.des}

              {/* {truncateString(item.des, 250)} */}
            </motion.p>
            <motion.div className="mb-[1.5vw] mt-[3.5vw] flex w-full items-center gap-6">
              <motion.span
                // initial={{ x: "-100vw" }}
                // animate={{ x: 0, transition: { duration: 0.5 } }}
                className="w-full flex-1 text-[1vw] text-gray-400"
              >
                {item.x ?? `الموسم ${item.serious} - الحلقة ${item.epsiod}`}
                
              </motion.span>

              <button
                onClick={() => alert("Comming soon")}
                className="rounded-[0.25vw] bg-[#4D17CE] px-[3vw] py-[.75vw] text-[1vw] text-white"
              >
                شاهد الآن
              </button>
            </motion.div>
            <div className="flex w-full items-center justify-between">
              <p className="text-[1.25vw]">{item.copyRights}</p>
              <img
                alt={item.title}
                src={item.tags}
                className="h-full w-[7vw] object-fill"
              />
            </div>
          </div>
        </div>
        {/* <img
          alt={item.des}
          src={item.banner}
          className="h-full w-full object-cover"
        /> */}
      </div>
    </motion.section>
  );
};

export default HeroSection;
