import { DiagramCard } from "../DiagramCard";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { IDiagram } from "../../models/diagram";
import styles from "./allTabs.module.css";

export const UMLDiagrams = () => {
  return (
    <div className={styles.container}>
      <h1>Diagrammes UML</h1>
      <div className={styles.cardsContainer}>
        {umlDiagrams.map((umlDiagram: IDiagram) => (
          <DiagramCard data={umlDiagram} />
        ))}
      </div>
    </div>
  );
};
