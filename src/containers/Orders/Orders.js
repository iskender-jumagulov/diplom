import React, { useState, useEffect } from "react";
import axios from "../../axios";
import classes from "./Orders.module.css";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHadler/withErrorHadler";
import Spinner from "../../components/UI/Spinner/Spinner";

export default withErrorHandler(() => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {});
  }, []);

  let ordersOutput = <Spinner />;
  if (orders !== null) {
    console.log(orders);
    ordersOutput = Object.keys(orders).map((id) => (
      <Order key={id} {...orders[id]} />
    ));
  }

  return (
    <div className={classes.Orders}>
      <h1>Order</h1>
      {ordersOutput}
    </div>
  );
}, axios);