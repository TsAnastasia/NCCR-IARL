import { ReactNode } from "react";

export interface IPageCard {
  path: string;
  name: string;
  description?: ReactNode;
}
