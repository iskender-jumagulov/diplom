import React from "react";
import classes from "./BouquetControl.module.css";

export default ({ control, removeFlowers, addFlowers, disabled }) => (
  <div className={classes.BouquetControl}>
    <button
      className={classes.less}
      onClick={() => removeFlowers(control.type)}
      disabled={disabled}
    >
      -
    </button>
    <span className={classes.label}>{control.label}</span>
    <button className={classes.more} onClick={() => addFlowers(control.type)}>
      +
    </button>
  </div>
);
