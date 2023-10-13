import { Tag } from "./Tag";

export const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
  return (
    <div className="flex gap mt">
      {tags.map((d, i) => (
        <Tag key={i} label={d} />
      ))}
    </div>
  );
};
