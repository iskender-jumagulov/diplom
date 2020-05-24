import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const LABELS = {
  camera: "Camera",
  flashlight: "Flashlight",
  water: "Water",
  medicinechest: "Medicinechest",
  tent: "Tent",
  flashlight: "Flashlight",
};

  export default ({ subjects, cancelOrder, finishOrder, price }) => {
  const subjectsOutput = Object.keys(subjects)
    .filter((subject) => subjects[subject] > 0)
    .map((subject) => (
      <li key={subjects}>
        {LABELS[subject]}: {subjects[subject]}{" "}
      </li>
    ));

  return (
    <div className={classes.OrderSummary}>
      <h2>Congratulations! </h2>
      <p>Here is the composition of your bag:</p>
      <ul>{subjectsOutput}</ul>
      <p>Total price: {price} som.</p>
      <p>Would you like to checkout? </p>
      <Button click={finishOrder} green>
        Checkout
      </Button>
      <Button click={cancelOrder} red>
        Cancel
      </Button>
    </div>
  );
};