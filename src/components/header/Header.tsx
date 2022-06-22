import { Link } from "react-router-dom";
import { RouteNames } from "../../router/router";
import Logo from "../../assets/images/logo.svg";
import scss from "./header.module.scss";

const Header = () => {
  return (
    <header className={scss.root}>
      <Link to={RouteNames.HOME} className={scss.link}>
        <img className={scss.logo} src={Logo} alt="frontend rules" />
        <p className={scss.name}>Frontend rules</p>
      </Link>
      {/* TODO: add menu */}
    </header>
  );
};

export default Header;
