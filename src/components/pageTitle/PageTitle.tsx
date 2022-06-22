import { FC } from "react";
import scss from "./pageTitle.module.scss";

const PageTitle: FC<{ name: string; className?: string }> = ({
  name,
  className,
}) => {
  return <h1 className={`${className} ${scss.title}`}>{name}</h1>;
};

export default PageTitle;
