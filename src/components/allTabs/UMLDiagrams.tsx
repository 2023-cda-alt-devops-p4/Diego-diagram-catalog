import { umlDiagrams } from "../../data/UMLdiagrams";
import { Tab } from "../Tab";

export const UMLDiagrams = () => {
  return (
    <Tab
      tabTitle="Diagrammes UML"
      dataToDisplay={umlDiagrams}
      parentRoute="uml-diagrams"
      essentials={false}
    />
  );
};
