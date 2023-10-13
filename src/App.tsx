import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./routes/About";
import { Error404 } from "./routes/Error404";
import { Home } from "./routes/Home";
import { Logements } from "./routes/Logements";
<<<<<<< HEAD
import "./App.css";
=======

const styleG = () => {
  return {
    paddingLeft: "100px",
    paddingRight: "100px",
    paddingTop: "30px",
    gap: "50px",
  };
};
>>>>>>> afb2c0bcbcca96160d50e1c907de2774e76ee8f7

export const App: React.FC = () => {
  return (
    <Router>
<<<<<<< HEAD
      <div className="routeStyle">
        <div className="flex flex-col color-red styleG">
=======
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <div className="flex flex-col color-red" style={styleG()}>
>>>>>>> afb2c0bcbcca96160d50e1c907de2774e76ee8f7
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logements" element={<Logements />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Error404 />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
