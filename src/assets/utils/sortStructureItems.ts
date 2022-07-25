import { IStructureItem } from "../types/structure";

export const sortStructureItems = (arr: IStructureItem[]): IStructureItem[] =>
  arr.sort((current, next) =>
    current.type === "folder" && next.type === "file"
      ? -1
      : current.type === "file" && next.type === "folder"
      ? 1
      : current.name.toLowerCase() > next.name.toLowerCase()
      ? 1
      : -1
  );
