import React from "react";
import "./index.scss";

const SpecsButton = ({ id, text, onClick, isClicked }) => {
  return (
    <button
      onClick={() => onClick(id)}
      className={`btn-specs ${isClicked ? "clicked" : ""}`}
    >
      {text}
    </button>
  );
};

export default SpecsButton;
