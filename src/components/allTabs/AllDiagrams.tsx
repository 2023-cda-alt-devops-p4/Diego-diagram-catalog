import { models } from "../../data/models";
import { ModelCard } from "../ModelCard";
import styles from "./AllDiagrams.module.css";
import { Tab } from "../Tab";
import data from "../../data/diagrams.json"
import { IDiagram } from "../../models/diagram";

export const AllDiagrams = () => {
  const umlData = models.filter((UMLId) => UMLId.id === 1)[0];
  const meriseData = models.filter((UMLId) => UMLId.id === 2)[0];
  const meriseDiagrams = data.find(x => x.type === 'Merise')?.allDiagrams;
  const umlDiagrams = data.find(x => x.type === 'UML')?.allDiagrams;

  return (
    <div className={styles.container}>
      <h1 className={styles.tabTitle}>Tous les diagrammes</h1>
      <ModelCard data={umlData} />
      <Tab
        tabTitle=""
        dataToDisplay={umlDiagrams as IDiagram[]}
        parentRoute="uml-diagrams"
        essentials={false}
      />
      <ModelCard data={meriseData} />
      <Tab
        tabTitle=""
        dataToDisplay={meriseDiagrams as IDiagram[]}
        parentRoute="merise-diagrams"
        essentials={false}
      />
    </div>
  );
};
