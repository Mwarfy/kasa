import banner from "../../img/banner.svg";
import bannerAbout from "../../img/bannerAbout.svg";
import "./Banner.css";

export const Banner: React.FC<{ about?: boolean }> = ({ about }) => {
  return (
    <div className="relative flex justify-center items-center">
      <img src={about ? bannerAbout : banner} className="bannerImg" />
      {!about && (
        <div className="bannerText">
          <span>Chez vous,</span>
          <span>partout et ailleurs</span>
        </div>
      )}
    </div>
  );
};
