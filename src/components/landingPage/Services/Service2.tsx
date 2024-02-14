import { HTMLProps } from "react";
import Container from "./Container";
import HeaderTitle from "./HeaderTitle";
import HeaderTop from "./HeaderTop";

const Service2 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pt-[75px] text-center text-white md:px-[4.5%] xl:px-[4.5%] 2xl:px-[17%]">
      <div className="w-full">
        {/* <h2 className="pb-[55px] text-center text-[44px] font-extrabold 4xl:text-[100px]">
          محتــــوى لجميـع <p className="text-[#4D17CE]">أفراد الأسرة</p>
        </h2> */}
        <HeaderTop>
          محتــــوى لجميـع <p className="text-[#4D17CE]">أفراد الأسرة</p>
        </HeaderTop>
        <div className="relative m-auto flex w-full justify-center">
          <div className="flex w-[100%]">
            <img
              src={require("../../../assets/service2.png")}
              className="h-full object-contain md:w-[80%] 2xl:w-[100%]"
            />
          </div>
          <div className="absolute top-1/2 flex flex-1 -translate-y-1/2 transform flex-col items-end justify-center text-end md:right-0 2xl:-right-[100px]">
            <HeaderTitle>
              سوف يستمتع أطفالك <br />
              <span className="text-[#27FF55]">بساعات من التعليم</span>
              <br /> والترفيه واستكشاف عوالم
              <br /> مختلفة والتعرف على
              <br /> شخصيات جديدة من العروض <br />
              التي يمكنك الوثوق بها{" "}
            </HeaderTitle>
            {/* <h3 className="leading-tight xl:text-[35px] 2xl:text-[30px] 4xl:text-[65px]">
              سوف يستمتع أطفالك <br />
              <span className="text-[#27FF55]">بساعات من التعليم</span>
              <br /> والترفيه واستكشاف عوالم
              <br /> مختلفة والتعرف على
              <br /> شخصيات جديدة من العروض <br />
              التي يمكنك الوثوق بها{" "}
            </h3> */}
            <div className="mt-4 flex justify-center">
              <img
                src={require("../../../assets/tags.png")}
                className="4xl:h-[75px] h-[55px] py-4"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service2;
