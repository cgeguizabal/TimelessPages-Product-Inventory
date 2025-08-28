import React from "react";
import boxbutton from "../styles/components/boxbutton.module.scss";

function BoxButton({ title, className, onClick, image }) {
  return (
    <div className={` ${className} ${boxbutton.box_button}`} onClick={onClick}>
      <div className={boxbutton.box_image_container}>
        <img src={image} alt="icon" />
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default BoxButton;
