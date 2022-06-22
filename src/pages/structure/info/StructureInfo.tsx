import { useContext } from "react";
import { StructurePageContetxt } from "../../../utils/contexts";
import scss from "./structureInfo.module.scss";

const StructureInfo = () => {
  const { selectedItem, selectItem } = useContext(StructurePageContetxt);

  const closeHandler = () => selectItem(null);

  return (
    <section className={scss.root}>
      {selectedItem ? (
        <>
          <h2 className={scss.title}>{selectedItem.name}</h2>
          <p className={scss.subtitle}>
            Тип:
            <span className={scss.text}>
              {selectedItem.type === "file" ? "файл" : "папка"}
            </span>
          </p>
          <p className={scss.subtitle}>
            Наличие:
            <span
              className={`${scss.text} ${
                selectedItem.status === "optional" ? scss.optional : ""
              }`}
            >
              {selectedItem.status === "fixed" ? "обязательно" : "опционально"}
            </span>
          </p>
          <div>
            {selectedItem.description.split("\n").map((text, index) => (
              <p key={index} className={scss.text}>
                {text}
              </p>
            ))}
          </div>

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
