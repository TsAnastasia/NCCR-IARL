import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import { RouteNames } from "./router";

const StructurePage = lazy(() => import("../pages/structure/StructurePage"));
const CodePage = lazy(() => import("../pages/code/CodePage"));
const GitPage = lazy(() => import("../pages/git/GitPage"));

const AppRouter = () => {
  return (
    <Routes>
      <Route path={RouteNames.HOME} element={<HomePage />} />
      <Route path={RouteNames.STRUCTURE} element={<StructurePage />} />
      <Route path={RouteNames.CODE} element={<CodePage />} />
      <Route path={RouteNames.GIT} element={<GitPage />} />
      <Route path="*" element={<Navigate to={RouteNames.HOME} />} />
    </Routes>
  );
};

export default AppRouter;
