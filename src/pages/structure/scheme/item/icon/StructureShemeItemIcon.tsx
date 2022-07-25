import { FC } from "react";
import { IStructureItem } from "../../../../../assets/types/structure";
import scss from "../structureSchemeItem.module.scss";

const StructureShemeItemIcon: FC<{
  item: IStructureItem;
  opened: boolean;
  onToggle: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}> = ({ item, opened, onToggle }) => {
  return item.type === "file" ? (
    <svg viewBox="0 0 16 20" className={scss.icon}>
      <path d="M16 18.012V6l-6-6H2c-.941 0-2 1.114-2 2.108v15.904C0 19.006.941 20 1.882 20h12.236c.94 0 1.882-.994 1.882-1.988ZM2 3c0-.497.53-1 1-1h6v5h5v10c0 .497-.53 1.012-1 1.012H3c-.47 0-1-.515-1-1.012V3Z" />
    </svg>
  ) : item.type === "folder" && item.children ? (
    <button type="button" onClick={onToggle} className={scss.open}>
      <svg viewBox="0 0 20 16" className={scss.icon}>
        <path d="M20 14V4c0-1-1-2-2-2h-8L8 0H2C.824 0 0 .891 0 1.687V14c0 1 1 2 2 2h16c1 0 2-1 2-2ZM2 4h15c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1V4Z" />
        <path d="M6 8v2h8V8H6Z" />
        <path d="M9 5v8h2V5H9Z" opacity={opened ? 0 : 1} />
      </svg>
    </button>
  ) : (
    <svg viewBox="0 0 20 16" className={scss.icon}>
      <path d="M20 14V4c0-1-1-2-2-2h-8L8 0H2C.824 0 0 .891 0 1.687V14c0 1 1 2 2 2h16c1 0 2-1 2-2ZM2 4h15c.5 0 1 .5 1 1v8c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1V4Z" />
    </svg>
  );
};

export default StructureShemeItemIcon;
