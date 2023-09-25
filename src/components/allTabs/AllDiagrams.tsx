import { diagrams } from "../../data/diagrams";
import { DiagramCard } from "../DiagramCard";
import { ModelCard } from "../ModelCard";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { meriseDiagrams } from "../../data/merise";
import styles from "./allTabs.module.css";
import { Link } from "react-router-dom";

export const AllDiagrams = () => {
  const umlData = diagrams.filter((UMLId) => UMLId.id === 1)[0];
  const meriseData = diagrams.filter((UMLId) => UMLId.id === 2)[0];
  
  return (
    <div className={styles.container}>
      <h1>Tous les diagrammes</h1>
      <ModelCard data={umlData} />
      <div className={styles.cardsContainer}>
        {umlDiagrams.map((umlDiagram) => (
          <Link
            to={`/uml-diagrams/${umlDiagram.id}`}
            key={`uml ${umlDiagram.id}`}
            className={styles.link}
          >
            <DiagramCard data={umlDiagram} />
          </Link>
        ))}
      </div>
      <ModelCard data={meriseData} />
      <div className={styles.cardsContainer}>
        {meriseDiagrams.map((meriseDiagram, i) => (
          <Link
            to={`/merise-diagrams/${meriseDiagram.id}`}
            key={`merise ${i}`}
            className={styles.link}
          >
            <DiagramCard data={meriseDiagram} />
          </Link>
        ))}
      </div>
    </div>
  );
};
