import { DiagramCard } from "../DiagramCard";
import { meriseDiagrams } from "../../data/merise";
import { IDiagram } from "../../models/diagram";
import styles from "./allTabs.module.css";
import { Link } from "react-router-dom";

export const MeriseDiagrams = () => {
  return (
    <div className={styles.container}>
      <h1>Diagrammes Merise</h1>
      <div className={styles.cardsContainer}>
        {meriseDiagrams.map((meriseDiagram: IDiagram) => (
          <Link
            to={`/merise-diagrams/${meriseDiagram.id}`}
            key={meriseDiagram.id}
            className={styles.link}
          >
            <DiagramCard data={meriseDiagram} />
          </Link>
        ))}
      </div>
    </div>
  );
};
