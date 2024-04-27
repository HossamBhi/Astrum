import { HTMLProps } from "react";
import Container from "./Container";
import HeaderTop from "./HeaderTop";
import HeaderTitle from "./HeaderTitle";
import SectionTags from "./SectionTags";
import { PROJECT_ID } from "../../../utils/helper";
import { project_places } from "../../../utils/enum";

const Service1 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pt-[4.85vw] text-center text-white">
      <div className="w-full">
        <HeaderTop>
          محتــــوى حصــري <p className="text-[#4D17CE]">Switch على</p>
        </HeaderTop>

        <div className="m-auto flex w-full justify-center gap-[2vw]">
          <div className="flex flex-1 flex-col items-end text-end">
            <HeaderTitle>
              أدخل إلى عالم رائع من <br />
              <span className="text-[#27FF55]">المنتجات الأصلية</span> الحصرية
              <br />
              !في التعليم والترفيه
            </HeaderTitle>
            <SectionTags />
            <p className="text-[1vw]">
              أفلام وثائقية | أفلام قصيرة | عروض <br />
              بودكاست | التعليم | الأسرة والطفل
              <br /> .وغيرها الكثير |
            </p>
          </div>
          <div className="flex w-[66%] gap-[2vw]">
            <img
              alt="أفلام وثائقية | أفلام قصيرة"
              src={`${process.env.PUBLIC_URL}${
                PROJECT_ID === project_places.kuwait
                  ? "/imgs/kuwait/home/service1-1.png"
                  : "/imgs/home/service1-1.jpg"
              }`}
              className="h-full w-[60%] object-fill xl:w-[60%]"
            />
            <img
              alt="التعليم الأسرة والطفل"
              src={`${process.env.PUBLIC_URL}/imgs/home/service1-2.png`}
              className="w-[50%] object-fill"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Service1;
