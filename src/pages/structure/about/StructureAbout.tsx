import PageTitle from "../../../components/pageTitle/PageTitle";
import scss from "./structureAbout.module.scss";

const StructureAbout = () => {
  return (
    <section className={scss.root}>
      <PageTitle name="Структура проекта" />
      <p className={scss.description}>
        Данное описание является примером как организовать струткуру проекта. Но
        в зависимости от его назначения и компонентов часть папок/файлов может
        отсутвовать в вашем проекте.
      </p>
    </section>
  );
};

export default StructureAbout;
