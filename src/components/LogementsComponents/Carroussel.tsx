import { useState } from "react";
import arrowLeft from "../../img/arrowLeft.svg";
import arrowRight from "../../img/arrowRight.svg";
import "./Carroussel.css";

export const Carroussel: React.FC<{ img: string[] }> = ({ img }) => {
  const [numberImg, setImg] = useState<number>(0);
  return (
    <div className="relative">
      {img.length > 1 && (
        <>
          <img
            src={arrowLeft}
            className="arrow"
            onClick={() => {
              numberImg == 0 ? setImg(img.length - 1) : setImg(numberImg - 1);
            }}
          />
          <img
            src={arrowRight}
            className="arrow arrowRight"
            onClick={() => {
              numberImg == img.length - 1 ? setImg(0) : setImg(numberImg + 1);
            }}
          />
        </>
      )}

      <span className="numberBottom">
        {numberImg + 1}/{img.length}
      </span>
      <img className="carrousselImg" src={img[numberImg]} />
    </div>
  );
};
