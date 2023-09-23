import { IUml } from "../models/uml";

type DiagramCardProps = {
  data: IUml;
};

export const DiagramCard = ({data}: DiagramCardProps) => {
  return (
    <div>
      <img src={data.image} alt={`${data.title} image`} />
      <h3>{data.title}</h3>
      <p>{data.shortDescription}</p>
    </div>
  )
}
