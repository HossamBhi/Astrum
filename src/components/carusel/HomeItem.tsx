import { motion } from "framer-motion";

const HomeItem = ({
  item,
  isActive,
}: {
  item: { image: string; title: string; description: string };
  isActive: boolean;
}) => {
  return (
    <motion.div className="h-full w-full relative">
      <motion.img
        initial={{ opacity: 0 }}
        animate={
          isActive
            ? { opacity: 1 }
            : { opacity: 0, transition: { duration: 1 } }
        }
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 bottom-0, right-0 left-0 w-full h-full bg-[#00000050] p-4">
        <motion.h2
          initial={{ x: "-100vw" }}
          animate={isActive ? { x: 0 } : { x: "-100vw", opacity: 0 }}
          className="text-white text-9xl"
        >
          {item.title}
        </motion.h2>
        <motion.p>{item.description}</motion.p>
      </div>
    </motion.div>
  );
};

export default HomeItem;
