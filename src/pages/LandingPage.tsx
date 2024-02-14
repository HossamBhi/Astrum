import {
  FooterOne,
  FooterSection,
  HomeSection,
} from "../components/landingPage";
import {
  Service1,
  Service2,
  Service3,
  Service4,
} from "../components/landingPage/Services";
import { DashWrapper } from "../components/wrapper";
const LandingPage = () => {
  return (
    <DashWrapper id="landingpage">
      <HomeSection />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <FooterOne />
      <FooterSection />
      {/* <HomeSection />
          {[
            { title: "Up Comming", requestUrl: MOVIES.upcomming },
            { title: "Popular", requestUrl: MOVIES.popular },
            { title: "Trending", requestUrl: MOVIES.trending },
            { title: "Top Rated", requestUrl: MOVIES.topRated },
            { title: "Horror", requestUrl: MOVIES.horror }, 
          ].map((item) => (
            <RowSection
              key={item.title}
              title={item.title}
              requestUrl={item.requestUrl}
            />
          ))} */}
    </DashWrapper>
  );
};

export default LandingPage;
