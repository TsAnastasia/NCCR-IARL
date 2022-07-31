import React, { FC, useCallback, useContext, useState } from "react";
import { StructurePageContext } from "../../../../assets/contexts/StructurePageContext";
import structureItems from "../../../../assets/data/structureItems.json";
import { IStructureScheme } from "../../../../assets/types/structure";
import { cl } from "../../../../assets/utils/classnames";

import StructureShemeItemIcon from "./icon/StructureShemeItemIcon";
import scss from "./structureSchemeItem.module.scss";

const StructureSchemeItem: FC<{
  scheme: IStructureScheme;
  level?: number;
}> = ({ scheme, level = 0 }) => {
  const item = structureItems[scheme.id];
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
    selectItem(structureItems[item.id]);
  }, [item, selectItem]);

  return (
    <div className={scss.root}>
      <div
        className={cl(
          scss.head,
          selectedItem?.id === item.id && scss.active,
          item.gitIgnore && scss.gitIngnore,
          item.necessary && scss.necessary,
          item.patern && scss.pattern
        )}
        style={{ paddingLeft: `${10 + level * 20}px` }}
        onClick={selectHadler}
      >
        <StructureShemeItemIcon
          item={item}
          opened={opened}
          onToggle={toggleOpenHandler}
          hasChildren={!!scheme.children}
        />
        <p className={scss.name}>{item.name}</p>
      </div>
      {opened && scheme.children && (
        <div className={scss.children}>
          {scheme.children.map((node) => (
            <StructureSchemeItem
              key={node.id}
              scheme={node}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StructureSchemeItem;
