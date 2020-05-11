import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

export default ({ children, show, hideCallBack }) => {
  const modalClasses = [classes.Modal];
  if (show) {
    modalClasses.push(classes.show);
  }

  return (
    <>
      <Backdrop show={show} hideCallBack={hideCallBack} />
      <div className={modalClasses.join(" ")}>{children}</div>
    </>
  );
};
