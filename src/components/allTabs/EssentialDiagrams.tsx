import { meriseDiagrams } from "../../data/merise";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { IDiagram } from "../../models/diagram";
import { Tab } from "../Tab";

export const EssentialDiagrams = () => {
  const getEssentialDiagrams = (diagramToFilter: IDiagram[]) => {
    const essential = diagramToFilter.filter(
      (isEssential: IDiagram) => isEssential.essential
    );
    return essential;
  };
  const essentialMerise = getEssentialDiagrams(meriseDiagrams).map((x) => ({
    ...x,
    essentialId: `merise-${x.id}`,
  }));
  const essentialUml = getEssentialDiagrams(umlDiagrams).map((x) => ({
    ...x,
    essentialId: `uml-${x.id}`,
  }));
  const essentialDiagrams = essentialMerise.concat(essentialUml);

  return (
    <Tab
    tabTitle="Diagrammes Indispensables"
    dataToDisplay={essentialDiagrams}
    parentRoute="essentials"
    essentials={true}
    />
  );
};
