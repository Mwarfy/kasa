import data from "../../logements.json";
import { Thumb } from "./Thumb";
import "./Cards.css";

export const ListLogement: React.FC = () => {
  return (
    <div className="cards flex gap">
      {data.map(({ title, location, cover }, i) => (
        <Thumb title={title} location={location} img={cover} i={i} key={i} />
      ))}
    </div>
  );
};
