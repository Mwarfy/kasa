import { useLocation, useParams } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import { Carroussel } from "../components/LogementsComponents/Carroussel";
import { Profil } from "../components/LogementsComponents/Profil";
import { Stars } from "../components/LogementsComponents/Stars";
import { Tags } from "../components/LogementsComponents/Tags";
import data from "../logements.json";
import "./Logement.css";

export const Logements: React.FC = () => {
  let { id } = useParams();
  const i = Number(id);

  return (
    <div className="flex flex-col gap">
      <Carroussel img={data[i].pictures} />
      <div className="mediaQueryLogement flex justify-between">
        <div className="flex flex-col justify-between">
          <Profil title={data[i].title} location={data[i].location} />
          <Tags tags={data[i].tags} />
        </div>
        <div className="mediaQueryLogementProfil flex flex-col">
          <div className="flex items-center gap mb-10">
            <span className="pre">{data[i].host.name.replace(" ", "\n")}</span>
            <img className="imgStyle" src={data[i].host.picture} />
          </div>
          <Stars stars={Number(data[i].rating)} />
        </div>
      </div>
      <div className="DropdownStyle">
        <Dropdown
          title="Description"
          description={data[i].description}
          className="h-20"
        />
        <Dropdown
          title="Équipements"
          description={data[i].equipments.join().replaceAll(",", "\n")}
          className="h-20"
        />
      </div>
    </div>
  );
};
