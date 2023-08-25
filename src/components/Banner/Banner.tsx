import imgTop from "../../img/topImg.svg";
import "./Banner.css";

export const Banner: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
      <img src={imgTop} alt="image top" className="bannerImg" />
      <span className="bannerText">Chez vous, partout et ailleurs</span>
    </div>
  );
};
