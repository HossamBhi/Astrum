import { motion } from "framer-motion";

const MovieCard = ({
  item,
  isActive,
}: {
  item: { image: string; title: string; description: string };
  isActive: boolean;
}) => {
  return (
    <motion.div className="relative h-[30%] w-full sm:h-full sm:w-[30%]">
      <motion.img
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <div className="bottom-0, absolute left-0 right-0 top-0 h-full bg-[#00000050] p-4 sm:w-full">
        <motion.h2 className="text-9xl text-white">{item.title}</motion.h2>
        <motion.p>{item.description}</motion.p>
      </div>
    </motion.div>
  );
};

export default MovieCard;
