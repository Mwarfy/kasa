import { Banner } from "../components/Banner/Banner";
import { Cards } from "../components/HomeComponents/Cards";

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap">
      <Banner />
      <Cards />
    </div>
  );
};
