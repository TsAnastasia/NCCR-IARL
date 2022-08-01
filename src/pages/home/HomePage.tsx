import { Link } from "react-router-dom";
import PageTitle from "../../components/pageTitle/PageTitle";
import { RouteNames } from "../../router/router";

const pages: {
  path: string;
  name: string;
  description: string;
}[] = [
  {
    path: RouteNames.STRUCTURE,
    name: "project's structure",
    description: "some description",
  },
  {
    path: RouteNames.CODE,
    name: "recommendations for writing code",
    description: "some description",
  },
  {
    path: RouteNames.GIT,
    name: "work with git",
    description: "some description",
  },
];

const HomePage = () => {
  return (
    <main>
      <PageTitle>Frontend rules</PageTitle>
      <section>
        <h2>about project</h2>
        <p>description</p>
      </section>

      <section>
        <h2>pages</h2>
        <ul>
          {pages.map(({ path, name, description }) => (
            <li key={path}>
              <Link to={path}>{name}</Link>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
