import { diagrams } from "../../data/diagrams";
import { DiagramCard } from "../DiagramCard";
import { ModelCard } from "../ModelCard";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { meriseDiagrams } from "../../data/merise";
import styles from "./allTabs.module.css";

export const AllDiagrams = () => {
  const umlData = diagrams.filter((UMLId) => UMLId.id === 1)[0];
  const meriseData = diagrams.filter((UMLId) => UMLId.id === 2)[0];

  return (
    <div className={styles.container}>
      <h1>Tous les diagrammes</h1>
      <ModelCard data={umlData} />
      <div className={styles.cardsContainer}>
        {umlDiagrams.map((umlDiagram) => (
          <DiagramCard data={umlDiagram} />
        ))}
      </div>
      <ModelCard data={meriseData} />
      <div className={styles.cardsContainer}>
        {meriseDiagrams.map((meriseDiagram) => (
          <DiagramCard data={meriseDiagram} />
        ))}
      </div>
    </div>
  );
};
