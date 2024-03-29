import { HTMLProps } from "react";
import Container from "./Container";

const Service1 = ({ children }: HTMLProps<HTMLDivElement>) => {
  return (
    <Container className="flex items-center justify-center pt-[75px] text-center text-white md:px-[4.5%] xl:px-[4.5%] 2xl:px-[17%]">
      <div className="w-full">
        <h2 className="pb-[55px] text-center text-[44px] font-extrabold 3xl:text-[100px]">
          محتــــوى حصــري <p className="text-[#4D17CE]">Switch على</p>
        </h2>
        <div className="m-auto flex w-full justify-center gap-8">
          <div className="flex flex-1 flex-col items-end justify-between  text-end">
            <h3 className="leading-tight xl:text-[35px]  3xl:text-[67px]">
              ادخل إلى عالم رائع من{" "}
              <span className="text-[#27FF55]">المنتجات الأصلية</span> الحصرية
              في التعليم والترفيه
            </h3>
            <div className="flex justify-center">
              <img
                src={require("../../../assets/tags.png")}
                className="h-[55px] py-4 3xl:h-[75px]"
              />
            </div>
            <p className="text-[10px] xl:text-[16px] 3xl:text-[27px] 3xl:leading-[38px]">
              أفلام وثائقية | أفلام قصيرة | عروض <br />
              بودكاست | التعليم الأسرة والطفل
              <br /> وغيرها الكثير
            </p>
          </div>
          <div className="flex w-[66%] gap-8">
            <img
              src={require("../../../assets/service1-1.jpg")}
              className="h-full w-[60%] object-fill xl:w-[60%]"
            />
            <img
              src={require("../../../assets/service1-2.png")}
              className="w-[10%] object-fill xl:w-[50%]"
            />
          </div>
        </div>
      </div>
    </Container>
  );
  // return (
  //   <Container className="3xl:px-[440px] flex items-center justify-center pt-[75px] text-center text-white xl:px-[20%]">
  //     <div className="w-full">
  //       <h2 className="3xl:text-[80pt] pb-[55px] text-center text-[44px]  font-bold">
  //         محتــــوى حصــري <p className="text-[#4D17CE]">Switch على</p>
  //       </h2>
  //       <div className="m-auto flex w-full items-center justify-center gap-4">
  //         <div className="3xl:ps-[20%] 3xl:w-[40%] flex w-[40%] flex-col items-end justify-center text-end xl:w-[50%]">
  //           <h3 className="3xl:text-2xl font-bold leading-[45px] xl:text-[35px]">
  //             ادخل إلى عالم رائع من{" "}
  //             <span className="text-[#27FF55]">المنتجات الأصلية</span> الحصرية
  //             في التعليم والترفيه
  //           </h3>
  //           <img
  //             src={require("../../../assets/tags.png")}
  //             className="h-[55px] py-4"
  //           />
  //           <p className="text-[10px]">
  //             أفلام وثائقية l أفلام قصيرة بودكاست | التعليم غيرها الكثير أفلام
  //             وثائقية l أفلام قصيرة بودكاست | التعليم غيرها الكثير
  //           </p>
  //           {/* <div className="flex flex-wrap gap-4 ">
  //             {["Tag | ", "WE | ", "SADF | ", "Tag | ", "WE | ", "SADF"].map(
  //               (item) => (
  //                 <Tag>{item}</Tag>
  //               ),
  //             )}
  //           </div> */}
  //           {/* <div className="flex flex-wrap gap-4">
  //             <Tag className="rounded-md border px-2 ">6k</Tag>
  //             <Tag className="rounded-md border px-2 ">4k</Tag>
  //             <Tag className="rounded-md border px-2 ">WE</Tag>
  //           </div> */}
  //         </div>
  //         <div className="flex w-[100%]">
  //           <img
  //             src={require("../../../assets/service1-1.jpg")}
  //             className="3xl:w-[1134px] 3xl:h-[649px] object-fill xl:h-[323px] xl:w-[566px]"
  //           />
  //           <img
  //             src={require("../../../assets/service1-2.png")}
  //             className="3xl:w-[832px] object-fill xl:h-[323px] xl:w-[566px]"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </Container>
  // );
};

export default Service1;
