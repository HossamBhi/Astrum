import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { movieProps } from "../../utils/types";
import { MovieRowCard } from "../cards";
type RowSectionProps = { title: string; requestUrl: string };

const RowSectioncopy = ({ title, requestUrl }: RowSectionProps) => {
  const [movies, setMovies] = useState<movieProps[]>([]);

  useEffect(() => {
    axios({ url: requestUrl }).then(({ data }) => setMovies(data.results));
  }, [requestUrl]);

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
    <motion.section
      animate={{ x: 0, transition: { duration: 0.5 } }}
      initial={{ x: "100vw" }}
      transition={{ delay: 0.5 }}
    >
      <h2 className="codecPro-bold m-4 w-fit pb-2 pe-4 text-white md:text-xl">
        {title} ({movies.length})
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
          {movies?.map((item, index) => (
            <MovieRowCard item={item} key={item.title + index} />
          ))}
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
export default RowSectioncopy;
