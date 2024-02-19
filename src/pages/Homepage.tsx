import { RowSection } from "../components/home";
import { HomeCarausel } from "../components/home/HomeCarausel";
import { DashWrapper } from "../components/wrapper";
import { MOVIES } from "../services/apis/endpoints";
const Homepage = () => {
  return (
    <DashWrapper id="Homepage">
      {/* <HomeSection /> */}
      <HomeCarausel />
      {[
        { title: "الأكثر مشاهدة", requestUrl: MOVIES.upcomming, id: 1 },
        {
          title: (
            <p>
              الأصلية{" "}
              <strong className="codecPro-ExtraBold text-[#4D17CE]">
                Switch
              </strong>{" "}
              أعمال
            </p>
          ),
          requestUrl: MOVIES.popular,
          id: 2,
        },
        // { title: "الأصلية Switch أعمال", requestUrl: MOVIES.popular, id: 2 },

        // { title: "Trending", requestUrl: MOVIES.trending },
        // { title: "Top Rated", requestUrl: MOVIES.topRated },
        // { title: "Horror", requestUrl: MOVIES.horror },
      ].map((item, index) => (
        <RowSection
          key={index}
          title={item.title}
          requestUrl={item.requestUrl}
          id={item.id}
        />
      ))}

      <section>
      <h2 className="codecPro-bold w-full px-[3vw] pb-[1vw] pt-[2vw] text-right text-[2vw] text-white">
          تصفح حسب الفئة
        </h2>
        <div className="group relative flex items-center">
          <div className="no-scrollbar relative h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap">
            {[
              "أفلام قصيرة",
              "برامج",
              "بودكاست",
              "وثائقيات",
              "أفلام قصيرة",
              "برامج",
              "بودكاست",
              "وثائقيات",
              "أفلام قصيرة",
              "برامج",
              "بودكاست",
              "وثائقيات",
              "أفلام قصيرة",
              "برامج",
              "بودكاست",
              "وثائقيات",
            ].map((item) => (
              <div
                className="relative mx-[0.6vw] my-[0.1vw] inline-block cursor-pointer"
                style={{
                  backgroundImage: `url(/imgs/btnbg.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <p className="codecPro-bold  whitespace-normal px-[2vw] py-[4vw] text-center text-[1.75vw] text-white w-[18vw]">
                  {item}
                </p>
                {/* <img
                src={require("../assets/btnbg.png")}
                className="block h-auto rounded-md object-cover"
                alt="btn"
              /> */}
                {/* <div className="absolute left-1/2 top-1/2 z-30 flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-white">
                <p className="codecPro-bold flex h-full w-fit items-end whitespace-normal pb-2 text-center text-[1vw]">
                  {item}
                </p>
              </div> */}
              </div>
              // <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
              //   <img
              //     src={require("../assets/btnbg.png")}
              //     className="block h-auto rounded-md object-cover"
              //     alt="btn"
              //   />
              //   <div className="absolute left-1/2 top-1/2 z-30 flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-white">
              //     <p className="codecPro-bold flex h-full w-fit items-end whitespace-normal pb-2 text-center sm:text-xs md:text-sm">
              //       {item}
              //     </p>
              //   </div>
              // </div>
            ))}
          </div>
        </div>
      </section>
      <div className="m-auto pb-[6.25vw] pt-[7vw]">
        <h3 className="w-full text-center leading-tight text-white text-[2.5vw]">
          ادخل إلى عالم رائع من <br />
          <span className="text-[#27FF55]">المنتجات الأصلية</span> الحصرية<br /> !في
          التعليم والترفيه
        </h3>
      </div>
    </DashWrapper>
  );
};

export default Homepage;
