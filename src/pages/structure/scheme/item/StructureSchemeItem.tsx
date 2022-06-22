import { FC, useState } from "react";
import { IStructureItem } from "../../../../assets/types/structure";
import scss from "./structureSchemeItem.module.scss";

const sortItems = (current: IStructureItem, next: IStructureItem) =>
  current.type === "folder" && next.type === "file"
    ? -1
    : current.type === "file" && next.type === "folder"
    ? 1
    : current.name > next.name
    ? 1
    : -1;

const StructureSchemeItem: FC<IStructureItem> = ({
  name,
  children,
  type,
  opened,
}) => {
  const [open, setOpen] = useState(opened);

  const toggleOpenHandler = () => setOpen((state) => !state);

  return (
    <div className={scss.root}>
      <div className={scss.head}>
        {type === "folder" && (
          <button
            type="button"
            onClick={toggleOpenHandler}
            className={scss.button}
          />
        )}
        <svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17 20"
          className={scss.icon}
        >
          <path d="M10.75 0h-8C1.65 0 .76.9.76 2L.75 18c0 1.1.89 2 1.99 2h12.01c1.1 0 2-.9 2-2V6l-6-6Zm4 18h-12V2h7v5h5v11Z" />
        </svg>
        <p className={scss.name}>{name}</p>
      </div>
      {open && children && (
        <div className={scss.children}>
          {children.sort(sortItems).map((item) => (
            <StructureSchemeItem key={item.name} {...item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default StructureSchemeItem;
