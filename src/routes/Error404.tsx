import React from "react";
import { useNavigate } from "react-router-dom";
import "./Error404.css";

export const Error404: React.FC = () => {
  const navigate = useNavigate();

  const styleReturn = () => {
    return { textDecorationLine: "underline", marginTop: "30px" };
  };
  return (
    <div className="flex flex-col items-center">
      <span className="style404">404</span>
      <span className="styleOups">
        Oups! La page que vous demandez n'existe pas
      </span>
      <span className="returnHome styleReturn" onClick={() => navigate("/")}>
        Retourner à la page d'accueil
      </span>
    </div>
  );
};
