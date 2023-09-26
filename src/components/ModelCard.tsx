import { IDiagrams } from "../models/diagrams";
import styles from "./ModelCard.module.css";

type ModelCardProps = {
  data: IDiagrams;
};

export const ModelCard = ({ data }: ModelCardProps) => {
  return (
    <div className={styles.modelContainer}>
      <div className={styles.imgParent}>
        <img
          src={data.image}
          alt={`${data.title} image`}
          className={styles.modelImage}
        />
      </div>
      <h1 className={styles.modelTitle}>{data.title}</h1>
      <p>{data.description}</p>
      <div className={styles.softwareContainer}>
        Logiciels:
        {data.software.map((eachOne, i) => (
          <p className={styles.software} key={i}>{eachOne}</p>
        ))}
      </div>
    </div>
  );
};
