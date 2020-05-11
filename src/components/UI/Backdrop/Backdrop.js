import React from "react";
import classes from "./Backdrop.module.css";

export default ({ show, hideCallBack }) =>
  show ? <div onClick={hideCallBack} className={classes.Backdrop}></div> : null;
