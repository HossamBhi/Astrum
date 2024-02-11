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

  if (!movie) {
    return <></>;
  }

  return (
    <motion.section className="h-[550px] w-full text-white md:h-[650px] xl:h-[1080px]">
      <div className="relative h-full w-full">
        <div className="absolute flex h-full w-full items-center justify-center bg-gradient-to-r from-black">
          <div className="flex w-full flex-col justify-center p-4 md:p-8">
            <h1 className="text-3xl font-bold md:text-5xl 2xl:w-[50%] xl:text-7xl">
              {movie?.title}
            </h1>
            <div className="my-4 xl:my-7">
              <button className="border border-gray-300 bg-gray-300 px-5 py-2 font-bold text-black xl:text-2xl">
                Play
              </button>
              <button className="ml-5 border border-gray-300 px-5 py-2 font-bold text-white xl:text-2xl">
                Watch Later
              </button>
            </div>
            <p className="text-sm text-gray-400 xl:text-xl">
              Released: {movie?.release_date}
            </p>
            <p className="w-full text-gray-200 md:max-w-[70%] lg:max-w-[50%] xl:max-w-[45%] xl:text-3xl">
              {truncateString(movie?.overview, 150)}
            </p>
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
