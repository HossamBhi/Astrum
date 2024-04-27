import { Carousel } from "@material-tailwind/react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import HeroSection from "./HeroSection";
import { useWindowDimensions } from "../../hooks";
import VR from "../../assets/VR";
import FourK from "../../assets/FourK";
import { PROJECT_ID } from "../../utils/helper";
import { project_places } from "../../utils/enum";

const des =
  PROJECT_ID === project_places.kuwait
    ? "برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الكويت\n  يتخذ البرنامج من الامير مشعل الصباح\nرمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الكويت"
    : `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`;

export function HomeCarausel() {
  const { height } = useWindowDimensions();
  return (
    <Carousel
      placeholder={<></>}
      nextArrow={(props) => (
        <MdChevronRight
          className="absolute right-[0.5vw] top-2/4 block -translate-y-2/4 cursor-pointer rounded-full bg-white text-[1.75vw] opacity-50 hover:opacity-100"
          onClick={props.handleNext}
        />
      )}
      prevArrow={(props) => (
        <MdChevronLeft
          className="absolute left-[0.5vw] top-2/4 block -translate-y-2/4 cursor-pointer rounded-full bg-white text-[1.75vw] opacity-50 hover:opacity-100"
          onClick={props.handlePrev}
        />
      )}
      className={`custom-carousel h-[45vh] pb-5 ${height > 700 ? "md:h-[45vh]" : "md:h-[75vh]"} xl:h-[75vh] 2xl:h-[85vh]`}
      autoplay
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => {
        return (
          <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-sm transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-[#4D17CE]" : "w-4 bg-white"
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
          title: "image 3",
          des,
          banner: `${process.env.PUBLIC_URL}/imgs${
            PROJECT_ID === project_places.kuwait ? "/kuwait" : ""
          }/banners/Slider-1.png`,
          logo: `${process.env.PUBLIC_URL}/imgs${
            PROJECT_ID === project_places.kuwait ? "/kuwait" : ""
          }/banners/banner1-logo.png`,
          flag: "top 10",
          serious: 1,
          epsiod: 1,
          video: true,
          tags: <VR width={"7vw"} />,
          location:
            PROJECT_ID === project_places.kuwait
              ? "في دولة الكويت"
              : "في الإمارات العربية المتحدة",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL SHOW
            </>
          ),
        },
        {
          title: "image 3",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-2.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner2-logo.png",
          flag: "",
          isComming: true,
          serious: 1,
          epsiod: 1,
          tags: <FourK width={"7vw"} />,
          location: "DECEMBER 2",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL DOCUMENTARY
            </>
          ),
        },
        {
          title: "image 9",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-9.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner9-logo.png",
          flag: "top 10",
          serious: 3,
          epsiod: 1,
          tags: <FourK width={"7vw"} />,
          location:
            PROJECT_ID === project_places.kuwait
              ? "في دولة الكويت"
              : "في المملكة العربية السعودية",
          copyRights: <></>,
          x: "فيلم وثائقي",
        },
        {
          title: "image 3",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-8.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner8-logo.png",
          flag: "",
          isComming: true,
          serious: 3,
          epsiod: 1,
          tags: <VR width={"7vw"} />,
          location: "DECEMBER 2",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL SHOW
            </>
          ),
        },
        {
          title: "image 3",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-7.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner7-logo.png",
          flag: "top 10",
          serious: 1,
          epsiod: 1,
          tags: <FourK width={"7vw"} />,
          location:
            PROJECT_ID === project_places.kuwait
              ? "في دولة الكويت"
              : "في المملكة العربية السعودية",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL DOCUMENTARY
            </>
          ),
        },
        {
          title: "image 3",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-4.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner4-logo.png",
          flag: "",
          isComming: true,
          serious: 1,
          epsiod: 1,
          tags: <FourK width={"7vw"} />,
          location: "DECEMBER 2",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL SHORT FILM
            </>
          ),
        },
        {
          title: "image 3",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-6.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner6-logo.png",
          flag: "top 10",
          serious: 1,
          epsiod: 1,
          tags: <FourK width={"7vw"} />,
          location:
            PROJECT_ID === project_places.kuwait
              ? "في دولة الكويت"
              : "في المملكة العربية السعودية",
          copyRights: <></>,
        },
        {
          title: "image 3",
          des,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-3.png",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner3-logo.png",
          flag: "",
          isComming: true,
          serious: 3,
          epsiod: 1,
          tags: <FourK width={"7vw"} />,
          location: "DECEMBER 2",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL DOCUMENTARY
            </>
          ),
        },
      ].map((item, index) => (
        <HeroSection key={index} item={item} />
      ))}
    </Carousel>
  );
}
