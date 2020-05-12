import React from "react";
import classes from "./BagControl.module.css";

export default ({ control, removeSubjects, addSubjects, disabled }) => (
  <div className={classes.BagControl}>
    <button
      className={classes.less}
      onClick={() => removeSubjects(control.type)}
      disabled={disabled}
    >
      -
    </button>
    <span className={classes.label}>{control.label}</span>
    <button className={classes.more} onClick={() => addSubjects(control.type)}>
      +
    </button>
  </div>
);
