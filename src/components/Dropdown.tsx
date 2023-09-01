import { useState } from "react";
import arrowClose from "../img/arrowClose.svg";
import arrowOpen from "../img/arrowOpen.svg";

export const Dropdown: React.FC<{
  title: string;
  description: string;
  height: string;
}> = ({ title, description, height }) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`${open && "background-gray"}`}>
      <div
        className="flex items-center justify-between background-red color-white rounded pointer"
        style={{ padding: "10px", height: height }}
        onClick={() => setOpen(!open)}
      >
        <span>{title}</span>
        <img src={open ? arrowOpen : arrowClose} />
      </div>
      <span
        className={`${open ? "show" : "hidden"}`}
        style={{
          whiteSpace: "pre-line",
          padding: "20px",
          borderRadius: "0 0 20 20",
        }}
      >
        {description}
      </span>
    </div>
  );
};
