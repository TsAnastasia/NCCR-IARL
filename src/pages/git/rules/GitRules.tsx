import gitRules from "../../../assets/data/gitRules.json";
import PageTitle from "../../../components/pageTitle/PageTitle";

const GitRules = () => (
  <section>
    <PageTitle type="h2">Правила работы с git</PageTitle>
    {gitRules.map(({ title, rules }, index) => (
      <article key={index}>
        <h3>{title}</h3>
        {rules.map((rule, i) => (
          <p key={i}>{rule}</p>
        ))}
      </article>
    ))}
  </section>
);

export default GitRules;
