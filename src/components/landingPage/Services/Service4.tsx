import { HTMLProps } from "react";
import Container from "./Container";
import HeaderTitle from "./HeaderTitle";
import HeaderTop from "./HeaderTop";
import SectionTags from "./SectionTags";

const Service4 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pb-[4.85vw] pt-[4.85vw] text-center text-white">
      <div className="w-full xl:pb-[10%]">
        <HeaderTop>
          <span className="text-[#4D17CE]"> شــاهد </span>
          فــي أي وقت
          <p> ومن أي مكان</p>
        </HeaderTop>
        <div className="m-auto flex w-full justify-between gap-8">
          <div className="flex w-[40%]">
            <img
              // src={require("../../../assets/service4.png")}
              src={`${process.env.PUBLIC_URL}/imgs/home/service4.png`}
              className="h-full w-full object-fill"
              alt="mlti device"
            />
          </div>
          <div className="mr-0 flex flex-col items-end justify-center text-end md:mr-[8%] md:w-[50%] 2xl:mr-0 2xl:w-[40%]">
            {/* <h3 className="font-light leading-tight xl:text-[35px] 4xl:text-[68px] 4xl:leading-[86px]">
              قم <span className="text-[#27FF55]">بتحميل</span> المفضل لديك دون
              اتصال بالإنترنت، وكن على إطلاع بآخر الأعمال المميزة والحصرية
            </h3> */}
            <HeaderTitle>
              قم <span className="text-[#27FF55]">بتحميل</span> المفضل لديك دون
              <br />
              اتصال بالإنترنت، وكن على إطلاع <br /> .بآخر الأعمال المميزة
              والحصرية
            </HeaderTitle>
            <SectionTags />
            <p className="text-[1vw]">
              Apple TV | الهاتف | الجهاز اللوحي | الويب
              <br />
              التلفزيون الذكي | Android TV
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service4;
