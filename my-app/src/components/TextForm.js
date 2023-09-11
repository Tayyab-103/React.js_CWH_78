import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleSchClick = () => {
    let newText = text.replace(/[^a-zA-Z0-9 ]/g, " ");
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On Chnage");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // text = "new tex"; // wrong way to change the state
  // setText("new Text"); // correct way to change the state

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleSchClick}>
          Remove Special Character
        </button>
        <button className="btn btn-primary mx-1 my-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-1 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Spaces
        </button>
      </div>

      <div className="container my-3">
        <h2>Your Text Summary </h2>
        {/* <p>3432 words and 4532324 characters</p> */}
        <p>
          <b> {text.split(" ").length}</b> words and <b>{text.length} </b>
          characters
        </p>
        <p>
          {" "}
          <b>{0.008 * text.split(" ").length} </b> Minutes Read
        </p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
