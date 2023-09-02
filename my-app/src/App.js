import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";



function App() {
  

  return (
    <>
      

    {/* title and aboutText is a props  */}
      {/* <Navbar tilte = "TextUtils" aboutText = "About Us" /> */}
      <Navbar/>
      <div className="container my-3">

      <TextForm heading="Enter the Text to analyze below" />
      {/* <About/> */}

      </div>
    </>
  );
}

export default App;
