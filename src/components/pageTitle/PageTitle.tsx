import { FC } from "react";
import { cl } from "../../assets/utils/classnames";
import scss from "./pageTitle.module.scss";

const PageTitle: FC<{
  children: string;
  className?: string;
  type?: "h1" | "h2";
  component?: "h1" | "h2" | "h3";
}> = ({ children, className, type = "h1", component }) => {
  const Component = component || type;
  return (
    <Component className={cl(className, scss.title, scss[type])}>
      {children}
    </Component>
  );
};

export default PageTitle;
