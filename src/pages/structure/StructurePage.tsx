import { useCallback, useState } from "react";
import { IStructureItem } from "../../assets/types/structure";
import PageTitle from "../../components/pageTitle/PageTitle";
import { SelectedStructureItemContext } from "../../utils/contexts";
import StructureScheme from "./scheme/StructureScheme";
import scss from "./structurePage.module.scss";

const StructurePage = () => {
  const [selectedItem, setSelectedItem] = useState<IStructureItem | null>(null);

  const selectItem = useCallback(
    (item: IStructureItem | null) => setSelectedItem(item),
    []
  );

  return (
    <SelectedStructureItemContext.Provider value={{ selectedItem, selectItem }}>
      <main className={scss.root}>
        <PageTitle name="Project's structure" />

        <StructureScheme />
        <section>file/folder info {selectedItem?.name}</section>
      </main>
    </SelectedStructureItemContext.Provider>
  );
};

export default StructurePage;
