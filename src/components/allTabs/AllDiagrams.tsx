import { diagrams } from "../../data/diagrams";
import { DiagramCard } from "../DiagramCard";
import { ModelCard } from "../ModelCard";
import { umlDiagrams } from "../../data/UMLdiagrams";
import styles from "./allTabs.module.css";

export const AllDiagrams = () => {
  const umlData = diagrams.filter((UMLId) => UMLId.id === 1)[0];

  return (
    <div className={styles.container}>
      <ModelCard data={umlData} />
      <div className={styles.cardsContainer}>
        {umlDiagrams.map((umlDiagram) => (
          <DiagramCard data={umlDiagram} />
        ))}
      </div>
    </div>
  );
};
