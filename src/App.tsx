import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { About } from "./routes/About";
import { Error404 } from "./routes/Error404";
import { Home } from "./routes/Home";
import { Logements } from "./routes/Logements";
import "./App.css";

export const App: React.FC = () => {
  return (
    <Router>
      <div className="routeStyle">
        <div className="flex flex-col color-red styleG">
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
