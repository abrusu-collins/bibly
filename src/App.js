import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Home from "./components/landing page components/Home";
import MainApp from "./components/app page components/MainApp";

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
