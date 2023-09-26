import data from "../../data/diagrams.json";
import { IDiagram } from "../../models/diagram";
import { Tab } from "../Tab";

export const MeriseDiagrams = () => {
  const meriseDiagrams = data.find(x => x.type === 'Merise')?.allDiagrams;
  return (
    <Tab
    tabTitle="Diagrammes Merise"
    dataToDisplay={meriseDiagrams as IDiagram[]}
    parentRoute="merise-diagrams"
    essentials={false}
    />
  );
};
