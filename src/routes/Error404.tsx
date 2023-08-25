import React from "react";
import { useNavigate } from "react-router-dom";

export const Error404: React.FC = () => {
  const navigate = useNavigate();
  const style404 = () => {
    return { fontSize: "250px", fontWeight: "bold" };
  };
  const styleOups = () => {
    return { fontSize: "20px" };
  };
  const styleReturn = () => {
    return { textDecorationLine: "underline", marginTop: "30px" };
  };
  return (
    <div className="flex flex-col items-center">
      <span style={style404()}>404</span>
      <span style={styleOups()}>
        Oups! La page que vous demandez n'existe pas
      </span>
      <span
        className="returnHome"
        style={styleReturn()}
        onClick={() => navigate("/")}>
        Retourner à la page d'accueil
      </span>
    </div>
  );
};
