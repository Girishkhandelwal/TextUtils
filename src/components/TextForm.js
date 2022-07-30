import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    let a = text.toUpperCase();
    setText(a);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleloclick = () => {
    let a = text.toLowerCase();
    setText(a);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleclearclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!", "success");
    
  };
  const handleextraspace = () => {
    let space = text.split(/[ ]+/);
    setText(space.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const handleonchange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState('');
  // setText("enter text now");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : '#042743' }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "Grey" : "white",
              color: props.mode === "dark" ? "white" : '#042743',
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleupclick}>
          conver to uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleloclick}>
          conver to lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleclearclick}>
          clear text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleextraspace}>
          remove extra space
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : '#042743' }}
      >
        <h2>Text counter</h2>
        <p>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
      </div>
    </>
  );
}
