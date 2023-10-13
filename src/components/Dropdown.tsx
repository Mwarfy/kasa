import { useState } from "react";
import arrowClose from "../img/arrowClose.svg";
import arrowOpen from "../img/arrowOpen.svg";
import "./Dropdown.css";

export const Dropdown: React.FC<{
  title: string;
  description: string;
  className: string;
}> = ({ title, description, className }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`${open && "background-gray"}`}>
      <div
        className={`mediaQuery flex items-center justify-between background-red color-white rounded pointer p ${className}`}
        onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <img src={open ? arrowOpen : arrowClose} />
      </div>
      <span className={`pre dropdownStyle ${open ? "show" : "hidden"}`}>
        {description}
      </span>
    </div>
  );
};
