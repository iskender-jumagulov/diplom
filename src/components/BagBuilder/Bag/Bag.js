import React from "react";
import Subject from "./subject/Subject";
import classes from "./Bag.module.css";

export default ({ price, subjects }) => {
  let subjectsOutput = [];

  Object.keys(subjects).forEach((type) => {
    for (let i = 0; i < subjects[type]; i++) {
      subjectsOutput.push(<Subject key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.Bag}>
      <div className={classes.bento}>
        <div className={classes.subjectsBento}>{subjectsOutput}</div>
      </div>
      <div className={classes.price}> {price} som</div>
    </div>
  );
};
