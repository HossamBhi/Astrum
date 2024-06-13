import { Route, Routes } from "react-router-dom";
import { Education, Home, Homepage, LandingPage, Users } from "../pages";
import VideoPage from "../pages/VideoPage";

export const ROUTES = {
  astrumHome: { path: "/", Page: Home },
  switchLandingpage: {
    path: "/switch/a3b9c8d1e2f4a5b6c7d8e9f0a1b2c3d4",
    Page: LandingPage,
  },
  switchUsers: { path: "/Users/a3b9c8d1e2f4a5b6c7d8e9f0a1b2c3d4", Page: Users },
  switchEducation: {
    path: "/education/a3b9c8d1e2f4a5b6c7d8e9f0a1b2c3d4",
    Page: Education,
  },
  switchHome: {
    path: "/home/a3b9c8d1e2f4a5b6c7d8e9f0a1b2c3d4",
    Page: Homepage,
  },
  swtichVideo: {
    path: "/video/a3b9c8d1e2f4a5b6c7d8e9f0a1b2c3d4",
    Page: VideoPage,
  },
};

const MainRoutes = () => {
  return (
    <Routes>
      {Object.values(ROUTES).map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
