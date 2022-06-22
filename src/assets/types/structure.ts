export interface IStructureItem {
  id: number;
  name: string;
  type: "folder" | "file";
  status: "fixed" | "optional" | "pattern";
  children?: IStructureItem[];
  description: string;
  opened?: boolean;
}
