import { useLocation } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import { Carroussel } from "../components/LogementsComponents/Carroussel";
import { Profil } from "../components/LogementsComponents/Profil";
import { Stars } from "../components/LogementsComponents/Stars";
import { Tags } from "../components/LogementsComponents/Tags";
import data from "../logements.json";
import "./Logement.css";

export const Logements: React.FC = () => {
  const location = useLocation();
  const id = location.state.id;
  return (
    <div className="flex flex-col gap">
      <Carroussel img={data[id].pictures} />
      <div className="mediaQueryLogement flex justify-between">
        <div className="flex flex-col justify-between">
          <Profil title={data[id].title} location={data[id].location} />
          <Tags tags={data[id].tags} />
        </div>
        <div className="mediaQueryLogementProfil flex flex-col">
          <div className="flex items-center gap mb-10">
            <span className="pre">{data[id].host.name.replace(" ", "\n")}</span>
            <img className="imgStyle" src={data[id].host.picture} />
          </div>
          <Stars stars={Number(data[id].rating)} />
        </div>
      </div>
      <div className="DropdownStyle">
        <Dropdown
          title="Description"
          description={data[id].description}
          className="h-20"
        />
        <Dropdown
          title="Équipements"
          description={data[id].equipments.join().replaceAll(",", "\n")}
          className="h-20"
        />
      </div>
    </div>
  );
};
