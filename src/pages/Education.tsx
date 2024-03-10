import { HeroSection } from "../components/education";
import { RowSection } from "../components/home";
import { DashWrapper } from "../components/wrapper";
import { MOVIES } from "../services/apis/endpoints";

const Education = () => {
  return (
    <DashWrapper id="Homepage">
      <HeroSection />

      <section className="mb-[5vw] mt-[5vw] flex flex-col items-center">
        <div className="group relative flex items-center">
          <div className="relative flex h-full w-full items-center justify-center">
            {["نصيحة اليوم", "تنمية مهارات", "دروس رئيسية"].map((item) => (
              <div
                className="relative mx-[0.25vw] my-[0.1vw] inline-block cursor-pointer"
                style={{
                  backgroundImage: `url(/imgs/btnbg.png)`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <p className="codecPro-bold w-[18vw] whitespace-normal py-[4vw] text-center text-[1.75vw] text-white">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="m-auto pb-[4vw] pt-[5vw]">
          <h3 className="codecPro-ExtraBold w-full text-center text-[2.5vw] leading-tight text-white">
            تمتع بتعلم غير محدود من
            <br /> .الدروس المميزة والخاصة
          </h3>
        </div>
        <div className="group relative m-auto flex max-w-[60vw] items-center">
          <div className="relative flex h-full w-full flex-wrap-reverse items-center justify-center gap-[0.5vw]">
            {[
              "البرمجة والهندسة",
              "تحليل البيانات",
              "تطوير الذات",
              "تصميم وأزياء",
              "الذكاء الإصطناعي",
              "التطوير العقاري",
              "الفنون البصرية والإبداع",
              "الأمن السبراني",
              "إستشراف المستقبل",
              "صحة وحياة",
              "رياضة وألعاب",
              "الكتابة والأدب",
              "صناعة الأفلام والترفيه",
              "صناعة الروبوتات",
              "القيادة وريادة الأعمال",
              "العلوم والتكنولوجيا",
              "أحدث الدروس",
            ].map((item) => (
              <div
                className={`relative inline-block cursor-pointer rounded-[0.5vw] bg-[#222327] px-[1vw] ${item === "أحدث الدروس" ? "bg-[#27FF56] text-black" : "text-white"}`}
              >
                <p className="codecPro-bold whitespace-normal py-[0.5vw] text-center text-[1vw]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        {[{ title: "الأحدث حالياً", requestUrl: MOVIES.upcomming, id: 3 }].map(
          (item, index) => (
            <RowSection
              key={index}
              title={item.title}
              requestUrl={item.requestUrl}
              id={item.id}
            />
          ),
        )}
        <button className="mt-[3vw] rounded-[0.5vw] bg-[#4D17CE] px-[1.5vw] py-[0.75vw] text-[1vw] text-white ">
          أكتشف المزيد
        </button>
      </section>
    </DashWrapper>
  );
};

export default Education;
