import { ReactNode } from "react";
import ExternalLink from "../../components/externalLink/ExternalLink";
import { RouteNames } from "../../router/router";
import { TEMPLATE_LINK } from "./constants";

export const pages: {
  path: string;
  name: string;
  description?: ReactNode;
}[] = [
  {
    path: RouteNames.STRUCTURE,
    name: "Структура проекта",
    description: (
      <p>
        Пример структуры проекта с описанием всех его папок и файлов,
        сформированной на основе{" "}
        <ExternalLink href={TEMPLATE_LINK}>применяемого шаблона</ExternalLink>.
      </p>
    ),
  },
  {
    path: RouteNames.CODE,
    name: "Рекомендации по написанию кода",
  },
  {
    path: RouteNames.GIT,
    name: "Правила при работе с git",
    description: (
      <>
        <p>
          Описание правил и рекомендаций при работе с `git`: создание веток,
          слияние изменений и т.д.
        </p>
        <p> Также есть шпаргалка по основным командам `git`.</p>
      </>
    ),
  },
];
