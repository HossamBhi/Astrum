import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IMAGE_PATH, MOVIES } from "../../services/apis/endpoints";
import { MOVIES_DUMMY } from "../../services/data";
import { truncateString } from "../../utils/helper";

const HomeSection = () => {
  const [movies, setMovies] = useState([]);
  const movie: (typeof MOVIES_DUMMY)[0] =
    movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios({ method: "GET", url: MOVIES.popular }).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <motion.section
      animate={{ opacity: 1 }}
      className="h-[450px] w-full text-white md:h-[550px] xl:h-[700px] 2xl:h-[1080px]"
    >
      <div className="relative h-full w-full">
        <div className="absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-black">
          <div className="flex w-full flex-col justify-center p-4 md:p-8">
            <motion.h1
              initial={{ x: "100vw" }}
              animate={{ x: 0, transition: { duration: 0.5 } }}
              className="codecPro-bold text-3xl md:text-5xl 2xl:w-[50%] 2xl:text-7xl"
            >
              {movie?.title}
            </motion.h1>
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: 0, transition: { duration: 0.5 } }}
              className="my-4 xl:my-7"
            >
              <button className="codecPro-bold border border-gray-300 bg-gray-300 px-5 py-2 text-black 2xl:text-2xl">
                Play
              </button>
              <button className="codecPro-bold ml-5 border border-gray-300 px-5 py-2 text-white 2xl:text-2xl">
                Watch Later
              </button>
            </motion.div>
            <motion.p
              initial={{ x: "-100vw" }}
              animate={{ x: 0, transition: { duration: 0.5 } }}
              className="text-sm text-gray-400 2xl:text-xl"
            >
              Released: {movie?.release_date}
            </motion.p>
            <motion.p
              initial={{ y: "100vh" }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:text-2xl 2xl:max-w-[45%] 2xl:text-3xl"
            >
              {truncateString(movie?.overview, 150)}
            </motion.p>
          </div>
        </div>
        <img
          alt={movie?.title}
          src={`${IMAGE_PATH}original${movie?.backdrop_path}`}
          className="h-full w-full object-fill"
        />
      </div>
    </motion.section>
  );
};

export default HomeSection;
