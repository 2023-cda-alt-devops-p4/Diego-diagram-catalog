import { meriseDiagrams } from "../../data/merise";
import { Tab } from "../Tab";

export const MeriseDiagrams = () => {
  return (
    <Tab
    tabTitle="Diagrammes Merise"
    dataToDisplay={meriseDiagrams}
    parentRoute="merise-diagrams"
    essentials={false}
    />
  );
};
