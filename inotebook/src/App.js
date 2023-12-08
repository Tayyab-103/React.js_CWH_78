import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nvabar from "./components/Nvabar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Nvabar/>
          <Alert message={"This is Amazing React Alert"}/>
          <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
