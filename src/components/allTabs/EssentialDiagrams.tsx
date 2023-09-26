import { IDiagram } from "../../models/diagram";
import { Tab } from "../Tab";
import data from "../../data/diagrams.json"

export const EssentialDiagrams = () => {
  const meriseDiagrams = data.find(x => x.type === 'Merise')?.allDiagrams;
  const umlDiagrams = data.find(x => x.type === 'UML')?.allDiagrams;
  
  const getEssentialDiagrams = (diagramToFilter: IDiagram[]) => {
    const essential = diagramToFilter.filter(
      (isEssential: IDiagram) => isEssential.essential
    );
    return essential;
  };
  const essentialMerise = getEssentialDiagrams(meriseDiagrams as IDiagram[]).map((x) => ({
    ...x,
    essentialId: `merise-${x.id}`,
  }));
  const essentialUml = getEssentialDiagrams(umlDiagrams as IDiagram[]).map((x) => ({
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
