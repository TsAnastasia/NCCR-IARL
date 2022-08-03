import GitHelp from "./help/GitHelp";
import GitNav from "./nav/GitNav";
import GitRules from "./rules/GitRules";
import scss from "./gitPage.module.scss";

const GitPage = () => {
  return (
    <main className={scss.root}>
      <GitNav />
      <GitRules />
      <GitHelp />
    </main>
  );
};

export default GitPage;
