import { createContext } from "react";
import { IStructureItem } from "../assets/types/structure";

export const StructurePageContetxt = createContext<{
  selectedItem: null | IStructureItem;
  selectItem: (item: IStructureItem | null) => void;
}>({
  selectedItem: null,
  selectItem: (item: IStructureItem | null) => console.log("selectItem", item),
});
