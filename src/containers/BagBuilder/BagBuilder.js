import React, { useState, useEffect } from "react";
import Bag from "../../components/BagBuilder/Bag/Bag";
import classes from "./BagBuilder.module.css";
import BagControls from "../../components/BagBuilder/BagControls/BagControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/BagBuilder/OrderSummary/OrderSummary";
import axios from "../../axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHadler/withErrorHadler";

const PRICES = {
  camera: 2000,
  lighter: 55,
  water: 45,
  medicinechest: 200,
  tent: 400,
  flashlight: 100,
};


export default withErrorHandler(() => {
  const [subjects, setSubject] = useState(null);
  const [price, setPrice] = useState(80);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);

  function checkCanOrder(subjects) {
    const total = Object.keys(subjects).reduce((total, subject) => {
      return total + subjects[subject];
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
      subjects: subjects,
      price: price,
      delivery: "Fast",
      customer: {
        name: "iskender",
        phone: "0707893045",
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

  function addSubjects(type) {
    const newSubjects = { ...subjects };
    newSubjects[type]++;
    setSubject(newSubjects)
    checkCanOrder(newSubjects);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeSubjects(type) {
    if (subjects[type] >= 1) {
      const newSubjects = { ...subjects };
      newSubjects[type]--;
      setSubject(newSubjects);
      checkCanOrder(newSubjects);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  useEffect(() => {
    axios
      .get("/subjects.json")
      .then((response) => setSubject(response.data))
      .catch((error) => {});
  }, []);

  let output = <Spinner />;
  if (subjects) {
    output = (
      <>
        <Bag price={price} subjects={subjects} />
        <BagControls
          startOrder={startOrder}
          canOrder={canOrder}
          subjects={subjects}
          addSubjects={addSubjects}
          removeSubjects={removeSubjects}
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
        subjects={subjects}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BagBuilder}>
      {output}
      <Modal show={isOrdering} hideCallBack={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);
