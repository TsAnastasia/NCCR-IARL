import { useCallback, useState } from "react";
import { StructurePageContext } from "../../assets/contexts/StructurePageContext";
import { IStructureItem } from "../../assets/types/structure";
import PageTitle from "../../components/pageTitle/PageTitle";
import StructureAbout from "./about/StructureAbout";
import StructureInfo from "./info/StructureInfo";
import StructureScheme from "./scheme/StructureScheme";
import scss from "./structurePage.module.scss";

const StructurePage = () => {
  const [selectedItem, setSelectedItem] = useState<IStructureItem | null>(null);

  const selectItem = useCallback(
    (item: IStructureItem | null) => setSelectedItem(item),
    []
  );

  return (
    <StructurePageContext.Provider value={{ selectedItem, selectItem }}>
      <main className={scss.root}>
        <PageTitle name="Структура проекта" className={scss.title} />
        <StructureAbout />

        <StructureScheme />
        <StructureInfo />
      </main>
    </StructurePageContext.Provider>
  );
};

export default StructurePage;
