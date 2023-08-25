import { useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import data from "../logements.json";

export const Logements: React.FC = () => {
  const location = useLocation();
  const id = location.state.id;
  return (
    <div>
      <img
        src={data[id].cover}
        style={{
          marginTop: "20px",
          width: "100%",
          borderRadius: "20px",
          height: "400px",
          objectFit: "cover",
        }}
      />
      <div
        className="flex justify-between items-center"
        style={{
          marginTop: "20px",
        }}>
        <span style={{ fontSize: "25px", fontWeight: "bold" }}>
          {data[id].title}
        </span>
        <div className="flex items-center" style={{ gap: "15px" }}>
          <span>{data[id].host.name}</span>
          <img
            style={{ height: "50px", borderRadius: "50%", objectFit: "cover" }}
            src={data[id].host.picture}
          />
        </div>
      </div>
      <span>{data[id].location}</span>
      <div className="flex justify-between">
        <div className="flex" style={{ gap: "20px", marginTop: "15px" }}>
          {data[id].tags.map((d, i) => (
            <span
              key={i}
              className="background-red"
              style={{
                color: "white",
                width: "150px",
                height: "30px",
                lineHeight: "30px",
                borderRadius: "10px",
                textAlign: "center",
              }}>
              {d}
            </span>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};
