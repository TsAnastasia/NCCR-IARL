import { FC } from "react";
import { Link } from "react-router-dom";
import { IPageCard } from "../../../assets/types/page";
import scss from "./homePageCard.module.scss";

const HomePageCard: FC<IPageCard> = ({ path, name, description }) => (
  <article className={scss.root}>
    <Link to={path} className={scss.title}>
      {name}
    </Link>
    {description && <div className={scss.description}>{description}</div>}
  </article>
);

export default HomePageCard;
