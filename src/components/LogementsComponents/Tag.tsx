import "./Tag.css";

export const Tag: React.FC<{ label: string }> = ({ label }) => {
  return <span className="background-red tag">{label}</span>;
};
