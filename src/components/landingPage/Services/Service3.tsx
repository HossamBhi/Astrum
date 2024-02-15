import { HTMLProps } from "react";
import Container from "./Container";
import HeaderTop from "./HeaderTop";
import HeaderTitle from "./HeaderTitle";
import { motion } from "framer-motion";
import SectionTags from "./SectionTags";

const Service3 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pt-[4.85vw] text-center text-white">
      <div className="w-full">
        <HeaderTop>
          تجربـة عصـر جديـد
          <p>
            من
            <span className="text-[#4D17CE]"> التعليم </span>
          </p>
        </HeaderTop>

        <div className="m-auto flex w-full justify-between gap-4">
          <div className="flex w-[30%] flex-col items-end justify-center text-end">
            <HeaderTitle>
              محتوى <span className="text-[#27FF55]">متنوع</span> من التعليم
              <br /> <span>!</span>الترفيهي الحصري
            </HeaderTitle>
            <SectionTags />
          </div>
          <div className="mr-0 flex w-[40%]">
            <motion.video
              poster={process.env.PUBLIC_URL + "imgs/home/service3.png"}
              playsInline
              controls={false}
              autoPlay
              loop
              muted
              className="h-full w-full rounded-[2vw] object-fill"
            >
              <source
                src={process.env.PUBLIC_URL + "/Switch_Education_Website.mp4"}
                type="video/mp4"
              />
            </motion.video>
            {/* <img
              src={require("../../../assets/service3.png")}
              className="h-full w-full object-fill"
            /> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service3;
