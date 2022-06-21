import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AppRouter from "./router/AppRouter";
import scss from "./app.module.scss";
import { useMatch } from "react-router-dom";
import { RouteNames } from "./router/router";
import "@fontsource/roboto";

const App = () => {
  const isStructurePage = useMatch(RouteNames.STRUCTURE);

  return (
    <div className={`${scss.app} ${isStructurePage && scss.structure}`}>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
