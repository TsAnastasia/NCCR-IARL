export interface IStructureItem {
  id: string;
  name: string;
  type: "folder" | "file";
  children?: IStructureItem[];
  description: string;
  opened?: boolean;
  gitIgnore?: boolean;
  necessary?: boolean;
  patern?: boolean;
}
