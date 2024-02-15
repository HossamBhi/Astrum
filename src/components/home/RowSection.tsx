import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
type RowSectionProps = { title: string; requestUrl: string; id: number };

const RowSection = ({ title, requestUrl, id }: RowSectionProps) => {
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

  return (
    <motion.section>
      <h2 className="codecPro-bold w-full p-4 pb-2 pe-4 text-right text-white md:text-xl">
        {title}
      </h2>
      <div className="group relative flex items-center">
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
              <div className="relative inline-block cursor-pointer p-2">
                <img
                  src={require("../../assets/movies2/3@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
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
              </div>

              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies2/4@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block cursor-pointer p-2">
                <img
                  src={require("../../assets/movies2/3@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
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
              </div>

              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies2/4@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block cursor-pointer p-2">
                <img
                  src={require("../../assets/movies2/3@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
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
              </div>

              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies2/4@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block cursor-pointer p-2">
                <img
                  src={require("../../assets/movies2/3@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
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
              </div>

              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies2/4@2x.png")}
                  className="block h-[314px] w-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/2@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/3@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/4@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/5@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/6@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/2@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/2@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/3@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/4@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/5@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/6@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/2@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/4@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/5@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../../assets/movies/6@2x.png")}
                  className="block h-auto w-full object-cover"
                />
              </div>
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
