import { IStructureItem } from "../types/structure";

export const projectStructure: IStructureItem = {
  id: 1,
  name: "project",
  type: "folder",
  status: "fixed",
  description: "Корневая папка проекта.",
  opened: true,
  children: [
    {
      id: 4,
      name: ".env.development",
      type: "file",
      status: "optional",
      description: "",
    },
    {
      id: 5,
      name: ".env.production",
      type: "file",
      status: "optional",
      description: "",
    },
    {
      id: 6,
      name: "Readme.md",
      type: "file",
      status: "fixed",
      description: "",
    },
    {
      id: 3,
      name: "public",
      type: "folder",
      status: "fixed",
      description: "Папка с файлами для настройки шаблона страниц проекта.",
      children: [
        {
          id: 31,
          name: "index.html",
          type: "file",
          status: "fixed",
          description:
            "Начальный шаблон страницы проекта.\n Содержит информацию о заголовке (title), иконке (favicon) документа, отображаемых ввеху вкладки сайта. \n При необходимости в нем можно указать мета-данные проекта: имя, описание, автор и др.\n Также в нем можно подключить/импортировать необходимые шрифты, стили, изображения и библиотеки. Но лучше это делать через JavaScript.",
        },
        {
          id: 32,
          name: "favicon.ico",
          type: "file",
          status: "optional",
          description:
            "Иконка, отображаемыая в названии вкладки сайта и подключаемая в index.html.",
        },
      ],
    },
    {
      id: 2,
      name: "src",
      type: "folder",
      status: "fixed",
      description:
        "Папка с файлами, обрабатываемыми webpack. Внутри можно создавть подкаталоги.",
      opened: true,
      children: [
        {
          id: 21,
          name: "index.ts",
          type: "file",
          status: "fixed",
          description: "Точка входа JavaScript.",
        },
        {
          id: 22,
          name: "App.ts",
          type: "file",
          status: "fixed",
          description: "",
        },
        {
          id: 23,
          name: "companents",
          type: "folder",
          status: "fixed",
          description: "",
          children: [],
        },
        {
          id: 24,
          name: "pages",
          type: "folder",
          status: "fixed",
          description: "",
          children: [],
        },
        {
          id: 25,
          name: "router",
          type: "folder",
          status: "fixed",
          description: "",
          opened: true,
          children: [
            {
              id: 251,
              name: "AppRouter.tsx",
              type: "file",
              status: "fixed",
              description: "",
            },
            {
              id: 252,
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
