import { Link } from "react-router-dom";
import { RouteNames } from "../../router/router";

const Header = () => {
  return (
    <header>
      <Link to={RouteNames.HOME}>logo</Link>
    </header>
  );
};

export default Header;
