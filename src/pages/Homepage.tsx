import { CustomCrausel } from "../components/carusel";
import { HomeSection, RowSection } from "../components/home";
import { DashWrapper } from "../components/wrapper";
import { MOVIES } from "../services/apis/endpoints";
const Homepage = () => {
  return (
    <DashWrapper id="landingpage">
      {/* <HomeSection /> */}
      <CustomCrausel />
      {[
        { title: "الأكثر مشاهدة", requestUrl: MOVIES.upcomming, id: 1 },
        { title: "الأصلية Switch أعمال", requestUrl: MOVIES.popular, id: 2 },
        // { title: "Trending", requestUrl: MOVIES.trending },
        // { title: "Top Rated", requestUrl: MOVIES.topRated },
        // { title: "Horror", requestUrl: MOVIES.horror },
      ].map((item) => (
        <RowSection
          key={item.title}
          title={item.title}
          requestUrl={item.requestUrl}
          id={item.id}
        />
      ))}

      <section>
        <h2 className="w-full p-4 pb-2 pe-4 text-end font-bold text-white md:text-xl">
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
              <div className="relative inline-block w-[160px] cursor-pointer p-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
                <img
                  src={require("../assets/btnbg.png")}
                  className="block h-auto  rounded-md object-cover"
                />
                <div className="absolute left-1/2 top-1/2 z-30 flex w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center text-white">
                  <p className="flex h-full w-fit items-end whitespace-normal pb-2 text-center font-bold sm:text-xs md:text-sm">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="m-auto w-[20%] pb-20 pt-32">
        <h3 className="w-full text-center leading-tight text-white xl:text-[30px] 4xl:text-[65px]">
          ادخل إلى عالم رائع من{" "}
          <span className="text-[#27FF55]">المنتجات الأصلية</span> الحصرية في
          التعليم والترفيه<span>!</span>
        </h3>
      </div>
    </DashWrapper>
  );
};

export default Homepage;
