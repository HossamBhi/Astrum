import { HTMLProps } from "react";
import Container from "./Container";
import HeaderTop from "./HeaderTop";
import HeaderTitle from "./HeaderTitle";
import { motion } from "framer-motion";

const Service3 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="-mr-[100px] flex items-center justify-center pt-[75px] text-center text-white md:px-[4.5%] xl:px-[4.5%] 2xl:px-[17%]">
      <div className="w-full">
        <HeaderTop>
          تجربـة عصـر جديـد
          <p>
            من
            <span className="text-[#4D17CE]"> التعليم </span>
          </p>
        </HeaderTop>

        <div className="m-auto flex w-full justify-between gap-8">
          <div className="flex w-[30%] flex-col items-end justify-center text-end">
            <HeaderTitle>
              محتوى <span className="text-[#27FF55]">متنوع</span> من التعليم
              <br /> <span>!</span>الترفيهي الحصري
            </HeaderTitle>
            <div className="flex justify-center">
              <img
                src={require("../../../assets/tags.png")}
                className="h-[55px] py-4 4xl:h-[75px]"
              />
            </div>
          </div>
          <div className="mr-0 flex w-[40%] md:mr-[8%] 2xl:mr-0 2xl:w-[50%]">
            <motion.video
              // poster={require("../assets/landscape.png")}
              playsInline
              controls={false}
              autoPlay
              loop
              muted
              className="h-full w-full rounded-3xl object-fill"
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
