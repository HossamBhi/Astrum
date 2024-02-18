import { Carousel, IconButton } from "@material-tailwind/react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import HeroSection from "./HeroSection";

export function HomeCarausel() {
  const [activePage, setActivePage] = useState(0);
  return (
    <Carousel
      placeholder={null}
      // className="h-[80vw] max-h-[80vw]"
      className="custom-carousel h-[65vh] pb-5 md:h-[45vh] xl:h-[75vh] 2xl:h-[85vh]"
      // autoplay
      loop
      navigation={({ setActiveIndex, activeIndex, length }) => {
        setActivePage(activeIndex);
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
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-1.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner1-logo.png",
          flag: "top 10",
          serious: 1,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner1-flag.png",
          location: "في الإمارات العربية المتحدة",
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
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-2.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner2-logo.png",
          flag: "",
          isComming: true,
          serious: 1,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner6-flag.png",
          location: 'DECEMBER 2',
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL DECUMENTARY
            </>
          ),
        },
        {
          title: "image 9",
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-9.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner9-logo.png",
          flag: "top 10",
          serious: 3,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner6-flag.png",
          location: "في المملكة العربية السعودية",
          copyRights: <></>,
          x: "فيلم وثائقي"
        },
        {
          title: "image 3",
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-8.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner8-logo.png",
          flag: "",
          isComming: true,
          serious: 3,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner1-flag.png",
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
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-7.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner7-logo.png",
          flag: "top 10",
          serious: 1,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner6-flag.png",
          location: "في المملكة العربية السعودية",
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL DECUMENTARY
            </>
          ),
        },
        {
          title: "image 3",
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-4.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner4-logo.png",
          flag: "",
          isComming: true,
          serious: 1,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner6-flag.png",
          location: 'DECEMBER 2',
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
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-6.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner6-logo.png",
          flag: "top 10",
          serious: 1,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner6-flag.png",
          location: "في المملكة العربية السعودية",
          copyRights: <></>,
        },
        {
          title: "image 3",
          des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
          banner: process.env.PUBLIC_URL + "/imgs/banners/Slider-3.webp",
          logo: process.env.PUBLIC_URL + "/imgs/banners/banner3-logo.png",
          flag: "",
          isComming: true,
          serious: 3,
          epsiod: 1,
          tags: process.env.PUBLIC_URL + "/imgs/banners/banner6-flag.png",
          location: 'DECEMBER 2',
          copyRights: (
            <>
              A{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              ORIGINAL DECUMENTARY
            </>
          ),
        },
        // {
        //   title: "image 3",
        //   des: `برنامج وثائقي يقدم حلقات دورية تعكس التطورات والأخبار في دولة الإمارات\n  لعربية المتحدة. يتخذ البرنامج من الشيخ زايد بن سلطان آل نهيان، المؤسس \n.الراحل للدولة، رمزًا للرؤية والإرث الذي يستمر في تشكيل مستقبل الإمارات`,
        //   banner: process.env.PUBLIC_URL + "/imgs/banners/12.webp",
        //   logo: process.env.PUBLIC_URL + "/imgs/banners/banner1-logo.png",
        //   flag: "top 10",
        //   serious: 1,
        //   epsiod: 1,
        //   tags: process.env.PUBLIC_URL + "/imgs/banners/banner1-flag.png",
        //   location: "في الإمارات العربية المتحدة",
        // },
        // {
        //   title: "image 3",
        //   des:`مستقبل الرعاية الصحية, زراعة الرقائق الدقيقة ستصبح الرعاية الصحية \nرقمية بالكامل في أقل من 30 عاماً، وستصبح الزيارات إلى الطبيب غير ضرورية`,
        //   banner: process.env.PUBLIC_URL + "/imgs/banners/test.webp",
        //   logo: process.env.PUBLIC_URL + "/imgs/banners/banner1-logo.png",
        //   flag: "top 10",
        //   serious: 1,
        //   epsiod: 1,
        //   tags: process.env.PUBLIC_URL + "/imgs/banners/banner1-flag.png",
        //   location: "في الإمارات العربية المتحدة",
        // },
      ].map((item, index) => (
        <HeroSection key={index} item={item} />
      ))}
    </Carousel>
  );
}
