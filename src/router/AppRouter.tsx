import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import StructurePage from "../pages/structure/StructurePage";
import { RouteNames } from "./router";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<HomePage />} />
      <Route path={RouteNames.STRUCTURE} element={<StructurePage />} />
      <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
    </Routes>
  );
};

export default AppRouter;
