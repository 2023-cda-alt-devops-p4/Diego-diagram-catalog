import { useLocation, useParams } from "react-router-dom";
import { meriseDiagrams } from "../data/merise";
import { umlDiagrams } from "../data/UMLdiagrams";
import { IDiagram } from "../models/diagram";
import { useEffect, useState } from "react";
import styles from "./Diagram.module.css";

export const Diagram = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const [dataToDisplay, setDataToDisplay] = useState<IDiagram | null>(null);

  const filterDataById = (dataToFilter: IDiagram[]) => {
      const result = dataToFilter.filter((x) => x.id === Number(params.id?.replace(/^\D+/g, '')))[0];
      return result;
  }

  const getDiagramData = () => {
    if (pathname.includes("/merise")) {
      const meriseData = filterDataById(meriseDiagrams);
      setDataToDisplay(meriseData);
    } else {
      const umlData = filterDataById(umlDiagrams);
      setDataToDisplay(umlData);
    }
  };

  useEffect(() => {
    getDiagramData();
  }, []);

  if (dataToDisplay === null) return;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{dataToDisplay!.title}</h1>
      <img src={dataToDisplay.image} alt={`${dataToDisplay.title} image`} className={styles.image} />
      <p className={styles.paragraph}>{dataToDisplay.largeDescription}</p>
      <a href={dataToDisplay.source} target="_blank" className={styles.sourceLink}>
        Read more
      </a>
    </div>
  );
};
