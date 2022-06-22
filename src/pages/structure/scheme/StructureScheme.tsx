import { projectStructure } from "../../../assets/data/structure";
import StructureSchemeItem from "./item/StructureSchemeItem";
import scss from "./structureScheme.module.scss";

const StructureScheme = () => {
  return (
    <section className={scss.root}>
      <StructureSchemeItem item={projectStructure} />
    </section>
  );
};

export default StructureScheme;
