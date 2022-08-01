import { TEMPLATE_LINK } from "../../../assets/utils/constants";
import PageTitle from "../../../components/pageTitle/PageTitle";
import scss from "./structureAbout.module.scss";

const StructureAbout = () => {
  return (
    <section className={scss.root}>
      <PageTitle className={scss.title} type="h2">
        Общие сведения
      </PageTitle>
      <p className={scss.text}>
        Данная структура проекта формируется на основе{" "}
        <a href={TEMPLATE_LINK} target="_blank" rel="noreferrer">
          нашего шаблона
        </a>
        .
      </p>
      <p className={scss.text}>
        Для стилизации компонентов применяется `sass`. Соотвествующие файлы
        `.module.scss` располагаются в той же папке, что и компонент, при этом
        файлы их типизации `.module.scss.d.ts` создаются автоматически.
      </p>
      <p className={scss.text}>
        В вашем проекте часть папок/файлов может отсутвовать, если в них нет
        необходимости: отустствует api, другой метод стилизации и т.д.
      </p>
    </section>
  );
};

export default StructureAbout;
