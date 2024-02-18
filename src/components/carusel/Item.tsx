import { motion } from "framer-motion";

const Item = ({
  item,
  isActive,
}: {
  item: { image: string; title: string; description: string };
  isActive: boolean;
}) => {
  return (
    <motion.div className="relative h-full w-full">
      <motion.img
        // initial={{ opacity: 0 }}
        // animate={
        //   isActive
        //     ? { opacity: 1 }
        //     : { opacity: 0, transition: { duration: 1 } }
        // }
        src={item.image}
        alt={item.title}
        className="h-full w-full object-fill"
      />
      <div className="bottom-0 absolute left-0 right-0 top-0 h-full w-full bg-[#00000050] p-4">
        <motion.h2
          //   initial={{ x: "-100vw" }}
          //   animate={isActive ? { x: 0 } : { x: "-100vw", opacity: 0 }}
          className="text-9xl text-white"
        >
          {/* {item.title} */}
        </motion.h2>
        <motion.p>{item.description}</motion.p>
      </div>
    </motion.div>
  );
  return (
    <motion.div className="relative h-[45.29vw] w-full">
      <motion.img
        // initial={{ opacity: 0 }}
        // animate={
        //   isActive
        //     ? { opacity: 1 }
        //     : { opacity: 0, transition: { duration: 1 } }
        // }
        src={item.image}
        alt={item.title}
        className="h-full w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#00000050] p-4">
        <motion.h2
          //   initial={{ x: "-100vw" }}
          //   animate={isActive ? { x: 0 } : { x: "-100vw", opacity: 0 }}
          className="text-9xl text-white"
        >
          {/* {item.title} */}
        </motion.h2>
        <motion.p>{item.description}</motion.p>
      </div>
    </motion.div>
  );
};

export default Item;
