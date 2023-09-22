import { diagrams }from "../../data/diagrams";
import { DiagramCard } from "../DiagramCard";
import { ModelCard } from "../ModelCard";
import { umlDiagrams } from "../../data/UMLdiagrams";

export const AllDiagrams = () => {
  const umlData = diagrams.filter((UMLId) => UMLId.id === 1)[0];
  
  return (
    <div>
      <ModelCard data={umlData} />
      {
        umlDiagrams.map(umlDiagram => (
          <DiagramCard data={umlDiagram} />
        ))
      }
    </div>
  )
}
