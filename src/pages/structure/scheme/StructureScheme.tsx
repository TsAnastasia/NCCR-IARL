import structureSheme from "../../../assets/data/structureScheme.json";
import StructureSchemeItem from "./item/StructureSchemeItem";
import scss from "./structureScheme.module.scss";

const StructureScheme = () => {
  return (
    <section className={scss.root}>
      <StructureSchemeItem scheme={structureSheme} />
    </section>
  );
};

export default StructureScheme;
