import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import { Logements } from "./routes/Logements";
import { About } from "./routes/About";
import { Error404 } from "./routes/Error404";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const styleG = () => {
  return {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingTop: "50px",
    gap: "50px",
  };
};

export const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col color-red" style={styleG()}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logements" element={<Logements />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};
