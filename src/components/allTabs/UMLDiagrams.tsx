import data from "../../data/diagrams.json";
import { IDiagram } from "../../models/diagram";
import { Tab } from "../Tab";

export const UMLDiagrams = () => {
  const umlDiagrams = data.find(x => x.type === 'UML')?.allDiagrams;
  return (
    <Tab
      tabTitle="Diagrammes UML"
      dataToDisplay={umlDiagrams as IDiagram[]}
      parentRoute="uml-diagrams"
      essentials={false}
    />
  );
};
