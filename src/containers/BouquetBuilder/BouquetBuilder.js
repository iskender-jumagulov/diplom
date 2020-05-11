import React, { useState, useEffect } from "react";
import Bouquet from "../../components/BouquetBuilder/Bouquet/Bouquet";
import classes from "./BouquetBuilder.module.css";
import BouquetControls from "../../components/BouquetBuilder/BouquetControls/BouquetControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BouquetBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHadler/withErrorHadler";

const PRICES = {
  camera: 2000,
  matches: 5,
  water: 45,
  medicinechest: 200,
  tent: 400,
  flashlight: 100,
};


export default withErrorHandler(() => {
  const [flowers, setFlowers] = useState(null);
  const [price, setPrice] = useState(80);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);

  function checkCanOrder(flowers) {
    const total = Object.keys(flowers).reduce((total, flower) => {
      return total + flowers[flower];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    const order = {
      flowers: flowers,
      price: price,
      delivery: "Fast",
      customer: {
        name: "Jasmin",
        phone: "070707070",
        address: {
          street: "123 Abd",
          city: "Karakol",
        },
      },
    };

    setLoading(true);
    axios.post("/orders.json", order).then((response) => {
      setLoading(false);
      setIsOrdering(false);
    });
  }

  function addFlowers(type) {
    const newFlowers = { ...flowers };
    newFlowers[type]++;
    setFlowers(newFlowers);
    checkCanOrder(newFlowers);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeFlowers(type) {
    if (flowers[type] >= 1) {
      const newFlowers = { ...flowers };
      newFlowers[type]--;
      setFlowers(newFlowers);
      checkCanOrder(newFlowers);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  useEffect(() => {
    axios
      .get("/flowers.json")
      .then((response) => setFlowers(response.data))
      .catch((error) => {});
  }, []);

  let output = <Spinner />;
  if (flowers) {
    output = (
      <>
        <Bouquet price={price} flowers={flowers} />
        <BouquetControls
          startOrder={startOrder}
          canOrder={canOrder}
          flowers={flowers}
          addFlowers={addFlowers}
          removeFlowers={removeFlowers}
        />
      </>
    );
  }
  let orderSummary = <Spinner />;
  if (isOrdering && !loading) {
    orderSummary = (
      <OrderSummary
        cancelOrder={cancelOrder}
        finishOrder={finishOrder}
        flowers={flowers}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BouquetBuilder}>
      {output}
      <Modal show={isOrdering} hideCallBack={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
