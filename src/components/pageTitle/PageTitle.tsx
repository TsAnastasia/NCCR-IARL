import { FC } from "react";
import scss from "./pageTitle.module.scss";

const PageTitle: FC<{ name: string }> = ({ name }) => {
  return <h1 className={scss.title}>{name}</h1>;
};

export default PageTitle;
