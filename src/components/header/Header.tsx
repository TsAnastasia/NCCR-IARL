import { Link, NavLink } from "react-router-dom";
import { RouteNames } from "../../router/router";
import Logo from "../../assets/images/logo.svg";
import scss from "./header.module.scss";
import { cl } from "../../assets/utils/classnames";

const navLinks: { route: string; name?: string }[] = [
  { route: RouteNames.STRUCTURE, name: "Структура" },
  { route: RouteNames.CODE, name: "Код" },
  { route: RouteNames.GIT, name: "Git" },
];

const Header = () => {
  return (
    <header className={scss.root}>
      <Link to={RouteNames.HOME} className={scss.logo}>
        <img className={scss.image} src={Logo} alt="frontend rules" />
        <p className={scss.name}>Frontend rules</p>
      </Link>

      <nav>
        <ul className={scss.links}>
          {navLinks.map(({ route, name }) => (
            <li key={route}>
              <NavLink
                to={route}
                className={({ isActive }) =>
                  cl(scss.item, isActive && scss.active)
                }
              >
                {name || route}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
