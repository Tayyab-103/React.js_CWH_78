import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  

  return (
    <>
      

    {/* title and aboutText is a props  */}
      <Navbar tilte = "TextUtils" aboutText = "About Us" />
      <div className="container my-3">

      <TextForm heading="Enter the Text to analyze below" />

      </div>
    </>
  );
}

export default App;
