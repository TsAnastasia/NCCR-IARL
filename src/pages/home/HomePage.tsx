import { pages } from "../../assets/utils/pagesDescription";
import PageTitle from "../../components/pageTitle/PageTitle";
import HomePageCard from "./pageCard/HomePageCard";
import scss from "./homePage.module.scss";
import { LAB_LINK } from "../../assets/utils/constants";
import ExternalLink from "../../components/externalLink/ExternalLink";

const HomePage = () => {
  return (
    <main>
      <PageTitle>Frontend rules</PageTitle>
      <section className={scss.section}>
        <PageTitle type="h2">О проекте</PageTitle>
        <p className={scss.text}>
          Данный сайт реализован с целью фиксации правил и договоренностей,
          применяемых при разработке frontend в лаборатории{" "}
          <ExternalLink href={LAB_LINK}>
            INDUSTRIAL AI RESEARCH LAB
          </ExternalLink>
          .
        </p>
        <p className={scss.text}>
          Frontend – пользовательский интерфейс для проектов лаборатории.
        </p>
      </section>

      <section className={scss.section}>
        <PageTitle type="h2">Разделы</PageTitle>
        <ul className={scss.pages}>
          {pages.map((page) => (
            <li key={page.path}>
              <HomePageCard {...page} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
