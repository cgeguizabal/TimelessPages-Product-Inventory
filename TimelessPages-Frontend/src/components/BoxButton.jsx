import React from "react";
import boxbutton from "../styles/components/boxButton.module.scss";

function BoxButton({ title, className, onClick }) {
  return (
    <div className={` ${className} ${boxbutton.box_button}`} onClick={onClick}>
      <h1>{title}</h1>
    </div>
  );
}

export default BoxButton;
