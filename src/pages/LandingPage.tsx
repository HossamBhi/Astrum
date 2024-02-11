import { motion } from "framer-motion";
import { HomeSection } from "../components/landingPage";
import { DashWrapper } from "../components/wrapper";
import { RowSection } from "../components/home";
import { MOVIES } from "../services/apis/endpoints";
const LandingPage = () => {
  return (
    <DashWrapper>
      <motion.div>
        <motion.div>
          <HomeSection />
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
          ))}
        </motion.div>
      </motion.div>
    </DashWrapper>
  );
};

export default LandingPage;
