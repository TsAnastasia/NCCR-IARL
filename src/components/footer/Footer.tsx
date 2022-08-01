import scss from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.root}>
      <p className={scss.copyright}>&copy; INDUSTRIAL AI RESEARCH LAB, 2022</p>
    </footer>
  );
};

export default Footer;
