import { createContext } from "react";
import { IStructureItem } from "../types/structure";

export const StructurePageContext = createContext<{
  selectedItem: null | IStructureItem;
  selectItem: (item: IStructureItem | null) => void;
}>({
  selectedItem: null,
  selectItem: (item: IStructureItem | null) => console.log("selectItem", item),
});
