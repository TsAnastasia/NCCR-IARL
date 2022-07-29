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
      description:
        "Переменные окружения для `development` (для разработки) сборки.",
    },
    {
      id: "8c89428b-d844-4222-9dde-7edf87ba4fda",
      name: ".env.production",
      type: "file",
      description: "Переменные окружения для `production` сборки.",
    },
    {
      id: "dcd4682c-2e48-4af5-b2bc-78bc6e2c66dd",
      name: "Readme.md",
      type: "file",
      description:
        "Описание проекта, которое может содержать следующую информацию:\n – ссылка на макет;\n – ссылка на api;\n – ссылка на веб-сайт;\n – используемые технологии;\n – команда разработки;\n – доступные скрипты;\n – инструкции по сборке и запуску и т.д.",
      necessary: true,
    },
    {
      id: "ca32e833-1b18-4fec-96f9-c7da4949b0bd",
      name: ".babelrc",
      type: "file",
      description:
        "Конфигурация babel – транспилятора, преобразовывающего JSX и TypeScript в JS.",
      necessary: true,
    },
    {
      id: "f350f21d-a706-4db7-a126-36633249b498",
      name: ".eslintrc.json",
      type: "file",
      description:
        "Настройки ESLint – утилита, анализирующая написанный код.\n В используемом шаблоне настроена автоматическая проверка кода перед созданием коммита.",
      necessary: true,
    },
    {
      id: "560d725c-4ff3-4f2b-8eda-bb525a584cfb",
      name: ".gitignore",
      type: "file",
      description: "Список файлов и папок проекта, игнорируемых Git.",
      necessary: true,
    },
    {
      id: "006b855b-77b6-46b7-8704-4e8af844b1b3",
      name: ".prettierrc.json",
      type: "file",
      description:
        "Настройки Prettier – средство форматирования кода. \n В используемом шаблоне настроено автоматическое форматирование кода перед созданием коммита",
      necessary: true,
    },
    {
      id: "7c30d504-f4f1-4e75-aa77-a3112a5ca269",
      name: "base.dockerfile",
      type: "file",
      description: "Инструкции для создания образа контейнера.",
    },
    {
      id: "34207959-fbea-4033-b5ae-f1f6859f9816",
      name: "Dockerfile",
      type: "file",
      description: "Инструкции для создания образа контейнера.",
    },
    {
      id: "c05a156f-722b-4dea-8fa1-eab726732092",
      name: "package-lock.json",
      type: "file",
      description:
        "Список зависимостей вашего приложения и зависимостей всех его зависимостей.\n Предназначен для блокировки зависимостей от определенного номера версий.",
      necessary: true,
    },
    {
      id: "7d325332-746a-42ac-817c-4a1113c9a08e",
      name: "package.json",
      type: "file",
      description:
        "`Файл-манифест` проекта, содержащий:\n – список зависимостей верхнего уровня, необходимых приложению;\n – настройки различных вспомогательных инструментов;\n – скрипты проекта и т.д.",
      necessary: true,
    },
    {
      id: "dc82220a-0960-471e-a9bf-9602e98ce630",
      name: "tsconfig.json",
      type: "file",
      description: "Настройки TypeScript для проекта.",
      necessary: true,
    },
    {
      id: "bb081c52-b91c-4f3f-9e2c-42fdb5b93841",
      name: "yarn.lock",
      type: "file",
      description:
        "Список точных версий всех пакетов, установленных yarn в каталог `node_modules`.",
      necessary: true,
    },
    {
      id: "85912486-6fd0-409f-8f0b-dc8f769474be",
      name: "node_modules",
      type: "folder",
      description:
        "Все внешние библиотеки JavaScript, используемые приложением.",
      gitIgnore: true,
    },
    {
      id: "c70e2c3f-a991-428a-88e7-8cce2787ff92",
      name: "build",
      type: "folder",
      description:
        "Скомпилированная версия проекта – результат сборки (скрипт `build`).\n Минифицированный и оптимизированный код проекта.",
      gitIgnore: true,
    },
    {
      id: "fe8b9194-9864-4791-85b6-3178939dafcb",
      name: "webpack",
      type: "folder",
      description:
        "Настройки `webpack` – системы сборки проекта, генерирующей статические ресурсы из модулей зависимостей проекта.\n Трансформацией ресурсов занимаются загрузчики, которые являются сердцем вебпака.",
      necessary: true,
      children: [
        {
          id: "5a0e3167-ae23-4cba-9a67-cade32d56bb3",
          name: "webpack.common.js",
          type: "file",
          description:
            "Общие настройки для `production` и `development` сборок.",
          necessary: true,
        },
        {
          id: "3c653fa2-bcc6-48cd-a4f6-1db7a722d9fc",
          name: "webpack.config.js",
          type: "file",
          description: "Основная конфигурация для сборки проекта.",
          necessary: true,
        },
        {
          id: "0fd1b036-c924-4a7b-af37-15e8dfcd5973",
          name: "webpack.dev.js",
          type: "file",
          description: "Настройки `development` (для разработки) сборки.",
          necessary: true,
        },
        {
          id: "c82be7c2-1151-4637-9eed-5cb3b3d844c9",
          name: "webpack.prod.js",
          type: "file",
          description:
            "Настройки `production` сборки. \n Минифицированный и оптимизированный код проекта сохраняется в папку `build`.",
          necessary: true,
        },
      ],
    },
    {
      id: "3c7dec53-0f50-4908-9c00-d3cb54c20c51",
      name: "nginx",
      type: "folder",
      description: "Настройки nginx.",
      children: [
        {
          id: "76f7d996-b98d-4ae5-9372-60f7124024aa",
          name: "nginx.conf",
          type: "file",
          description: "Настройки nginx.",
        },
      ],
    },
    {
      id: "f953e389-3c2c-4273-af57-cf407eaaded2",
      name: "public",
      type: "folder",
      description:
        "Корневые ресурсы проекта: базовая страница html, значок веб-сайта и т.д.",
      necessary: true,
      children: [
        {
          id: "0190767f-6c52-4331-9e9d-c94e71390b9b",
          name: "index.html",
          type: "file",
          description:
            "Базовая страница HTML, выступающая в качестве корневой для проекта. \n Основа запуска проекта. \n Именно этот файл считывает сервер и отображает браузер. \n При необходимости в нем можно указать мета-данные проекта: имя, описание, автор и др.\n Также в нем можно подключить/импортировать необходимые шрифты, стили, изображения и библиотеки. Но лучше это делать через JavaScript.",
          necessary: true,
        },
        {
          id: "e2cdde0b-4ad1-4ec1-a1d2-528f73948024",
          name: "favicon.ico",
          type: "file",
          description:
            "Значок веб-сайта, отображаемый во вкладке страницы или в качестве картинки с закладкой, а также в адресной строке некоторых браузеров.",
        },
      ],
    },
    {
      id: "7077fd8b-9d93-43a3-855e-ba8451b6d26a",
      name: "src",
      type: "folder",
      description: "Код проекта, обрабатываемый webpack.",
      opened: true,
      necessary: true,
      children: [
        {
          id: "0e666006-05e3-4fe6-aaf0-63f9c4900a2d",
          name: "index.tsx",
          type: "file",
          description:
            "Точка входа JavaScript.\n Здесь приложение оборачивается в: \n – `BrowserRouter` из `react-router-dom` для навигации;\n – `Provider` из `react-redux` для создания глобального хранилища;\n – `PersistGate` из `redux-persist` для задержки рендеринга пользовательского интерфейса до получения состояния и сохранения его в `redux`;\n – `ThemeProvider` из `Material UI` для подключения темы.",
          necessary: true,
        },
        {
          id: "a5411a89-784d-4c73-915f-ac42dc4b9b82",
          name: "index.scss",
          type: "file",
          description:
            "Основная стилизация проекта: подключение шрифтов, обнуление стандартных стилей и т.д.",
        },
        {
          id: "5cf1ef43-0159-47dc-8db3-cbd2224026ab",
          name: "declarations.d.ts",
          type: "file",
          description: "Декларации типов для файлов изображений.",
        },
        {
          id: "6a3d7446-9392-4d39-b0c0-76dfacd4f5f3",
          name: "App.ts",
          type: "file",
          description:
            "Корневой элемент приложения, от которого идут все ответвления.\n Исходная точка кода `React`.",
          necessary: true,
        },
        {
          id: "6a21b0db-4444-4e38-9722-079dceb74c09",
          name: "app.module.scss",
          type: "file",
          description: "Стилизация для компонента `App`.",
        },
        {
          id: "93f9b0d4-d8fd-48d5-9b18-28cdea5a2f33",
          name: "app.module.scss.d.ts",
          type: "file",
          description:
            "Декларации типов для файла стилизации `app.module.scss`.\n Файл создается автоматически.",
        },
        {
          id: "27250c4c-58c8-46d3-859e-d0a5227920a3",
          name: "companents",
          type: "folder",
          description: "Общие компоненты приложения.",
          necessary: true,
          children: [
            {
              id: "a578c1a7-d1c0-4634-be15-ad4a186d7c4f",
              name: "Header",
              type: "folder",
              description: "Код шапки приложения.",
              children: [
                {
                  id: "47ff3503-1e38-450c-a3bb-738a7d88afb8",
                  name: "menu",
                  type: "folder",
                  description: "Код меню шапки приложения.",
                  children: [
                    {
                      id: "1e01a0ae-b234-4976-be82-f640db5f449e",
                      name: "HeaderMenu.tsx",
                      type: "file",
                      description: "Компонент меню из шапки приложения.",
                      necessary: true,
                    },
                    {
                      id: "099b1262-a076-4472-a169-75db5144464d",
                      name: "headerMenu.module.scss",
                      type: "file",
                      description: "Стилизация для компонента `HeaderMenu`.",
                    },
                    {
                      id: "40f10919-8a1e-43ea-94d3-bd6add901a0b",
                      name: "headerMenu.module.scss.d.ts",
                      type: "file",
                      description:
                        "Декларации типов для файла стилизации `headerMenu.module.scss`.\n Файл создается автоматически.",
                    },
                  ],
                },
                {
                  id: "13f2deeb-8efb-4350-9d97-cefd1f69b9e9",
                  name: "Header.tsx",
                  type: "file",
                  description: "Компонент шапки приложения.",
                  necessary: true,
                },
                {
                  id: "09bb6148-7018-40ac-9dab-ad1f9f326d20",
                  name: "header.module.scss",
                  type: "file",
                  description: "Стилизация для компонента `Header`.",
                },
                {
                  id: "4850d1e1-2f5a-43fb-977c-a2161d71e8ed",
                  name: "header.module.scss.d.ts",
                  type: "file",
                  description:
                    "Декларации типов для файла стилизации `header.module.scss`.\n Файл создается автоматически.",
                },
              ],
            },
            {
              id: "4ecc30db-bb17-485a-9ee7-ba2ce6b34545",
              name: "Footer",
              type: "folder",
              description: "Код подвала приложения.",
              children: [
                {
                  id: "55cea837-4529-4120-a8b2-63ec3cf6b4cb",
                  name: "Footer.tsx",
                  type: "file",
                  description: "Компонент подвала приложения.",
                  necessary: true,
                },
                {
                  id: "90e549d7-ab9c-40fa-910b-993d19b5d30e",
                  name: "footer.module.scss",
                  type: "file",
                  description: "Стилизация для компонента `Footer`.",
                },
                {
                  id: "5812167b-6b5a-4152-84a5-ed90d7a3d51f",
                  name: "footer.module.scss.d.ts",
                  type: "file",
                  description:
                    "Декларации типов для файла стилизации `footer.module.scss`.\n Файл создается автоматически.",
                },
              ],
            },
            {
              id: "9fe1be7c-195e-4e01-b4f8-56609067fe27",
              name: "forms",
              type: "folder",
              description:
                "Формы приложения.\n Часть форм может быть объединена в отдельные папки для их систематизации.",
              children: [
                {
                  id: "cfb00bcc-4fd9-4f34-9771-7a41e9e441c2",
                  name: "form",
                  type: "folder",
                  description: "Код формы приложения.",
                  patern: true,
                  children: [
                    {
                      id: "5c031496-2a7a-436a-babc-c298c835ee24",
                      name: "Form.tsx",
                      type: "file",
                      description:
                        "Компонент соответствующей формы приложения.",
                      necessary: true,
                    },
                    {
                      id: "af49f3b4-8bad-4384-8c4d-6e4e11568701",
                      name: "validationShema.ts",
                      type: "file",
                      description: "Схема валидации формы.",
                    },
                    {
                      id: "7098069b-3d70-4550-a164-7d797d23b931",
                      name: "form.module.scss",
                      type: "file",
                      description: "Стилизация для компонента `Form`.",
                    },
                    {
                      id: "3fc3cb72-3841-4308-b905-c7c927e65682",
                      name: "form.module.scss.d.ts",
                      type: "file",
                      description:
                        "Декларации типов для файла стилизации `form.module.scss`.\n Файл создается автоматически.",
                    },
                  ],
                },
              ],
            },
            {
              id: "17a79322-1b9b-4cfb-a422-07c28acb0e57",
              name: "outlets",
              type: "folder",
              description:
                "Код layout-компонентов, в которых есть `заглушка`, на место которой может вставляться вложенный компонент.",
              children: [
                {
                  id: "5f7ea4cd-9037-4760-b22c-12eceab38da0",
                  name: "app",
                  type: "folder",
                  description:
                    "Код layout-компонента с `заглушкой`, на место которой может вставляться вложенный компонент.",
                  patern: true,
                  children: [
                    {
                      id: "f9e65fdf-5be2-4f00-be34-6157babd37a7",
                      name: "AppOutlet.tsx",
                      type: "file",
                      description:
                        "Layout-компонент приложения с `заглушкой`, на место которой может вставляться вложенный компонент.",
                      necessary: true,
                    },
                    {
                      id: "3d3776ba-21e6-44c3-8da5-03383aefe48d",
                      name: "appOutlet.module.scss",
                      type: "file",
                      description: "Стилизация для компонента `AppOutlet`.",
                    },
                    {
                      id: "b00f6566-6ff4-4542-b748-69147f124d9c",
                      name: "appOutlet.module.scss.d.ts",
                      type: "file",
                      description:
                        "Декларации типов для файла стилизации `appOutlet.module.scss`.\n Файл создается автоматически.",
                    },
                  ],
                },
              ],
            },
            {
              id: "2b430a88-beff-474e-aed4-4c231994b6f5",
              name: "UI",
              type: "folder",
              description:
                "Код часто используемых компонентов пользовательского интерфейса: кнопки, поля ввода и выбора, лоадеры и т.д.",
              children: [
                {
                  id: "6ac34ce8-b5bf-4ab5-a6b4-a9be9331e4bc",
                  name: "buttons",
                  type: "folder",
                  description: "Код кнопок приложения.",
                  children: [
                    {
                      id: "9400d7e1-d46f-423c-99a9-82afd363c6d6",
                      name: "app",
                      type: "folder",
                      description: "Код основной кнопки приложения.",
                      patern: true,
                      children: [
                        {
                          id: "b84a95a4-2a2d-4802-adc1-84c6260998d8",
                          name: "AppButton.tsx",
                          type: "file",
                          description: "Компонент основной кнопки приложения.",
                          necessary: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "d31e9bb4-9536-4f8e-abf3-7f7064fdb015",
                  name: "selects",
                  type: "folder",
                  description: "Код полей выбора.",
                  children: [
                    {
                      id: "714f3783-fe08-44b6-93ef-5698064bdb39",
                      name: "multi",
                      type: "folder",
                      description: "Код поля множественного выбора.",
                      patern: true,
                      children: [
                        {
                          id: "85253156-78d3-4998-adb4-6c5e224e0dc6",
                          name: "MultiSelect.tsx",
                          type: "file",
                          description: "Компонент поля множественного выбора.",
                          necessary: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "4848351c-0c2a-4def-baa1-c87918a4a993",
                  name: "textFileds",
                  type: "folder",
                  description: "Код полей ввода.",
                  children: [
                    {
                      id: "06d1b00f-4555-43f4-9657-844cc025b5a5",
                      name: "label",
                      type: "folder",
                      description: "Код поля ввода с подписью.",
                      patern: true,
                      children: [
                        {
                          id: "ec03e82e-3176-4388-9ce8-3e9bea368507",
                          name: "LabelTextField.tsx",
                          type: "file",
                          description: "Компонент поля ввода с подписью.",
                        },
                        {
                          id: "8feb8a67-5343-44da-9de1-f35220c00258",
                          name: "labelTextField.module.scss",
                          type: "file",
                          description:
                            "Стилизация для компонента `LabelTextField`.",
                        },
                        {
                          id: "e2633344-8bfa-45ec-a8e8-0232b6341c22",
                          name: "labelTextField.module.scss.d.ts",
                          type: "file",
                          description:
                            "Декларации типов для файла стилизации `labelTextFieldr.module.scss`.\n Файл создается автоматически.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "ffa0d881-ffad-48cc-8030-257b106cd549",
                  name: "loaders",
                  type: "folder",
                  description: "Код лоадеров приложения.",
                  children: [
                    {
                      id: "03a3d93e-68af-4307-9fe0-f6a2ee4bdf67",
                      name: "app",
                      type: "folder",
                      description: "Код лоадера приложения.",
                      patern: true,
                      children: [
                        {
                          id: "3156f964-d2de-4f9c-9281-6f1c5b5416ed",
                          name: "AppLoader.tsx",
                          type: "file",
                          description: "Компонент лоадера приложения.",
                          necessary: true,
                        },
                        {
                          id: "29e989ab-65f0-4db7-ae33-7e23cefbd97a",
                          name: "appLoader.module.scss",
                          type: "file",
                          description: "Стилизация для компонента `AppLoader`.",
                        },
                        {
                          id: "8bd34323-e535-4b00-8186-aecd3c71b4bd",
                          name: "appLoader.module.scss.d.ts",
                          type: "file",
                          description:
                            "Декларации типов для файла стилизации `appLoader.module.scss`.\n Файл создается автоматически.",
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
              description: "Код всплывающих окон приложения.",
              children: [
                {
                  id: "a3d9fdd3-9703-4b8a-bf30-9825cdc17759",
                  name: "common",
                  type: "folder",
                  description: "Общие компоненты всплывающих окон приложения.",
                  children: [
                    {
                      id: "8bf573f6-3e1d-48f4-97c2-388b96b78ef4",
                      name: "modal",
                      type: "folder",
                      description: "Код всплывающего окна приложения.",
                      children: [
                        {
                          id: "75ab043e-ffeb-448d-863d-4d9b0e80e2a4",
                          name: "Modal.tsx",
                          type: "file",
                          description:
                            "Общий компонент всплывающего окна приложения.",
                        },
                        {
                          id: "05c447ff-005d-4e42-9b55-ee3f57098744",
                          name: "modal.module.scss",
                          type: "file",
                          description: "Стилизация для компонента `Modal`.",
                        },
                        {
                          id: "434c0d9e-f8dd-45c6-a877-a749cd60e957",
                          name: "modal.module.scss.d.ts",
                          type: "file",
                          description:
                            "Декларации типов для файла стилизации `modal.module.scss`.\n Файл создается автоматически.",
                        },
                      ],
                    },
                  ],
                },
                {
                  id: "68acea97-f140-46e9-9a55-5acff0ad34e8",
                  name: "popup",
                  type: "folder",
                  description: "Код всплывающего окна приложения.",
                  patern: true,
                  children: [
                    {
                      id: "bc63a4a1-72fd-41c4-ad12-cf2d33f02cb8",
                      name: "content",
                      type: "folder",
                      description:
                        "Код содержимого всплывающего окна приложения.",
                      children: [
                        {
                          id: "30a6e4ad-bbc0-4f17-8f48-695db2b0d72e",
                          name: "PopupContent.tsx",
                          type: "file",
                          description:
                            "Компонент содержимого всплывающего окна приложения.",
                          necessary: true,
                        },
                        {
                          id: "33c50954-3362-4748-8560-5ea6569fc0df",
                          name: "popupContent.module.scss",
                          type: "file",
                          description:
                            "Стилизация для компонента `PopupContent`.",
                        },
                        {
                          id: "c0ebdff6-ecfc-4059-9a28-b299d56bdaa8",
                          name: "popupContent.module.scss.d.ts",
                          type: "file",
                          description:
                            "Декларации типов для файла стилизации `popupContent.module.scss`.\n Файл создается автоматически.",
                        },
                      ],
                    },
                    {
                      id: "3bc08eaa-bf32-4644-9fd6-0485281dd788",
                      name: "Popup.tsx",
                      type: "file",
                      description:
                        "Компонент всплывающего окна приложения, содержащий также компонент, функциональность которого может вызывать это окно.",
                      necessary: true,
                    },
                    {
                      id: "a5c9b5c3-98e5-4a9f-8ecc-7efdb985b1a2",
                      name: "popup.module.scss",
                      type: "file",
                      description: "Стилизация для компонента `Popup`.",
                    },
                    {
                      id: "06aae3de-7143-4eb9-a9ef-5383d6aa7f36",
                      name: "popup.module.scss.d.ts",
                      type: "file",
                      description:
                        "Декларации типов для файла стилизации `popup.module.scss`.\n Файл создается автоматически.",
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
              description:
                "Настройки глобального хранилища приложения: \n - подключение редюсеров; \n - подключение localStorage или sessionStorage для хранения данных; \n - определение списка редюсеров, данные которых сохраняются в localStorage или sessionStorage; \n - и т.д.",
            },
          ],
        },
      ],
    },
  ],
};
