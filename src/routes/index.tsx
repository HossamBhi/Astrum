import { Route, Routes } from "react-router-dom";
import { Home, Homepage, LandingPage } from "../pages";

const ROUTES = [
  { path: "/", Page: Home },
  { path: "https://www.astrumfilms.com/switch", Page: LandingPage },
  { path: "/home", Page: Homepage },
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
