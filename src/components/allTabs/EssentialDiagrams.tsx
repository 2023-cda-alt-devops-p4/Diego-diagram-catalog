import { DiagramCard } from "../DiagramCard";
import { meriseDiagrams } from "../../data/merise";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { IDiagram } from "../../models/diagram";
import styles from "./allTabs.module.css";

export const EssentialDiagrams = () => {
  const getEssentialDiagrams = (diagramToFilter: IDiagram[]) => {
    const essential = diagramToFilter.filter(
      (isEssential: IDiagram) => isEssential.essential
    );
    return essential
  }
  const essentialMerise = getEssentialDiagrams(meriseDiagrams);
  const essentialUml = getEssentialDiagrams(umlDiagrams);
  const essentialDiagrams = essentialMerise.concat(essentialUml);

  return ( 
    <div className={styles.container}>
      <h1>Diagrammes Indispensables</h1>
      <div className={styles.cardsContainer}>
        {essentialDiagrams.map((essentialDiagram: IDiagram) => (
          <DiagramCard data={essentialDiagram} />
        ))}
      </div>
    </div>
  );
};
