import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Thumb.css";

export const Thumb: React.FC<{
  title: string;
  location: string;
  i: number;
  img: string;
}> = ({ title, location, i, img }) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <div
      className="flex background-red boxThumb"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ cursor: isHover ? "pointer" : "default" }}
      onClick={() =>
        navigate("/logements", {
          state: { id: i },
        })
      }>
      <img src={img} className="w-full rounded" />
      <div className="textThumb absolute">
        <span>{title}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};
