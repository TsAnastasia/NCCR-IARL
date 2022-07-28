import React, { FC, useCallback, useContext, useState } from "react";
import { StructurePageContext } from "../../../../assets/contexts/StructurePageContext";
import { IStructureItem } from "../../../../assets/types/structure";
import { cl } from "../../../../assets/utils/classnames";
import { sortStructureItems } from "../../../../assets/utils/sortStructureItems";
import StructureShemeItemIcon from "./icon/StructureShemeItemIcon";
import scss from "./structureSchemeItem.module.scss";

const StructureSchemeItem: FC<{
  item: IStructureItem;
  level?: number;
}> = ({ item, level = 0 }) => {
  const [opened, setOpened] = useState<boolean>(!!item.opened);
  const { selectedItem, selectItem } = useContext(StructurePageContext);

  const toggleOpenHandler = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      setOpened((state) => !state);
    },
    []
  );

  const selectHadler = useCallback(() => {
    selectItem(item);
  }, [item, selectItem]);

  return (
    <div className={scss.root}>
      <div
        className={cl(
          scss.head,
          selectedItem?.id === item.id && scss.active,
          item.gitIgnore && scss.gitIngnore
        )}
        style={{ paddingLeft: `${10 + level * 20}px` }}
        onClick={selectHadler}
      >
        <StructureShemeItemIcon
          item={item}
          opened={opened}
          onToggle={toggleOpenHandler}
        />
        <p className={scss.name}>{item.name}</p>
      </div>
      {opened && item.children && (
        <div className={scss.children}>
          {sortStructureItems(item.children).map((node) => (
            <StructureSchemeItem
              key={node.name}
              item={node}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StructureSchemeItem;
