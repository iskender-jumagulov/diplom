import React from "react";
import classes from "./Button.module.css";

export default ({ children, click, enabled }) => {
  return (
    <button
      onClick={click}
      className={classes.Button}
      disabled={enabled === undefined ? false : !enabled}
    >
      {children}
    </button>
  );
};
