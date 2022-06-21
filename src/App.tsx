import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AppRouter from "./router/AppRouter";

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};

export default App;
