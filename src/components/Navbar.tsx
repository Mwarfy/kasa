import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const handleMouseEnter2 = () => {
    setIsHover2(true);
  };
  const handleMouseLeave2 = () => {
    setIsHover2(false);
  };

  const styleHover = (isHover: boolean) => {
    return {
      textDecorationLine: isHover ? "underline" : "none",
      cursor: "pointer",
    };
  };
  return (
    <div className="flex justify-between w-full">
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      />
      <div
        className="flex items-center"
        style={{
          gap: "75px",
          fontSize: "20px",
        }}>
        <div
          style={styleHover(isHover)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => navigate("/")}>
          Accueil
        </div>
        <div
          className="color-red"
          style={styleHover(isHover2)}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
          onClick={() => navigate("/about")}>
          A propos
        </div>
      </div>
    </div>
  );
};
