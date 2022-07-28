import { useContext } from "react";
import { StructurePageContext } from "../../../assets/contexts/StructurePageContext";
import { structureItemTypes } from "../../../assets/types/structure";
import { cl } from "../../../assets/utils/classnames";
import scss from "./structureInfo.module.scss";

const StructureInfo = () => {
  const { selectedItem, selectItem } = useContext(StructurePageContext);

  const closeHandler = () => selectItem(null);

  return (
    <section className={scss.root}>
      {selectedItem ? (
        <>
          <h2 className={scss.title}>{selectedItem.name}</h2>
          <p className={scss.text}>
            <span className={scss.subtitle}>Тип</span>
            {structureItemTypes[selectedItem.type]}
          </p>

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
