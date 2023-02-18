import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/landing page components/Home";
import MainApp from "./components/app page components/MainApp";
import ReactGA from 'react-ga';

const MEASUREMENT_ID = "G-60BQ80SNDW"; 
ReactGA.initialize(MEASUREMENT_ID);
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<MainApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
