import { diagrams } from "../../data/diagrams";
import { ModelCard } from "../ModelCard";
import { umlDiagrams } from "../../data/UMLdiagrams";
import { meriseDiagrams } from "../../data/merise";
import styles from "./AllDiagrams.module.css";
import { Tab } from "../Tab";

export const AllDiagrams = () => {
  const umlData = diagrams.filter((UMLId) => UMLId.id === 1)[0];
  const meriseData = diagrams.filter((UMLId) => UMLId.id === 2)[0];

  return (
    <div className={styles.container}>
      <h1 className={styles.tabTitle}>Tous les diagrammes</h1>
      <ModelCard data={umlData} />
      <Tab
        tabTitle=""
        dataToDisplay={umlDiagrams}
        parentRoute="uml-diagrams"
        essentials={false}
      />
      <ModelCard data={meriseData} />
      <Tab
        tabTitle=""
        dataToDisplay={meriseDiagrams}
        parentRoute="merise-diagrams"
        essentials={false}
      />
    </div>
  );
};
