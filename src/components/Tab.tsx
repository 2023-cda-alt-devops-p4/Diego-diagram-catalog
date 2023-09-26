import { Link } from "react-router-dom";
import { IDiagram } from "../models/diagram";
import { DiagramCard } from "./DiagramCard";
import styles from "./Tab.module.css";

type TabProps = {
  tabTitle: string;
  dataToDisplay: IDiagram[];
  parentRoute: string;
  essentials: boolean;
};

export const Tab = ({
  tabTitle,
  dataToDisplay,
  parentRoute,
  essentials,
}: TabProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.tabTitle}>{tabTitle}</h1>
      <div className={styles.cardsContainer}>
        {dataToDisplay.map((data: IDiagram) => (
          <Link
            to={`/${parentRoute}/${!essentials ? data.id : data.essentialId}`}
            key={!essentials ? data.id : data.essentialId}
            className={styles.link}
          >
            <DiagramCard data={data} />
          </Link>
        ))}
      </div>
    </div>
  );
};
