export const Profil: React.FC<{
  title: string;
  location: string;
  name: string;
  picture: string;
}> = ({ title, location, name, picture }) => {
  return (
    <div className="flex justify-between items-center mt">
      <div className="flex flex-col gap-1">
        <span style={{ fontSize: "25px", fontWeight: "semi-bold" }}>
          {title}
        </span>
        <span>{location}</span>
      </div>
      <div className="flex items-center" style={{ gap: "15px" }}>
        <span style={{ whiteSpace: "pre-line" }}>
          {name.replace(" ", "\n")}
        </span>
        <img
          style={{ height: "50px", borderRadius: "50%", objectFit: "cover" }}
          src={picture}
        />
      </div>
    </div>
  );
};
