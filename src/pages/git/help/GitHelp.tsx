import gitCommands from "../../../assets/data/gitCommands.json";
import PageTitle from "../../../components/pageTitle/PageTitle";

const GitHelp = () => (
  <section>
    <PageTitle type="h2">Основные комнады git</PageTitle>
    {gitCommands.map(({ group, commands }, index) => (
      <article key={index}>
        <h3>{group}</h3>
        <ul>
          {commands.map(({ command, description }, i) => (
            <li key={i}>
              <p>
                <span>{command}</span>
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
