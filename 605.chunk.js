"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[605],{5605:(e,i,n)=>{n.r(i),n.d(i,{default:()=>a});var t=n(9982);const c=JSON.parse('[{"group":"Создание репозитория","commands":[{"command":"git init [project_name]","description":"создать новый локальный репозиторий"},{"command":"git clone [url]","description":"скачать/клонировать существующий репозиторий"},{"command":"git clone [url] [folder]","description":"скачать/клонировать существующий репозиторий в указанную папку"}]},{"group":"Отслеживание репозитория","commands":[{"command":"git status","description":"список новых и измененных файлов, еще не закоммитеных."},{"command":"git diff","description":"изменения, не подготовленные для фиксации (не добавленные в индекс)"},{"command":"git diff --cached","description":"изменения в индексированных файлах"},{"command":"git diff HEAD","description":"все индексированные и неиндексированные изменения файлов относительно HEAD"},{"command":"git diff [commit1] [commit2]","description":"различия между двумя коммитами"},{"command":"git blame [file]","description":"дата и автор изменений файла"},{"command":"git show [commit]:[file]","description":"список изменений файла в определенном коммите"},{"command":"git log","description":"полная история изменений"},{"command":"git log -p [file/directory]","description":"история изменений файла/папки, включая различия"},{"command":"git log --onleline --graph","description":"история коммитов в виде графика для текущей ветки"}]},{"group":"Работа с ветками","commands":[{"command":"git branch","description":"список всех локальных папок"},{"command":"git branch -av","description":"список всех веток (из локального и удаленного репозиториев)"},{"command":"git branch [new_branch]","description":"создание новой ветки"},{"command":"git checkout [branch]","description":"переключение к указанной ветке"},{"command":"git checkout -b[new_branch]","description":"создание новой ветки и переключение к ней"},{"command":"git branch -d [deleted_branch]","description":"удалить указанную ветку"},{"command":"git tag [name]","description":"создать тег для текущего коммита"},{"command":"git merge [branch]","description":"смержить изменения из указанной ветки в текущую"},{"command":"git rebase [branch]","description":"подтянуть изменения из указанной векти и перезаписать историю изменений из текущей поверх них"}]},{"group":"Изменения (коммиты)","commands":[{"command":"git add [file]","description":"индексировать файл"},{"command":"git add .","description":"индексировать все файлы"},{"command":"git commit -m \\"message\\"","description":"зафиксировать (записать коммит) индексированные файлы с указанным сообщением"},{"command":"git commit -am \\"message\\"","description":"зафиксировать (записать коммит) все отслеживаемые файлы (в том числе не индексированные) с указанным сообщением"},{"command":"git reset [file]","description":"откатить изменения для указанного файла"},{"command":"git reset --hard","description":"откатить все изменения до последней фиксации"}]},{"group":"Синхронизация","commands":[{"command":"git fetch","description":"получить последние изменения с удаленного репозитория без слияния"},{"command":"git pull","description":"получить последние изменения с сервера и смержить их"},{"command":"git pull --rebase","description":"получить изменения из удаленного репозитория и наложить незапушенные коммиты поверх скачанных"},{"command":"git push","description":"отправить локальные изменения в удаленный репозиторий"}]},{"group":"Справка","commands":[{"command":"git [command] --help","description":"получить справку по указанной команде"}]}]');var r=n(5893);const o=function(){return(0,r.jsxs)("section",{children:[(0,r.jsx)(t.Z,{type:"h2",children:"Основные комнады git"}),c.map((function(e,i){var n=e.group,t=e.commands;return(0,r.jsxs)("article",{children:[(0,r.jsx)("h3",{children:n}),(0,r.jsx)("ul",{children:t.map((function(e,i){var n=e.command,t=e.description;return(0,r.jsx)("li",{children:(0,r.jsxs)("p",{children:[(0,r.jsx)("span",{children:n}),t]})},i)}))})]},i)}))]})},d=JSON.parse('[{"title":"Основные сведения","rules":["`main` (`master`) – основная ветка, текущее состояние проекта в производстве.","`develop` – главная ветка разработки, состояние кодовой базы проекта на текущий момент.","Векти `main` и `develop` – постоянные, работу с ними НЕ СЛЕДУЕТ вести НАПРЯМУЮ.","Главный (frontend-)разработчик – сотрудник, ответственный за frontend часть проекта."]},{"title":"Разработка нового функционала","rules":["При разработке нового функционала необходимо ответвиться от ветки `develop`и вести работу во вновь созданной ветке.","При именовании веток следует использовать короткие, описательные названия: `home-page`, `style-smth`, `fix-smth-error`, `refactor-smth` и т.д.","В названии веток несколько слов следует разделять дефисом `-` и при необходимости имя разработчика можно указать после косой черты `/`.","При работе нескольких человек над одним функционалом удобно создать общую ветку (`feature-a/main`) и отдельные ветви для каждого разработчика (`feature-a/denis`, `feature-a/nastya`). Все изменения будут сливаться в общую ветку, которая по завершению будет добавлена в главную."]},{"title":"Коммиты","rules":["Сообщения коммитам следует писать на английском. При этом рекомендуется начать с глагола:  `create`, `make`, `add`, `split`, `style`, `fix`, `refactor`, `delete` и т.д. ","Каждый коммит должен представлять собой одно законченное изменение. Не советуем разбивать одно логическое изменение на несколько коммитов и наоборот, не рекомендуется несколько изменений записывать в один коммит.","Постоянно сохраняйте свои изменения. Небольшие атомарные коммиты легче понять и отменить, если что-то пойдет не так.","Коммиты должны идти в логическом порядке. Если коммит X зависит от изменений коммита Y, то эти изменения необходимо сохранить перед сохранением X."]},{"title":"Слияние изменений","rules":["После завершения разработки вашего кусочка кода необходимо влить изменения в ветку `develop` с помощью инструмента `pull request` (gitHub) / `merge request` (gitLab).","Для начала необходимо проверить, что в вашей ветке есть последние изменения из `develop`, в противном случае могут быть конфликты.","Подтянуть изменения из ветки `develop` в вашу можно двумя способами:","1. Команда `rebase` (подтягивает изменения из указанной ветки в вашу и затем перезаписывает историю ваших коммитов). Рекомендуется использовать, когда ваш код содержит небольшие изменения и еще не был отправлен в удаленный репозиторий.","2. Команда `merge` – залить изменения из указанной ветки в вашу.","Все конфликты должны быть решены в вашей ветке под доработку.","После решения всех конфликтов главный разработчик должен проверить ваш код. При необходимости он может потребовать доработать ваш код.","После согласования вашего кода главным разработчиком он подтверждает ваши изменения, добавив их в главную ветку.","Если нет необходимости хранить изменения, сделанные в вашей ветке, то после ее слияния следует ее удалить.","Изменения из ветки `develop` сливаются в ветку `main` ГЛАВНЫМ РАЗРАБОТЧИКОМ после всех необходимых проверок."]}]');const m=function(){return(0,r.jsxs)("section",{children:[(0,r.jsx)(t.Z,{type:"h2",children:"Правила работы с git"}),d.map((function(e,i){var n=e.title,t=e.rules;return(0,r.jsxs)("article",{children:[(0,r.jsx)("h3",{children:n}),t.map((function(e,i){return(0,r.jsx)("p",{children:e},i)}))]},i)}))]})};const a=function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(t.Z,{children:"Git"}),(0,r.jsx)(m,{}),(0,r.jsx)(o,{})]})}}}]);
//# sourceMappingURL=605.chunk.js.map