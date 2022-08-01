import { FC } from "react";
import { cl } from "../../assets/utils/classnames";
import scss from "./externalLink.module.scss";

const ExternalLink: FC<{
  href: string;
  children: string;
  className?: string;
}> = ({ href, children, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={cl(className, scss.link)}
  >
    {children}
  </a>
);

export default ExternalLink;
