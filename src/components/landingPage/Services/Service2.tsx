import { HTMLProps } from "react";
import Container from "./Container";
import Tag from "./Tag";

const Service2 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pt-[75px] text-center text-white md:px-[4.5%] xl:px-[4.5%] 2xl:px-[17%]">
      <div className="w-full">
        <h2 className="pb-[55px] text-center text-[44px] font-extrabold 3xl:text-[100px]">
          محتــــوى لجميـع <p className="text-[#4D17CE]">أفراد الأسرة</p>
        </h2>
        <div className="relative m-auto flex w-full justify-center">
          <div className="flex w-[100%]">
            <img
              src={require("../../../assets/service2.png")}
              className="h-full md:w-[80%] 2xl:w-[100%] object-fill"
            />
          </div>
          <div className="absolute md:right-0 2xl:-right-[100px] top-1/2 flex flex-1 -translate-y-1/2 transform flex-col items-end justify-center text-end">
            <h3 className="leading-tight xl:text-[35px] 2xl:text-[30px] 3xl:text-[65px]">
              سوف يستمتع أطفالك <br />
              <span className="text-[#27FF55]">بساعات من التعليم</span>
              <br /> والترفيه واستكشاف عوالم
              <br /> مختلفة والتعرف على
              <br /> شخصيات جديدة من العروض <br />
              التي يمكنك الوثوق بها{" "}
            </h3>
            <div className="flex justify-center mt-4">
              <img
                src={require("../../../assets/tags.png")}
                className="h-[55px] py-4 3xl:h-[75px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service2;
