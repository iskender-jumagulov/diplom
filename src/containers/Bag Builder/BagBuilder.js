import React, { useState } from "react";
import StationeryKit from "../../components/BagBuilder//StationeryKit
import StationeryControls from "../../components/StationeryBuilder/StationeryControls/StationeryControls";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./StationeryBuilder.module.css";
import OrderSummary from "../../components/BagBuilder/OrderSummary/OrderSummary";
const PRICES = {
  battery: 10,
  bottle: 5,
lunch: 10,
  medicineChest: 20,
  tent: 20,
  };
export default () => {
  const [items, setItems] = useState({
    battery: 0,
    bottle: 0,
    lunch: 0,
    medicineChest: 0,
    tent: 0,
     });
  const [price, setPrice] = useState(10);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(items) {
    const total = Object.keys(items).reduce((total, item) => {
      return total + items[item];
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
    alert("You are on tte checkout page!");
  }

  function addItems(type) {
    const newItems = { ...items };
    newItems[type]++;
    setItems(newItems);
    checkCanOrder(newItems);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeItems(type) {
    if (items[type] >= 1) {
      const newItems = { ...items };
      newItems[type]--;
      setItems(newItems);
      checkCanOrder(newItems);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.StationeryBuilder}>
      <StationeryKit price={price} items={items} />
      <StationeryControls
        startOrder={startOrder}
        items={items}
        canOrder={canOrder}
        addItems={addItems}
        removeItems={removeItems}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSummary
          items={items}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
        />
      </Modal>
    </div>
)};