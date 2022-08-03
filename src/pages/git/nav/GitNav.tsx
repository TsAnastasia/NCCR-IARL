import { gitSections } from "../../../assets/types/git";
import PageTitle from "../../../components/pageTitle/PageTitle";
import scss from "./gitNav.module.scss";

const GitNav = () => {
  return (
    <section className={scss.root}>
      <PageTitle className={scss.title}>Git</PageTitle>
      <nav>
        <ul className={scss.nav}>
          {Object.entries(gitSections).map(([section, name]) => (
            <li key={section}>
              <a href={`#${section}`} className={scss.link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default GitNav;
