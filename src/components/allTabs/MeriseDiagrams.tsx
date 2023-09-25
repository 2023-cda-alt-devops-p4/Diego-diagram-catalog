import { DiagramCard } from "../DiagramCard";
import { meriseDiagrams } from "../../data/merise";
import { IDiagram } from "../../models/diagram";
import styles from "./allTabs.module.css";

export const MeriseDiagrams = () => {
  return (
    <div className={styles.container}>
      <h1>Diagrammes Merise</h1>
      <div className={styles.cardsContainer}>
        {meriseDiagrams.map((meriseDiagram: IDiagram) => (
          <DiagramCard data={meriseDiagram} />
        ))}
      </div>
    </div>
  );
};
