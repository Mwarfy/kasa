import data from "../../logements.json";
import { Card } from "./Card";
import "./Cards.css";

export const Cards: React.FC = () => {
  return (
    <div className="cards flex gap">
      {data.map(({ title, location, cover }, i) => (
        <Card title={title} location={location} img={cover} i={i} key={i} />
      ))}
    </div>
  );
};
