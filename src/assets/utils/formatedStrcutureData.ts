import structureItems from "../data/structureItems.json";
import structureScheme from "../data/structureScheme.json";
import { IStructureItem, IStructureScheme } from "../types/structure";

interface IStructureItem2 extends IStructureItem {
  children?: IStructureItem2[];
}

const sortStructureItems = (current: IStructureItem2, next: IStructureItem2) =>
  current.type === "folder" && next.type === "file"
    ? -1
    : current.type === "file" && next.type === "folder"
    ? 1
    : current.name.toLowerCase() > next.name.toLowerCase()
    ? 1
    : -1;

const formatItem = (
  item: IStructureScheme,
  patern?: boolean
): IStructureItem2 => ({
  ...structureItems[item.id],
  patern: patern || structureItems[item.id].patern,
  children: item.children
    ?.map((i) => formatItem(i, structureItems[item.id].patern))
    .sort(sortStructureItems),
});

export const formatData = () => {
  // console.log("structureItems", Object.keys(structureItems).length);
  const formated = formatItem(structureScheme);

  const items: { [key: string]: IStructureItem } = {};

  const getItemFromSheme = (sheme: IStructureItem2) => {
    const { children, ...i } = sheme;
    items[i.id] = i;
    children?.forEach((i) => getItemFromSheme(i));
  };

  getItemFromSheme(formated);
  console.log("structureItems", items);

  const getSheme = (sheme: IStructureItem2): IStructureScheme => ({
    id: sheme.id,
    children: sheme.children?.map(getSheme),
  });

  console.log("structureSheme", getSheme(formated));
};
