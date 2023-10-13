import "./Profil.css";

export const Profil: React.FC<{
  title: string;
  location: string;
}> = ({ title, location }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <span className="titleStyle">{title}</span>
        <span>{location}</span>
      </div>
    </div>
  );
};
