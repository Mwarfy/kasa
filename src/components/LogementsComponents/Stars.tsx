import starGray from "../../img/starGray.svg";
import starRed from "../../img/starRed.svg";

export const Stars: React.FC<{ stars: number }> = ({ stars }) => {
  return (
    <div>
      {Array.from(Array(5), (_, i) => {
        return (
          <img
            key={i}
            src={i < stars ? starRed : starGray}
            style={{ width: "30px" }}
          />
        );
      })}
    </div>
  );
};
