import { useCallback, useState } from "react";
import { IStructureItem } from "../../assets/types/structure";
import PageTitle from "../../components/pageTitle/PageTitle";
import { StructurePageContetxt } from "../../utils/contexts";
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
    <StructurePageContetxt.Provider value={{ selectedItem, selectItem }}>
      <main className={scss.root}>
        <PageTitle name="Структура проекта" className={scss.title} />

        <StructureScheme />
        <StructureInfo />
      </main>
    </StructurePageContetxt.Provider>
  );
};

export default StructurePage;
