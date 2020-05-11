import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
  cameras: "Camera",
  matchess: "Matches",
  waters: "Water",
  medicinechests: "Medicinechest",
  tents: "Tent",
  flashlights: "Flashlight",
};

export default ({ flowers, cancelOrder, finishOrder, price }) => {
  const flowersOutput = Object.keys(flowers)
    .filter((flower) => flowers[flower] > 0)
    .map((flower) => (
      <li key={flowers}>
        {LABELS[flower]}: {flowers[flower]}{" "}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Congratulations! </h2>
      <p>Here is the composition of your bag:</p>
      <ul>{flowersOutput}</ul>
      <p>Total price: {price} som.</p>
      <p>Would you like to checkout? </p>
      <Button click={finishOrder}>Checkout</Button>
      <Button click={cancelOrder}>Cancel</Button>
    </div>
  );
};
