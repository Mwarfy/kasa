import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

export const Card: React.FC<{
  title: string;
  location: string;
  i: number;
  img: string;
}> = ({ title, location, i, img }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex boxThumb pointer"
      onClick={() =>
        navigate("/logements", {
          state: { id: i },
        })
      }
    >
      <img src={img} className="w-full rounded" />
      <div className="textThumb absolute">
        <span>{title}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};
