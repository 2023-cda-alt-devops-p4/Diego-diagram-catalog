import { IDiagram } from "../models/diagram";
import styles from "./DiagramCard.module.css";

type DiagramCardProps = {
  data: IDiagram;
};

export const DiagramCard = ({ data }: DiagramCardProps) => {
  return (
    <div className={styles.container}>
      <img src={data.image} alt={`${data.title} image`} className={styles.cardImage} />
      <h3>{data.title}</h3>
      <p>{data.shortDescription}</p>
    </div>
  );
};
