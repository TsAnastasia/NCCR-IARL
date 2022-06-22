import { projectStructure } from "../../../assets/data/structure";
import StructureSchemeItem from "./item/StructureSchemeItem";
import scss from "./structureSheme.module.scss";

const StructureScheme = () => {
  return (
    <section className={scss.root}>
      <StructureSchemeItem {...projectStructure} />
    </section>
  );
};

export default StructureScheme;
