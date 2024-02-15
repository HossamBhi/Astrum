import { motion } from "framer-motion";
import { IMAGE_PATH } from "../../services/apis/endpoints";
import { movieProps } from "../../utils/types";

const MovieRowCard = ({ item }: { item: movieProps }) => (
  <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
    <img
      alt={item.title}
      src={`${IMAGE_PATH}w500${item?.poster_path}`}
      className="block h-auto w-full object-cover"
    />
    <motion.div
      whileHover={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="absolute right-0 top-0 h-full w-full from-black/80 p-4 text-white hover:bg-gradient-to-t"
    >
      <p className="codecPro-bold flex h-full items-end whitespace-normal pb-2 sm:text-xs md:text-sm">
        {item.title}
      </p>
    </motion.div>
  </div>
);

export default MovieRowCard;
