import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AppRouter from "./router/AppRouter";
import scss from "./app.module.scss";
import { useMatch } from "react-router-dom";
import { RouteNames } from "./router/router";

import { cl } from "./assets/utils/classnames";
import { Suspense } from "react";

const App = () => {
  const isStructurePage = useMatch(RouteNames.STRUCTURE);
  const isCodePage = useMatch(RouteNames.CODE);

  return (
    <div
      className={cl(
        scss.app,
        isStructurePage ? scss.structure : isCodePage ? scss.coding : scss.home
      )}
    >
      <Header />
      {/* TODO: add loader */}
      <Suspense
        fallback={
          <main>
            <p>Loading...</p>
          </main>
        }
      >
        <AppRouter />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
