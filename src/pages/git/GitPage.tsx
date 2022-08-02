import GitHelp from "./help/GitHelp";
import GitRules from "./rules/GitRules";

const GitPage = () => {
  return (
    <main>
      <GitRules />
      <GitHelp />
    </main>
  );
};

export default GitPage;
