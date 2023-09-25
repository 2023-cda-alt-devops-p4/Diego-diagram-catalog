import { DiagramCard } from "../DiagramCard";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { IDiagram } from "../../models/diagram";
import styles from "./allTabs.module.css";
import { Link } from "react-router-dom";

export const UMLDiagrams = () => {
  return (
    <div className={styles.container}>
      <h1>Diagrammes UML</h1>
      <div className={styles.cardsContainer}>
        {umlDiagrams.map((umlDiagram: IDiagram) => (
          <Link
            to={`/uml-diagrams/${umlDiagram.id}`}
            key={umlDiagram.id}
            className={styles.link}
          >
            <DiagramCard data={umlDiagram} />
          </Link>
        ))}
      </div>
    </div>
  );
};
