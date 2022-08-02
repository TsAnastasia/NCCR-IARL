import gitCommands from "../../../assets/data/gitCommands.json";
import PageTitle from "../../../components/pageTitle/PageTitle";
import scss from "./gitHelp.module.scss";

const GitHelp = () => (
  <section>
    <PageTitle type="h1" component="h2">
      Основные комнады git
    </PageTitle>
    {gitCommands.map(({ group, commands }, index) => (
      <article key={index}>
        <PageTitle type="h2" component="h3">
          {group}
        </PageTitle>
        <ul className={scss.commands}>
          {commands.map(({ command, description }, i) => (
            <li key={i} className={scss.item}>
              <p>
                <span className={scss.command}>{command}</span>
                {description}
              </p>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </section>
);

export default GitHelp;
