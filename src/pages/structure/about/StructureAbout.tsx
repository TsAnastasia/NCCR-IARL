import scss from "./structureAbout.module.scss";

const StructureAbout = () => {
  return (
    <section className={scss.root}>
      <h2 className={scss.title}>Общие сведения</h2>
      <p className={scss.text}>
        Данная структура проекта формируется на основе указанного шаблона
        {/* TODO: add link */}.
      </p>
      <p className={scss.text}>
        Для стилизации компонентов используются `.module.scss`. Соотвествующие
        файлы располагаются в той же папке, что и компонент. При этом файлы для
        типизации `.module.scss.d.ts` создаются автоматически.
      </p>
      <p className={scss.text}>
        В вашем проекте часть папок/файлов может отсутвовать, если в них нет
        необходимости: отустствует api, другой метод стилизации и т.д.
      </p>
    </section>
  );
};

export default StructureAbout;
