import { FC } from "react";
import { cl } from "../../assets/utils/classnames";
import scss from "./pageTitle.module.scss";

const PageTitle: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  return <h1 className={cl(className, scss.title)}>{name}</h1>;
};

export default PageTitle;
