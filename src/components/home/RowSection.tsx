import { motion } from "framer-motion";
import { HTMLProps } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useWindowDimensions } from "../../hooks";
type RowSectionProps = {
  title: string | JSX.Element;
  requestUrl: string;
  id: number;
};

const RowSection = ({ title, requestUrl, id }: RowSectionProps) => {
  const { width, height } = useWindowDimensions();
  // const [movies, setMovies] = useState<any>([
  //   { poster_pat: require("../../assets/movies/2@2x.png") },
  // ]);

  // useEffect(() => {
  //   axios({ url: requestUrl }).then(({ data }) => setMovies(data.results));
  // }, [requestUrl]);

  const slideLeft = () => {
    const slider = document.getElementById("slider" + title);
    if (slider) {
      // if (slider.scrollLeft === 0) {
      //   return (slider.scrollLeft = movies?.length * 280);
      // }
      slider.scrollLeft = slider?.scrollLeft - 500;
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider" + title);
    if (slider) {
      // if (slider.scrollLeft === movies?.length * 280) {
      //   return (slider.scrollLeft = 0);
      // }
      slider.scrollLeft = slider?.scrollLeft + 500;
    }
  };

  const MovieCard = ({ src, alt }: HTMLProps<HTMLImageElement>) => (
    <motion.div
      whileHover={{
        borderWidth: 2,
        transition: {duration: 0}
      }} // className="relative inline-block cursor-pointer p-2"
      className="relative m-2 inline-block w-[160px] cursor-pointer overflow-hidden rounded-[14px] border-[#4D17CE] sm:w-[200px] md:w-[18%]"
    >
      <motion.img
        // className="h-[12vw] w-full object-cover"
        className="block h-auto w-full object-cover"
        src={src}
        alt={alt ?? "no alt"}
      />
    </motion.div>
  );
  const MovieCardAnimated = ({ src, alt }: HTMLProps<HTMLImageElement>) => (
    <motion.div
      initial={{ width: width < 1920 ? "24vw" : "17vw" }}
      // animate={{ width: "80%" }}
      whileHover={{
        width: width < 1920 ? "45vw" : "37vw",
        // minWidth: "150%",
        // originY: -10,
        transition: { duration: 0.25, },
      }}
      className="relative inline-block cursor-pointer p-2"
      // className="relative inline-block cursor-pointer px-[0.5vw]"
    >
      <motion.img
        // className="h-[12vw] w-full object-cover"
        className="block h-[200px] w-full object-cover xl:h-[314px] 2xl:h-[450px] 3xl:h-[614px]"
        src={src}
        alt={alt ?? "no alt"}
      />
    </motion.div>
  );

  return (
    <motion.section>
      <h2 className="codecPro-bold w-full px-[3vw] pb-[1vw] pt-[2vw] text-right text-[2vw] text-white">
        {title}
      </h2>
      <div className="group relative flex items-center" dir="rtl">
        <MdChevronLeft
          className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          onClick={slideLeft}
          size={40}
        />
        <div
          id={"slider" + title}
          className="no-scrollbar relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap"
        >
          {id === 2 ? (
            <>
              <MovieCardAnimated
                src={require("../../assets/movies2/thumbnaillTheLastExit.jpg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/thumbnaillThePlanetCafter.jpg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/thumbnailtech.jpg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/zayed.jpg")}
              />
              <MovieCardAnimated src={require("../../assets/movies2/ze.jpg")} />
              <MovieCardAnimated
                src={require("../../assets/movies2/free.jpg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/hadara.jpg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/thumbnail-l-Mission-8.jpg")}
              />

              {/* <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies2/1@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies2/2@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div> */}
            </>
          ) : (
            <>
              {/* <MovieCard src={require("../../assets/movies/2@2x.png")} /> */}
              <MovieCard src={require("../../assets/movies/3@2x.png")} />
              <MovieCard src={require("../../assets/movies/4@2x.png")} />
              <MovieCard src={require("../../assets/movies/5@2x.png")} />
              <MovieCard src={require("../../assets/movies/6@2x.png")} />
              {/* <MovieCard src={require("../../assets/movies/2@2x.png")} /> */}
              {/* <MovieCard src={require("../../assets/movies/2@2x.png")} /> */}
              <MovieCard src={require("../../assets/movies/3@2x.png")} />
              <MovieCard src={require("../../assets/movies/4@2x.png")} />
              <MovieCard src={require("../../assets/movies/5@2x.png")} />
              <MovieCard src={require("../../assets/movies/6@2x.png")} />
              {/* <MovieCard src={require("../../assets/movies/2@2x.png")} /> */}
              <MovieCard src={require("../../assets/movies/4@2x.png")} />
              <MovieCard src={require("../../assets/movies/5@2x.png")} />
              <MovieCard src={require("../../assets/movies/6@2x.png")} />
            </>
          )}
          {/* {movies?.map((item: any) => (
            <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
              <img
                src={require("../../assets/movies/2@2x.png")}
                className="block h-auto w-full object-cover"
              />
              <motion.div
                whileHover={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute right-0 top-0 h-full w-full from-black/80 p-4 text-white hover:bg-gradient-to-t"
              >
                <p className="flex h-full items-end whitespace-normal pb-2 codecPro-bold sm:text-xs md:text-sm">
                  {item.title}
                </p>
              </motion.div>
            </div>
          ))} */}
        </div>
        <MdChevronRight
          className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover:block"
          onClick={slideRight}
          size={40}
        />
      </div>
    </motion.section>
  );
};
export default RowSection;
