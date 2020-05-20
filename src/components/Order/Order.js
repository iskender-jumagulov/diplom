import React from "react";
import classes from "./Order.module.css";

const CONTROLS = {
    camera: "Camera",
    flashlight: "Flashlight",
    water: "Water",
    medicinechest: "Medicinechest",
    tent: "Tent",
    flashlight: "Flashlight",
  
};
export default ({ price, subjects, details }) => {
  const subjectsOutput = Object.keys(subjects).map((key) => (
    <span className={classes.subjects}>
      {CONTROLS[key]}({subjects[key]})
    </span>
  ));
  return (
    <div className={classes.Order}>
      <div className={classes.details}>
        {details.name}, {details.phone}, {details.city}, {details.address}
      </div>
      <div className={classes.price}>{price} som</div>
      <div className={classes.subjects}>{subjectsOutput}</div>
    </div>
  );
};
