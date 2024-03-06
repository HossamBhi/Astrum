import { Route, Routes } from "react-router-dom";
import { Home, Homepage, LandingPage, Users } from "../pages";
import VideoPage from "../pages/VideoPage";

export const ROUTES = {
  astrumHome: { path: "/", Page: Home },
  switchLandingpage: {
    path: "/switch/ddf7aeebdb64677682cbbf0d967a4a92",
    Page: LandingPage,
  },
  switchUsers: { path: "/Users/ddf7aeebdb64677682cbbf0d967a4a92", Page: Users },
  switchHome: {
    path: "/home/ddf7aeebdb64677682cbbf0d967a4a92",
    Page: Homepage,
  },
  swtichVideo: {
    path: "/video/ddf7aeebdb64677682cbbf0d967a4a92",
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
