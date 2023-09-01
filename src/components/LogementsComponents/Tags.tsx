import { Tag } from "./Tag";

export const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="flex gap" style={{ marginTop: "15px" }}>
      {tags.map((d, i) => (
        <Tag key={i} label={d} />
      ))}
    </div>
  );
};
