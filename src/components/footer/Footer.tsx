import scss from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.root}>
      <p className={scss.copyright}>&copy; Frontend rules, 2022</p>
    </footer>
  );
};

export default Footer;
