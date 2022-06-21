import PageTitle from "../../components/pageTitle/PageTitle";
import StructureScheme from "./scheme/StructureScheme";
import scss from "./structurePage.module.scss";

const StructurePage = () => {
  return (
    <main className={scss.root}>
      <PageTitle name="Project's structure" />

      <StructureScheme />
      <section>file/folder info</section>
    </main>
  );
};

export default StructurePage;
