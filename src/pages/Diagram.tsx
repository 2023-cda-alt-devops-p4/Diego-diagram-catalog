import { useLocation, useParams } from "react-router-dom";
import data from "../data/diagrams.json";
import { IDiagram } from "../models/diagram";
import { useEffect, useState } from "react";
import styles from "./Diagram.module.css";

export const Diagram = () => {
  const params = useParams();
  const { pathname } = useLocation();
  const [dataToDisplay, setDataToDisplay] = useState<IDiagram | null>(null);

  const meriseDiagrams = data.find((x) => x.type === "Merise")?.allDiagrams;
  const umlDiagrams = data.find((x) => x.type === "UML")?.allDiagrams;

  const filterDataById = (dataToFilter: IDiagram[]) => {
    const result = dataToFilter.filter(
      (x) => x.id === Number(params.id?.replace(/^\D+/g, ""))
    )[0];
    return result;
  };

  const getDiagramData = () => {
    if (pathname.includes("/merise")) {
      const meriseData = filterDataById(meriseDiagrams as IDiagram[]);
      setDataToDisplay(meriseData);
    } else {
      const umlData = filterDataById(umlDiagrams as IDiagram[]);
      setDataToDisplay(umlData);
    }
  };

  useEffect(() => {
    getDiagramData();
  }, []);

  if (dataToDisplay === null) return;

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h1 className={styles.title}>{dataToDisplay!.title}</h1>
        <a href={dataToDisplay.image} target="_blank">
        <img
          src={dataToDisplay.image}
          alt={`${dataToDisplay.title} image`}
          className={styles.image}
        />
        </a>
        <div className={styles.textContainer}>
          <p className={styles.paragraph}>{dataToDisplay.largeDescription}</p>
          <a
            href={dataToDisplay.source}
            target="_blank"
            className={styles.sourceLink}
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};
