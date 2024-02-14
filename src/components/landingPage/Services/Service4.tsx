import { HTMLProps } from "react";
import Container from "./Container";
import Tag from "./Tag";
import HeaderTop from "./HeaderTop";
import HeaderTitle from "./HeaderTitle";

const Service4 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="-mr-[100px] flex items-center justify-center pt-[75px] text-center text-white md:px-[4.5%] xl:px-[4.5%] 2xl:px-[17%]">
      <div className="w-full xl:pb-[10%]">
        <HeaderTop>
          <span className="text-[#4D17CE]"> شــاهد </span>
          فــي أي وقت
          <p> .وفي أي مكان</p>
        </HeaderTop>
        {/* <h2 className="pb-[55px] text-center text-[44px] font-extrabold 4xl:pb-[200px] 4xl:text-[100px]">
          <span className="text-[#4D17CE]"> شــاهد </span>
          فــي أي وقت
          <p> .وفي أي مكان</p>
        </h2> */}
        <div className="m-auto flex w-full justify-between gap-8">
          <div className="flex md:w-[40%] 2xl:w-[50%]">
            <img
              src={require("../../../assets/service4.png")}
              className="h-full w-full object-fill"
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
              اتصال بالإنترنت، وكن على إطلاع <br /> بآخر الأعمال المميزة
              والحصرية
            </HeaderTitle>
            <div className="flex justify-center">
              <img
                src={require("../../../assets/tags.png")}
                className="4xl:h-[75px] h-[55px] py-4"
              />
            </div>
            <p className="4xl:text-[27px] 4xl:leading-[38px] text-[16px]">
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
