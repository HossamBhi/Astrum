import { Route, Routes } from "react-router-dom";
import { Home, LandingPage } from "../pages";

const ROUTES = [
  { path: "/", Page: Home },
  { path: "/switch", Page: LandingPage },
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
