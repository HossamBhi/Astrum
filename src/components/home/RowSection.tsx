import { motion } from "framer-motion";
import { HTMLProps } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useWindowDimensions } from "../../hooks";
import { project_places } from "../../utils/enum";
import { PROJECT_ID } from "../../utils/helper";
type RowSectionProps = {
  title: string | JSX.Element;
  requestUrl: string;
  id: number;
};

const RowSection = ({ title, requestUrl, id }: RowSectionProps) => {
  const { width } = useWindowDimensions();
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
        transition: { duration: 0 },
      }}
      className="relative m-2 inline-block w-[160px] cursor-pointer overflow-hidden rounded-[14px] border-[#4D17CE] sm:w-[200px] md:w-[18%]"
    >
      <motion.img
        className="block h-auto w-full object-cover"
        src={src}
        alt={alt ?? "no alt"}
      />
    </motion.div>
  );
  const MovieCardAnimated = ({ src, alt }: HTMLProps<HTMLImageElement>) => (
    <motion.div
      initial={{ width: width < 1920 ? "24vw" : "17vw" }}
      whileHover={{
        width: width < 1920 ? "45vw" : "37vw",
        transition: { duration: 0.25 },
      }}
      className="relative inline-block cursor-pointer p-2"
    >
      <motion.img
        className="block h-[200px] w-full object-cover xl:h-[314px] 2xl:h-[450px] 3xl:h-[614px]"
        src={src}
        alt={alt ?? "no alt"}
      />
    </motion.div>
  );
  const EducationCard = ({ src, alt }: HTMLProps<HTMLImageElement>) => (
    <motion.div
      // initial={{ width: width < 1920 ? "24vw" : "17vw" }}
      // whileHover={{
      //   width: width < 1920 ? "45vw" : "37vw",
      //   transition: { duration: 0.25 },
      // }}
      className="relative inline-block cursor-pointer p-2"
    >
      <motion.img
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
                src={require("../../assets/movies2/thumbnaillTheLastExit.jpeg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/thumbnaillThePlanetCafter.jpeg")}
              />
              <MovieCardAnimated
                src={
                  PROJECT_ID === project_places.kuwait
                    ? require("../../assets/movies2/thumbnailtech_kuwait.jpeg")
                    : require("../../assets/movies2/thumbnailtech.jpeg")
                }
              />
              <MovieCardAnimated
                src={
                  PROJECT_ID === project_places.kuwait
                    ? require("../../assets/movies2/zayed_kuwait.jpeg")
                    : require("../../assets/movies2/zayed.jpeg")
                }
              />
              <MovieCardAnimated
                src={
                  PROJECT_ID === project_places.kuwait
                    ? require("../../assets/movies2/ze_kuwait.jpeg")
                    : require("../../assets/movies2/ze.jpeg")
                }
              />
              <MovieCardAnimated
                src={
                  PROJECT_ID === project_places.kuwait
                    ? require("../../assets/movies2/free_kuwait.jpeg")
                    : require("../../assets/movies2/free.jpeg")
                }
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/hadara.jpeg")}
              />
              <MovieCardAnimated
                src={require("../../assets/movies2/thumbnail-l-Mission-8.jpeg")}
              />
            </>
          ) : id === 3 ? (
            <>
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />
              <EducationCard
                src={process.env.PUBLIC_URL + "/imgs/education/test.png"}
              />

              {/* <MovieCardAnimated
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
              /> */}
            </>
          ) : (
            <>
              <MovieCard src={require("../../assets/movies/3@2x.png")} />
              <MovieCard src={require("../../assets/movies/4@2x.png")} />
              <MovieCard src={require("../../assets/movies/5@2x.png")} />
              <MovieCard src={require("../../assets/movies/6@2x.png")} />
              <MovieCard src={require("../../assets/movies/3@2x.png")} />
              <MovieCard src={require("../../assets/movies/4@2x.png")} />
              <MovieCard src={require("../../assets/movies/5@2x.png")} />
              <MovieCard src={require("../../assets/movies/6@2x.png")} />
              <MovieCard src={require("../../assets/movies/4@2x.png")} />
              <MovieCard src={require("../../assets/movies/5@2x.png")} />
              <MovieCard src={require("../../assets/movies/6@2x.png")} />
            </>
          )}
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
