export interface IStructureItem {
  id: string;
  name: string;
  type: keyof typeof structureItemTypes;
  children?: IStructureItem[];
  description: string;
  opened?: boolean;
  gitIgnore?: boolean;
  necessary?: boolean;
  patern?: boolean;
}

export const structureItemTypes = {
  folder: "папка",
  file: "файл",
};
