import { IDiagrams } from "../models/diagrams";
import styles from "./ModelCard.module.css";

type ModelCardProps = {
  data: IDiagrams;
};

export const ModelCard = ({ data }: ModelCardProps) => {
  console.log("here", data);

  return (
    <div className={styles.modelContainer}>
      <img
        src={data.image}
        alt={`${data.title} image`}
        className={styles.modelImage}
      />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className={styles.softwareContainer}>
        Logiciels:
      {data.software.map((eachOne) => (
        <p className={styles.software}>{eachOne}</p>
      ))}
      </div>
    </div>
  );
};
