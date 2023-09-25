import { IUml } from "../models/uml";
import styles from "./DiagramCard.module.css";

type DiagramCardProps = {
  data: IUml;
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
