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
    <div>
      <div>
        {type === "folder" && (
          <button type="button" onClick={toggleOpenHandler} />
        )}
        <p>{name}</p>
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
