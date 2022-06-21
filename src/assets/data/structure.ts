import { IStructureItem } from "../types/structure";

export const projectStructure: IStructureItem = {
  name: "project",
  type: "folder",
  status: "fixed",
  description: "",
  opened: true,
  children: [
    {
      name: ".env.development",
      type: "file",
      status: "optional",
      description: "",
    },
    {
      name: ".env.production",
      type: "file",
      status: "optional",
      description: "",
    },
    {
      name: "public",
      type: "folder",
      status: "fixed",
      description: "",
      children: [
        { name: "index.html", type: "file", status: "fixed", description: "" },
        {
          name: "favicon.ico",
          type: "file",
          status: "optional",
          description: "",
        },
      ],
    },
    {
      name: "src",
      type: "folder",
      status: "fixed",
      description: "",
      opened: true,
      children: [
        { name: "index.ts", type: "file", status: "fixed", description: "" },
        {
          name: "App.ts",
          type: "file",
          status: "fixed",
          description: "",
        },
        {
          name: "companents",
          type: "folder",
          status: "fixed",
          description: "",
          children: [],
        },
        {
          name: "pages",
          type: "folder",
          status: "fixed",
          description: "",
          children: [],
        },
        {
          name: "router",
          type: "folder",
          status: "fixed",
          description: "",
          opened: true,
          children: [
            {
              name: "AppRouter.tsx",
              type: "file",
              status: "fixed",
              description: "",
            },
            {
              name: "router.tsx",
              type: "file",
              status: "fixed",
              description: "",
            },
          ],
        },
      ],
    },
  ],
};
