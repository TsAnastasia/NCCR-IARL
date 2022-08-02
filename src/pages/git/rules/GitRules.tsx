import gitRules from "../../../assets/data/gitRules.json";
import PageTitle from "../../../components/pageTitle/PageTitle";
import scss from "./gitRules.module.scss";

const GitRules = () => (
  <section>
    <PageTitle type="h1" component="h2">
      Правила работы с git
    </PageTitle>
    {gitRules.map(({ title, rules }, index) => (
      <article key={index}>
        {title && (
          <PageTitle type="h2" component="h3">
            {title}
          </PageTitle>
        )}
        {rules.map((rule, i) => (
          <p key={i} className={scss.text}>
            {rule}
          </p>
        ))}
      </article>
    ))}
  </section>
);

export default GitRules;
