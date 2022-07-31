export interface IStructureItem {
  id: string;
  name: string;
  type: keyof typeof structureItemTypes;
  description: string;
  opened?: boolean;
  gitIgnore?: boolean;
  necessary?: boolean;
  patern?: boolean;
}

export type IStructureItems = { [key: string]: IStructureItem };

export interface IStructureScheme {
  id: string;
  children?: IStructureScheme[];
}

export const structureItemTypes = {
  folder: "папка",
  file: "файл",
};
