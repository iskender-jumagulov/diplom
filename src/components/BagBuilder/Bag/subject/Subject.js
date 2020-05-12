import React, { memo } from "react";
import classes from "./Subject.module.css";

export default memo(({ type }) => {
  const subjectsClasses = [classes.subjects, classes 
    [type]];

  let stylePos = null;
  const getPosition = (ir) => {
    const pd = 190;
    const pr = pd / 2;

    const ix = Math.round(Math.random() * pd);
    const iy = Math.round(Math.random() * pd);

    const distance =
      Math.sqrt(Math.pow(ix - pr, 2) + Math.pow(iy - pr, 2)) + ir;

    return distance < pr ? { x: ix - ir, y: iy - ir } : getPosition(ir);
  };

  switch (type) {
    case "camera":
      subjectsClasses.push(classes.camera);
      break;
    case "matches":
      subjectsClasses.push(classes.matches);
      break;
    case "water":
      subjectsClasses.push(classes.water);
      break;
    case "medicinechest":
      subjectsClasses.push(classes.medicinechest);
      break;
    case "tent":
      subjectsClasses.push(classes.tent);
      break;
    case "flashlight":
    default:
      subjectsClasses.push(classes.flashlight);
      break;
  }

  

  const position = getPosition(50 / 2);

  stylePos = {
    position: "absolute",
    top: position.y + "px",
    left: position.x + "px",
    width: 40 + "px",
    height: 40 + "px",
  };

  return <div style={stylePos} className={subjectsClasses.join(" ")}></div>;
});
