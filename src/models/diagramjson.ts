import { IDiagram } from "./diagram";

export interface IDiagramJSON {
  type: string;
  allDiagrams?: IDiagram[]
}
