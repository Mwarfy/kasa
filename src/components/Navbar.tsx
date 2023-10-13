import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.svg";
import "./NavBar.css";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between w-full">
      <img
        src={logo}
        alt="logo"
        onClick={() => navigate("/")}
        className="pointer"
      />
      <div className="flex items-center navbarStyle">
        <div className="pointer menu" onClick={() => navigate("/")}>
          Accueil
        </div>
        <div
          className="color-red pointer menu"
          onClick={() => navigate("/about")}>
          A propos
        </div>
      </div>
    </div>
  );
};
