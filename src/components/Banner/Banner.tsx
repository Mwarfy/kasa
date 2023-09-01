import banner from "../../img/banner.svg";
import bannerAbout from "../../img/bannerAbout.svg";
import "./Banner.css";

export const Banner: React.FC<{ about?: boolean }> = ({ about }) => {
  return (
    <div className="relative">
      <img src={about ? bannerAbout : banner} className="bannerImg" />
      {!about && (
        <span className="bannerText">Chez vous, partout et ailleurs</span>
      )}
    </div>
  );
};
