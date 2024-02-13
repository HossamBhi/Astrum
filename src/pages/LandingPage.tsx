import { motion } from "framer-motion";
import {
  FooterOne,
  FooterSection,
  HomeSection,
} from "../components/landingPage";
import { DashWrapper } from "../components/wrapper";
import { RowSection } from "../components/home";
import { MOVIES } from "../services/apis/endpoints";
import { AnimationDiv } from "../components/animation";
import {
  Service1,
  Service2,
  Service3,
  Service4,
} from "../components/landingPage/Services";
const LandingPage = () => {
  return (
    <DashWrapper id="landingpage">
      <AnimationDiv>
        <HomeSection />
      </AnimationDiv>
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
