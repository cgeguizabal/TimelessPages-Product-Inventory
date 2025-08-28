import React from "react";
import boxbutton from "../styles/components/boxbutton.module.scss";
import { motion } from "motion/react";

function BoxButton({ title, className, onClick, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        x: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 1.5, ease: "easeOut" },
      }}
      className={` ${className} ${boxbutton.box_button}`}
      onClick={onClick}
    >
      <div className={boxbutton.box_image_container}>
        <img src={image} alt="icon" />
      </div>
      <h1>{title}</h1>
    </motion.div>
  );
}

export default BoxButton;
