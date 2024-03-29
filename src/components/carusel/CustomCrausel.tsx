import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import Item from "./Item";
import { AnimatePresence } from "framer-motion";
import MovieCard from "./MovieCard";

export function CustomCrausel() {
  const [activePage, setActivePage] = useState(0);
  return (
    <AnimatePresence>
      <Carousel
        placeholder={null}
        // className="xl:h-[100vh]"
        autoplay
        onPlay={() => console.log("Play")}
        loop
        onAnimationStartCapture={(props) => console.log({ props })}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          setActivePage(activeIndex);
          return (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                  }}
                />
              ))}
            </div>
          );
        }}
      >
        {[
          {
            title: "image 1",
            description: "",
            image: require("../../assets/4.png"),
            // "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          },
          {
            title: "image 2",
            description: "",
            image: require("../../assets/photo2.png"),
            // "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          },
          {
            title: "image 3",
            description: "",
            image: require("../../assets/photo3.png"),
            // "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
        ].map((item, index) => (
          <Item key={item.title} item={item} isActive={activePage === index} />
        ))}
      </Carousel>
    </AnimatePresence>
  );
}
