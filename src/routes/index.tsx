import { Route, Routes } from "react-router-dom";
import { Home, Homepage, LandingPage } from "../pages";
import VideoPage from "../pages/VideoPage";

const ROUTES = [
  { path: "/", Page: Home },
  { path: "/switch/ddf7aeebdb64677682cbbf0d967a4a92", Page: LandingPage },
  { path: "/home/ddf7aeebdb64677682cbbf0d967a4a92", Page: Homepage },
  { path: "/video/ddf7aeebdb64677682cbbf0d967a4a92", Page: VideoPage },
];

const MainRoutes = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, Page }) => (
        <Route key={path} path={path} element={<Page />} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
