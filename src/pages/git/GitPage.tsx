import PageTitle from "../../components/pageTitle/PageTitle";
import GitHelp from "./help/GitHelp";
import GitRules from "./rules/GitRules";

const GitPage = () => {
  return (
    <main>
      <PageTitle>Git</PageTitle>
      <GitRules />
      <GitHelp />
    </main>
  );
};

export default GitPage;
