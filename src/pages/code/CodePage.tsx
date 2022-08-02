import codingRules from "../../assets/data/codingRules.json";
import PageTitle from "../../components/pageTitle/PageTitle";
import scss from "./codePage.module.scss";

const CodePage = () => {
  return (
    <main>
      <PageTitle>Рекомендации по написанию кода</PageTitle>
      <ul className={scss.rules}>
        {codingRules.map((rule, index) => (
          <li key={index} className={scss.item}>
            <p>{rule}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default CodePage;
