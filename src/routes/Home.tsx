import { Banner } from "../components/Banner/Banner";
import { ListLogement } from "../components/CardsLogements.tsx/Cards";
import { Navbar } from "../components/Navbar";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap">
      <Banner />
      <ListLogement />
    </div>
  );
};
