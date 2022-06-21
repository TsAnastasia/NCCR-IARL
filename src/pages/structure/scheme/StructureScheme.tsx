import { projectStructure } from "../../../assets/data/structure";
import StructureSchemeItem from "./item/StructureSchemeItem";

const StructureScheme = () => {
  return (
    <section>
      <StructureSchemeItem {...projectStructure} />
    </section>
  );
};

export default StructureScheme;
