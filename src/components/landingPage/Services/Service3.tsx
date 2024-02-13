import { HTMLProps } from "react";
import Container from "./Container";

const Service3 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="-mr-[100px] flex items-center justify-center pt-[75px] text-center text-white md:px-[4.5%] xl:px-[4.5%] 2xl:px-[17%]">
      <div className="w-full">
        <h2 className="pb-[55px] text-center text-[44px] font-extrabold 3xl:pb-[200px] 3xl:text-[100px]">
          تجربـة عصـر جديـد
          <p>
            من
            <span className="text-[#4D17CE]"> التعليم </span>
          </p>
        </h2>
        <div className="m-auto flex w-full justify-between gap-8">
          <div className="flex w-[30%] flex-col items-end justify-center text-end">
            <h3 className="font-light leading-tight xl:text-[35px] 3xl:text-[68px] 3xl:leading-[86px]">
              محتوى <span className="text-[#27FF55]">متنوع</span> من التعليم
              <br /> <span>!</span>الترفيهي الحصري
            </h3>
            <div className="flex justify-center">
              <img
                src={require("../../../assets/tags.png")}
                className="h-[55px] py-4 3xl:h-[75px]"
              />
            </div>
          </div>
          <div className="flex w-[40%] 2xl:w-[50%] md:mr-[8%] mr-0 2xl:mr-0">
            <img
              src={require("../../../assets/service3.png")}
              className="h-full w-full object-fill"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service3;
