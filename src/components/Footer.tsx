import React from "react";
import logoFooter from "../img/logoFooter.svg";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <img src={logoFooter} />
      <span>© 2020 Kasa, all rights reserved</span>
    </div>
  );
};
