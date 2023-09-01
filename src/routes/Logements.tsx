import { useLocation } from "react-router-dom";
import { Dropdown } from "../components/Dropdown";
import { Carroussel } from "../components/LogementsComponents/Carroussel";
import { Profil } from "../components/LogementsComponents/Profil";
import { Stars } from "../components/LogementsComponents/Stars";
import { Tags } from "../components/LogementsComponents/Tags";
import data from "../logements.json";

export const Logements: React.FC = () => {
  const location = useLocation();
  const id = location.state.id;
  const DropdownStyle = () => {
    return {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "100px",
      marginBottom: "50px",
    };
  };
  return (
    <div className="flex flex-col gap">
      <Carroussel img={data[id].pictures} />
      <Profil
        title={data[id].title}
        location={data[id].location}
        name={data[id].host.name}
        picture={data[id].host.picture}
      />
      <div
        className="flex justify-between items-center"
        style={{ marginBottom: "30px" }}
      >
        <Tags tags={data[id].tags} />
        <Stars stars={Number(data[id].rating)} />
      </div>
      <div style={DropdownStyle()}>
        <Dropdown
          title="Description"
          description={data[id].description}
          height={"40px"}
        />
        <Dropdown
          title="Équipements"
          description={data[id].equipments.join().replaceAll(",", "\n")}
          height={"40px"}
        />
      </div>
    </div>
  );
};
