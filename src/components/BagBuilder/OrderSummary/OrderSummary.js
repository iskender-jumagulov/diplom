import React from "react";
import classes from "./OrderSummary.module.css";

const LABELS = {
  bottle: "Bottle",
  battary: "Battary",
  lunch: "Lunch",
  medecineChest: "MedecineChest",
  tent: "Tent",
 
};

export default ({ items }) => {
  const itemsOutput = Object.keys(items)
    .filter((item) => items[item] > 0)
    .map((item) => (
      <li>
        {LABELS[item]}:{items[item]}
      </li>
    ));
  return (
    <div className={classes.OrderSummary}>
      <h2>Your order!</h2>
      <p>Congratulation! You've built a best 
travel backpack of all time!</p>
      <ul>{itemsOutput}</ul>
      <p>Would you like to checkbot?</p>
    </div>
  );
};