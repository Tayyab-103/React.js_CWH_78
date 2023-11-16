import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nvabar from "./components/Nvabar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Nvabar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
