import { IStructureItem } from "../types/structure";

export const projectStructure: IStructureItem = {
  id: "43e6d362-2b26-4f9a-9ce4-707a9a009e15",
  name: "project",
  type: "folder",
  description: "Корневая папка проекта.",
  opened: true,
  children: [
    {
      id: "dde0e90a-18bf-4a70-a447-a9a2b205f1b2",
      name: ".env.development",
      type: "file",
      description: "",
    },
    {
      id: "8c89428b-d844-4222-9dde-7edf87ba4fda",
      name: ".env.production",
      type: "file",
      description: "",
    },
    {
      id: "dcd4682c-2e48-4af5-b2bc-78bc6e2c66dd",
      name: "Readme.md",
      type: "file",
      description: "",
    },
    {
      id: "ca32e833-1b18-4fec-96f9-c7da4949b0bd",
      name: ".babelrc",
      type: "file",
      description: "",
    },
    {
      id: "f350f21d-a706-4db7-a126-36633249b498",
      name: ".eslintrc.json",
      type: "file",
      description: "",
    },
    {
      id: "560d725c-4ff3-4f2b-8eda-bb525a584cfb",
      name: ".gitignore",
      type: "file",
      description: "",
    },
    {
      id: "006b855b-77b6-46b7-8704-4e8af844b1b3",
      name: ".prettierrc.json",
      type: "file",
      description: "",
    },
    {
      id: "7c30d504-f4f1-4e75-aa77-a3112a5ca269",
      name: "base.dockerfile",
      type: "file",
      description: "",
    },
    {
      id: "34207959-fbea-4033-b5ae-f1f6859f9816",
      name: "Dockerfile",
      type: "file",
      description: "",
    },
    {
      id: "c05a156f-722b-4dea-8fa1-eab726732092",
      name: "package-lock.json",
      type: "file",
      description: "",
    },
    {
      id: "7d325332-746a-42ac-817c-4a1113c9a08e",
      name: "package.json",
      type: "file",
      description: "",
    },
    {
      id: "dc82220a-0960-471e-a9bf-9602e98ce630",
      name: "tsconfig.json",
      type: "file",
      description: "",
    },
    {
      id: "bb081c52-b91c-4f3f-9e2c-42fdb5b93841",
      name: "yarn.lock",
      type: "file",
      description: "",
    },
    {
      id: "85912486-6fd0-409f-8f0b-dc8f769474be",
      name: "node_modules",
      type: "folder",
      description: "",
    },
    {
      id: "c70e2c3f-a991-428a-88e7-8cce2787ff92",
      name: "build",
      type: "folder",
      description:
        "Скомпилированная версия проекта - результат сборки (скрипт `build`).",
      gitIgnore: true,
    },
    {
      id: "fe8b9194-9864-4791-85b6-3178939dafcb",
      name: "webpack",
      type: "folder",
      description: "",
      children: [
        {
          id: "5a0e3167-ae23-4cba-9a67-cade32d56bb3",
          name: "webpack.common.js",
          type: "file",
          description: "",
        },
        {
          id: "3c653fa2-bcc6-48cd-a4f6-1db7a722d9fc",
          name: "webpack.config.js",
          type: "file",
          description: "",
        },
        {
          id: "0fd1b036-c924-4a7b-af37-15e8dfcd5973",
          name: "webpack.dev.js",
          type: "file",
          description: "",
        },
        {
          id: "c82be7c2-1151-4637-9eed-5cb3b3d844c9",
          name: "webpack.prod.js",
          type: "file",
          description: "",
        },
      ],
    },
    {
      id: "3c7dec53-0f50-4908-9c00-d3cb54c20c51",
      name: "nginx",
      type: "folder",
      description: "",
      children: [
        {
          id: "76f7d996-b98d-4ae5-9372-60f7124024aa",
          name: "nginx.conf",
          type: "file",
          description: "",
        },
      ],
    },
    {
      id: "f953e389-3c2c-4273-af57-cf407eaaded2",
      name: "public",
      type: "folder",
      description: "Папка с файлами для настройки шаблона страниц проекта.",
      children: [
        {
          id: "0190767f-6c52-4331-9e9d-c94e71390b9b",
          name: "index.html",
          type: "file",
          description:
            "Начальный шаблон страницы проекта.\n При необходимости в нем можно указать мета-данные проекта: имя, описание, автор и др.\n Также в нем можно подключить/импортировать необходимые шрифты, стили, изображения и библиотеки. Но лучше это делать через JavaScript.",
          necessary: true,
        },
        {
          id: "e2cdde0b-4ad1-4ec1-a1d2-528f73948024",
          name: "favicon.ico",
          type: "file",
          description: "Иконка, отображаемая в названии вкладки сайта.",
        },
      ],
    },
    {
      id: "7077fd8b-9d93-43a3-855e-ba8451b6d26a",
      name: "src",
      type: "folder",
      description:
        "Папка с файлами, обрабатываемыми webpack. Внутри можно создавть подкаталоги.",
      opened: true,
      children: [
        {
          id: "0e666006-05e3-4fe6-aaf0-63f9c4900a2d",
          name: "index.tsx",
          type: "file",
          description: "Точка входа JavaScript.",
        },
        {
          id: "a5411a89-784d-4c73-915f-ac42dc4b9b82",
          name: "index.scss",
          type: "file",
          description: "",
        },
        {
          id: "5cf1ef43-0159-47dc-8db3-cbd2224026ab",
          name: "declarations.d.ts",
          type: "file",
          description: "",
        },
        {
          id: "6a3d7446-9392-4d39-b0c0-76dfacd4f5f3",
          name: "App.ts",
          type: "file",
          description: "",
        },
        {
          id: "6a21b0db-4444-4e38-9722-079dceb74c09",
          name: "app.module.scss",
          type: "file",
          description: "",
        },
        {
          id: "93f9b0d4-d8fd-48d5-9b18-28cdea5a2f33",
          name: "app.module.scss.d.ts",
          type: "file",
          description: "",
        },
        {
          id: "27250c4c-58c8-46d3-859e-d0a5227920a3",
          name: "companents",
          type: "folder",
          description: "",
          children: [
            {
              id: "a578c1a7-d1c0-4634-be15-ad4a186d7c4f",
              name: "header",
              type: "folder",
              description: "",
              children: [
                {
                  id: "47ff3503-1e38-450c-a3bb-738a7d88afb8",
                  name: "menu",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "1e01a0ae-b234-4976-be82-f640db5f449e",
                      name: "HeaderMenu.tsx",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "099b1262-a076-4472-a169-75db5144464d",
                      name: "headerMenu.module.scss",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "40f10919-8a1e-43ea-94d3-bd6add901a0b",
                      name: "headerMenu.module.scss.d.ts",
                      type: "file",
                      description: "",
                    },
                  ],
                },
                {
                  id: "13f2deeb-8efb-4350-9d97-cefd1f69b9e9",
                  name: "Header.tsx",
                  type: "file",
                  description: "",
                },
                {
                  id: "09bb6148-7018-40ac-9dab-ad1f9f326d20",
                  name: "header.module.scss",
                  type: "file",
                  description: "",
                },
                {
                  id: "4850d1e1-2f5a-43fb-977c-a2161d71e8ed",
                  name: "header.module.scss.d.ts",
                  type: "file",
                  description: "",
                },
              ],
            },
            {
              id: "4ecc30db-bb17-485a-9ee7-ba2ce6b34545",
              name: "footer",
              type: "folder",
              description: "",
              children: [
                {
                  id: "55cea837-4529-4120-a8b2-63ec3cf6b4cb",
                  name: "Footer.tsx",
                  type: "file",
                  description: "",
                },
                {
                  id: "90e549d7-ab9c-40fa-910b-993d19b5d30e",
                  name: "footer.module.scss",
                  type: "file",
                  description: "",
                },
                {
                  id: "5812167b-6b5a-4152-84a5-ed90d7a3d51f",
                  name: "footer.module.scss.d.ts",
                  type: "file",
                  description: "",
                },
              ],
            },
            {
              id: "9fe1be7c-195e-4e01-b4f8-56609067fe27",
              name: "forms",
              type: "folder",
              description: "",
              children: [
                {
                  id: "d74a9fe1-ab23-4bb2-8334-2649a5ffe475",
                  name: "sign",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "a31af319-0b44-4d02-8d72-884d8b07eedd",
                      name: "SigninForm.tsx",
                      type: "file",
                      description: "",
                      children: [],
                    },
                    {
                      id: "f95877b0-4e0b-4a14-9e31-89ca3f0c3651",
                      name: "SignupForm.tsx",
                      type: "file",
                      description: "",
                      children: [],
                    },
                    {
                      id: "7028e07e-05a2-46b7-aa16-e8b3208f5e84",
                      name: "validationShema.ts",
                      type: "file",
                      description: "",
                      children: [],
                    },
                    {
                      id: "4199e0e2-f602-447d-819f-d82c2525fd07",
                      name: "sign.module.scss",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "0e0979ed-0037-4784-813e-b9cff1548f06",
                      name: "sign.module.scss.d.ts",
                      type: "file",
                      description: "",
                    },
                  ],
                },
                {
                  id: "cfb00bcc-4fd9-4f34-9771-7a41e9e441c2",
                  name: "form",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "5c031496-2a7a-436a-babc-c298c835ee24",
                      name: "Form.tsx",
                      type: "file",
                      description: "",
                      children: [],
                    },
                    {
                      id: "af49f3b4-8bad-4384-8c4d-6e4e11568701",
                      name: "validationShema.ts",
                      type: "file",
                      description: "",
                      children: [],
                    },
                    {
                      id: "7098069b-3d70-4550-a164-7d797d23b931",
                      name: "form.module.scss",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "3fc3cb72-3841-4308-b905-c7c927e65682",
                      name: "form.module.scss.d.ts",
                      type: "file",
                      description: "",
                    },
                  ],
                },
              ],
            },
            {
              id: "17a79322-1b9b-4cfb-a422-07c28acb0e57",
              name: "outlets",
              type: "folder",
              description: "",
              children: [
                {
                  id: "5f7ea4cd-9037-4760-b22c-12eceab38da0",
                  name: "app",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "f9e65fdf-5be2-4f00-be34-6157babd37a7",
                      name: "AppOutlet.tsx",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "3d3776ba-21e6-44c3-8da5-03383aefe48d",
                      name: "appOutlet.module.scss",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "b00f6566-6ff4-4542-b748-69147f124d9c",
                      name: "appOutlet.module.scss.d.ts",
                      type: "file",
                      description: "",
                    },
                  ],
                },
              ],
            },
            {
              id: "2b430a88-beff-474e-aed4-4c231994b6f5",
              name: "UI",
              type: "folder",
              description: "",
              children: [
                {
                  id: "6ac34ce8-b5bf-4ab5-a6b4-a9be9331e4bc",
                  name: "buttons",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "9400d7e1-d46f-423c-99a9-82afd363c6d6",
                      name: "app",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "b84a95a4-2a2d-4802-adc1-84c6260998d8",
                          name: "AppButton.tsx",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                    {
                      id: "fe7d2ef6-d587-4f23-beec-65af9ae48f46",
                      name: "sign",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "acb578cb-11c9-423a-ace9-8cb8d542e7d1",
                          name: "SignButton.tsx",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                    {
                      id: "da25a6e9-36db-49e3-8549-5213c2e2d2ef",
                      name: "popup",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "9e0e67b3-763d-4c2a-8391-003ddfc9d156",
                          name: "PopupButton.tsx",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                    {
                      id: "b963489a-8d9e-41f9-898e-cd324fa11ceb",
                      name: "icon",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "e048f966-0562-4a11-9edc-2fe86408a3c3",
                          name: "IconButton.tsx",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "a1666a1a-8365-40a0-bec8-d4f68a44d3d5",
                          name: "iconButton.module.scss",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "944210b5-02fb-4546-b9bc-7a01d4f89f56",
                          name: "iconButton.module.scss.d.ts",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "d31e9bb4-9536-4f8e-abf3-7f7064fdb015",
                  name: "selects",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "714f3783-fe08-44b6-93ef-5698064bdb39",
                      name: "label",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "85253156-78d3-4998-adb4-6c5e224e0dc6",
                          name: "LabelSelect.tsx",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "13a8aa2a-2a94-4401-b969-278cf3ea8d19",
                          name: "labelSelect.module.scss",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "1f95add2-e129-4362-aacc-6763973ac48a",
                          name: "labelSelect.module.scss.d.ts",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                    {
                      id: "8ac6ee45-9df7-4dc9-806c-177c6331d0ca",
                      name: "outlined",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "60f08ec7-4c65-47e8-ba2a-d6262f29a465",
                          name: "OutlinedSelect.tsx",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "4848351c-0c2a-4def-baa1-c87918a4a993",
                  name: "textFileds",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "06d1b00f-4555-43f4-9657-844cc025b5a5",
                      name: "label",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "ec03e82e-3176-4388-9ce8-3e9bea368507",
                          name: "LabelTextField.tsx",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "8feb8a67-5343-44da-9de1-f35220c00258",
                          name: "labelTextField.module.scss",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "e2633344-8bfa-45ec-a8e8-0232b6341c22",
                          name: "labelTextField.module.scss.d.ts",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                    {
                      id: "f6294ced-621d-4e1d-8050-00a9ee52223f",
                      name: "sign",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "919b152d-4311-4e6c-84a5-834187055fcd",
                          name: "SignTextField.tsx",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "ffa0d881-ffad-48cc-8030-257b106cd549",
                  name: "loaders",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "03a3d93e-68af-4307-9fe0-f6a2ee4bdf67",
                      name: "spin",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "3156f964-d2de-4f9c-9281-6f1c5b5416ed",
                          name: "SpinLoader.tsx",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "29e989ab-65f0-4db7-ae33-7e23cefbd97a",
                          name: "spinLoader.module.scss",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "8bd34323-e535-4b00-8186-aecd3c71b4bd",
                          name: "spinLoader.module.scss.d.ts",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: "32afea50-cd2e-4a1d-af6b-f51ad006252c",
              name: "popups",
              type: "folder",
              description: "",
              children: [
                {
                  id: "a3d9fdd3-9703-4b8a-bf30-9825cdc17759",
                  name: "common",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "8bf573f6-3e1d-48f4-97c2-388b96b78ef4",
                      name: "modal",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "75ab043e-ffeb-448d-863d-4d9b0e80e2a4",
                          name: "PopupModal.tsx",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "05c447ff-005d-4e42-9b55-ee3f57098744",
                          name: "popupModal.module.scss",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "434c0d9e-f8dd-45c6-a877-a749cd60e957",
                          name: "popupModal.module.scss.d.ts",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "68acea97-f140-46e9-9a55-5acff0ad34e8",
                  name: "popup",
                  type: "folder",
                  description: "",
                  children: [
                    {
                      id: "bc63a4a1-72fd-41c4-ad12-cf2d33f02cb8",
                      name: "content",
                      type: "folder",
                      description: "",
                      children: [
                        {
                          id: "30a6e4ad-bbc0-4f17-8f48-695db2b0d72e",
                          name: "PopupContent.tsx",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "33c50954-3362-4748-8560-5ea6569fc0df",
                          name: "popupContent.module.scss",
                          type: "file",
                          description: "",
                        },
                        {
                          id: "c0ebdff6-ecfc-4059-9a28-b299d56bdaa8",
                          name: "popupContent.module.scss.d.ts",
                          type: "file",
                          description: "",
                        },
                      ],
                    },
                    {
                      id: "3bc08eaa-bf32-4644-9fd6-0485281dd788",
                      name: "Popup.tsx",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "a5c9b5c3-98e5-4a9f-8ecc-7efdb985b1a2",
                      name: "popup.module.scss",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "06aae3de-7143-4eb9-a9ef-5383d6aa7f36",
                      name: "popup.module.scss.d.ts",
                      type: "file",
                      description: "",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: "3d38edbc-f278-4a54-9f2a-a32c078ecb9e",
          name: "pages",
          type: "folder",
          description: "",
          children: [
            {
              id: "c04a0a89-29cf-480d-b288-4ead18f19a3e",
              name: "home",
              type: "folder",
              description: "",
              patern: true,
              children: [
                {
                  id: "4add042c-53bd-48f8-bf40-092a23048d77",
                  name: "about",
                  type: "folder",
                  description: "",
                  patern: true,
                  children: [
                    {
                      id: "1ebc18dd-ed67-40a9-909a-5e3dcb097504",
                      name: "HomeAbout.tsx",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "d777a508-a9e9-4f1a-bd8c-9968cde06191",
                      name: "homeAbout.module.scss",
                      type: "file",
                      description: "",
                    },
                    {
                      id: "98b79cbb-3c61-412b-91e1-3609a34fa92a",
                      name: "homeAbout.module.scss.d.ts",
                      type: "file",
                      description: "",
                    },
                  ],
                },
                {
                  id: "0281320b-5afa-4f33-a1eb-b5b6693a3b2d",
                  name: "HomePage.tsx",
                  type: "file",
                  description: "",
                },
                {
                  id: "aea7677a-a0c0-4462-bb07-a6b2b7641d42",
                  name: "homePage.module.scss",
                  type: "file",
                  description: "",
                },
                {
                  id: "02e90183-d160-46da-9c12-2ef9818723f3",
                  name: "homePage.module.scss.d.ts",
                  type: "file",
                  description: "",
                },
              ],
            },
          ],
        },
        {
          id: "655fd16e-682b-4ef9-b2f3-b8eea7bf15db",
          name: "assets",
          type: "folder",
          description: "",
          children: [
            {
              id: "77bd821f-1a26-468a-8286-d48f137a14a0",
              name: "images",
              type: "folder",
              description: "",
              children: [
                {
                  id: "2c62cb3c-76f3-4832-8e47-b0491d39be7b",
                  name: "logo.svg",
                  type: "file",
                  patern: true,
                  description: "",
                },
                {
                  id: "0ce1759d-e0bb-4314-8565-22ee8b62d70a",
                  name: "background.png",
                  type: "file",
                  patern: true,
                  description: "",
                },
                {
                  id: "2ddc26d9-508f-4d45-93a7-b5cea98b4cd4",
                  name: "image.jpg",
                  type: "file",
                  patern: true,
                  description: "",
                },
              ],
            },
            {
              id: "2152a828-17e8-4636-8888-c7be9e5f52aa",
              name: "data",
              type: "folder",
              description: "",
              children: [
                {
                  id: "d3889204-0838-41dd-b2cb-56dd1a51ad26",
                  name: "data.json",
                  type: "file",
                  description: "",
                },
                {
                  id: "38d2dcfd-1084-445d-8f08-eea0f1335819",
                  name: "data.ts",
                  type: "file",
                  patern: true,
                  description: "",
                },
              ],
            },
            {
              id: "0cd399be-1891-48e9-bd15-eb7b89652e20",
              name: "dataForAPI",
              type: "folder",
              description: "",
              children: [
                {
                  id: "70084e99-b8b4-46d6-9cde-7350efd16fcd",
                  name: "data.json",
                  type: "file",
                  description: "",
                },
                {
                  id: "59424e92-996e-431d-9d64-8143328b10d0",
                  name: "data.ts",
                  type: "file",
                  patern: true,
                  description: "",
                },
              ],
            },
            {
              id: "c3b4b93e-e1a0-4546-9ddf-28a2ebb7e4d9",
              name: "types",
              type: "folder",
              description: "",
              children: [
                {
                  id: "9495f859-6abe-4dbd-a498-7f5d46fcd58a",
                  name: "types.ts",
                  type: "file",
                  description: "",
                },
              ],
            },
            {
              id: "06ee1ec6-bdf2-4321-9a2f-b40cd7bfe821",
              name: "utils",
              type: "folder",
              description: "",
              children: [
                {
                  id: "793cca24-d98d-4ebd-b267-4bfdce29e7a2",
                  name: "formatter.ts",
                  type: "file",
                  description: "",
                },
                {
                  id: "b9421398-3d0a-4caa-9b26-665d3b558ed9",
                  name: "constants.ts",
                  type: "file",
                  description: "",
                },
              ],
            },
          ],
        },
        {
          id: "ddd8e0d5-552e-4800-87d5-33211dcc1c85",
          name: "API",
          type: "folder",
          description: "",
          children: [
            {
              id: "ff117698-39a2-4e93-8490-575e5fe52351",
              name: "route",
              type: "folder",
              description: "",
              children: [
                {
                  id: "22f329ed-3172-45cb-b45a-a526beeab562",
                  name: "routeAPI.ts",
                  type: "file",
                  description: "",
                },
                {
                  id: "40d6c2ef-1219-49d8-893f-a9aa9eac5a83",
                  name: "routeInterface.ts",
                  type: "file",
                  patern: true,
                  description: "",
                },
              ],
            },
            {
              id: "96206fe8-1457-4fa3-90e8-67d316cad17e",
              name: "baseURL.ts",
              type: "file",
              patern: true,
              description: "",
            },
          ],
        },
        {
          id: "186e2fec-36da-4a8f-ab2d-1415a369843e",
          name: "hooks",
          type: "folder",
          description: "",
          children: [
            {
              id: "0f6fe6b1-76fc-463a-a474-a67f93d798fa",
              name: "redux.ts",
              type: "file",
              description: "",
            },
            {
              id: "ef1a3615-ac98-462e-b501-59fef987eceb",
              name: "useSmthHook.ts",
              type: "file",
              patern: true,
              description: "",
            },
          ],
        },
        {
          id: "df00ffd0-b755-4c2c-856f-6a0a0fbba198",
          name: "router",
          type: "folder",
          description: "",
          children: [
            {
              id: "3793c5b3-5a5a-4bf0-9554-0767d3b0a81b",
              name: "AppRouter.tsx",
              type: "file",
              description: "",
            },
            {
              id: "64675241-15bf-4708-b602-437a5108a350",
              name: "router.tsx",
              type: "file",
              description: "",
            },
          ],
        },
        {
          id: "816e7974-8909-45fa-9782-a2465f5e4455",
          name: "redux",
          type: "folder",
          description: "",
          children: [
            {
              id: "5a9ea981-8394-4114-bd5c-59fdc0f59f19",
              name: "reducer",
              type: "folder",
              description: "",
              patern: true,
              children: [
                {
                  id: "1996e9b8-ea89-45b2-bc90-6c4d899052c6",
                  name: "reducerSlice.ts",
                  type: "file",
                  description: "",
                  patern: true,
                },
              ],
            },
            {
              id: "eea5faa1-54f6-410f-ace6-2c77c7b0a0bc",
              name: "store.ts",
              type: "file",
              description: "",
            },
          ],
        },
      ],
    },
  ],
};
