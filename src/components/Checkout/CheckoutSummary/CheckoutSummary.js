import React from "react";
import classes from "./Checkout.module.css";
import Button from "../../UI/Button/Button";
import Bag from "../../BagBuilder/Bag/Bag";
import { Route } from "react-router-dom";

export default ({ price, subjects, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <Bag price={price} subjects={subjects} />

      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
      </Route>
    </div>
  );
};
