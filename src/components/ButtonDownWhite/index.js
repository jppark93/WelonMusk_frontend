import React from "react";
import BtnDown from "../../img/button_down_white.svg";
import "./index.scss";

const ButtonDown = ({ section }) => {
  return (
    <a href={section}>
      <img src={BtnDown} className="button-down" alt="btn-down" />
    </a>
  );
};

export default ButtonDown;
