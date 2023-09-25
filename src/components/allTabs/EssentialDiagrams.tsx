import { DiagramCard } from "../DiagramCard";
import { meriseDiagrams } from "../../data/merise";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { IDiagram } from "../../models/diagram";
import styles from "./allTabs.module.css";
import { Link } from "react-router-dom";

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
    <div className={styles.container}>
      <h1>Diagrammes Indispensables</h1>
      <div className={styles.cardsContainer}>
        {essentialDiagrams.map((essentialDiagram: IDiagram) => (
          <Link
            to={`/essentials/${essentialDiagram.essentialId}`}
            key={essentialDiagram.essentialId}
            className={styles.link}
          >
            <DiagramCard data={essentialDiagram} />
          </Link>
        ))}
      </div>
    </div>
  );
};
