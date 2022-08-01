import { useContext } from "react";
import { StructurePageContext } from "../../../assets/contexts/StructurePageContext";
import { structureItemTypes } from "../../../assets/types/structure";
import { cl } from "../../../assets/utils/classnames";
import PageTitle from "../../../components/pageTitle/PageTitle";
import scss from "./structureInfo.module.scss";

const StructureInfo = () => {
  const { selectedItem, selectItem } = useContext(StructurePageContext);

  const closeHandler = () => selectItem(null);

  return (
    <section className={scss.root}>
      {selectedItem ? (
        <>
          <PageTitle className={scss.title} type="h2">
            {selectedItem.name}
          </PageTitle>
          <p className={scss.text}>
            <span className={scss.subtitle}>Тип</span>
            {structureItemTypes[selectedItem.type]}
          </p>

          {selectedItem.necessary && (
            <p className={scss.text}>
              <span className={scss.subtitle}>Наличие</span>
              обязательно
            </p>
          )}

          {selectedItem.patern && (
            <p className={scss.text}>
              Данное название файла/папки является примером, в вашем проекте оно
              может отличаться.
            </p>
          )}

          {selectedItem.gitIgnore && (
            <p className={scss.text}>
              Данный файла/папка игнорируются `git` и храняться только локально
              в репозитории.
            </p>
          )}

          <span className={scss.subtitle}>Описание</span>
          <p className={cl(scss.text, scss.description)}>
            {selectedItem.description}
          </p>
          <button type="button" onClick={closeHandler} className={scss.close} />
        </>
      ) : (
        <p className={scss.empty}>
          Для отображения информации выберете элемент на структурной схеме.
        </p>
      )}
    </section>
  );
};

export default StructureInfo;
