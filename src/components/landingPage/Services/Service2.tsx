import { HTMLProps } from "react";
import Container from "./Container";
import HeaderTitle from "./HeaderTitle";
import HeaderTop from "./HeaderTop";
import SectionTags from "./SectionTags";

const Service2 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pt-[4.85vw] text-center text-white">
      <div className="w-full">
        <HeaderTop>
          محتــــوى لجميـع <p className="text-[#4D17CE]">أفراد الأسرة</p>
        </HeaderTop>
        <div className="relative m-auto flex w-full justify-center">
          <div className="flex w-[100%]">
            <img
              src={require("../../../assets/service2.png")}
              className="h-full w-[100%] object-contain"
            />
          </div>
          <div className="absolute right-0 top-1/2 flex flex-1 -translate-y-1/2 transform flex-col items-end justify-center text-end">
            <HeaderTitle>
              سوف يستمتع أطفالك <br />
              <span className="text-[#27FF55]">بساعات من التعليم</span>
              <br /> والترفيه واستكشاف عوالم
              <br /> مختلفة والتعرف على
              <br /> شخصيات جديدة من العروض <br />
              .التي يمكنك الوثوق بها
            </HeaderTitle>
            {/* <h3 className="leading-tight xl:text-[35px] 2xl:text-[30px] 4xl:text-[65px]">
              سوف يستمتع أطفالك <br />
              <span className="text-[#27FF55]">بساعات من التعليم</span>
              <br /> والترفيه واستكشاف عوالم
              <br /> مختلفة والتعرف على
              <br /> شخصيات جديدة من العروض <br />
              التي يمكنك الوثوق بها{" "}
            </h3> */}
            <SectionTags />
            {/* <div className="mt-4 flex justify-center">
              <img
                src={require("../../../assets/tags.png")}
                className="h-[55px] py-4 4xl:h-[75px]"
              />
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service2;
