import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    console.log("on click");
  };
  const handleOnchange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter Your Text");
  return (
    <div className="mb-3">
      <label htmlFor="myBox" className="form-label">
        {props.heading}
      </label>
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnchange}
        id="myBox"
        rows="8"
      ></textarea>
      <button className="btn btn-primary mt-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
