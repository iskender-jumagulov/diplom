import React from "react";
import classes from "./Travelbackpack.module.css";
import Travelbackpack from "./Travelbackpack/Travelbackpack";
import Button from "../../UI/Button/Button";
;

const CONTROLS = [
  { label: "Bottle", type: "bottle" },
  { label: "Battary", type: "battary" },
  { label: "Lunch", type: "lunch" },
  { label: "MedecineChest", type: "medecinechest" },
  { label: "Tent", type: "tent" },
];
export default ({ items, addItems, removeItems, canOrder, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <Travelbackpack
      key={control.type}
      control={control}
      addItems={addItems}
      removeItems={removeItems}
      disabled={items[control.type] === 0}
    />
  ));

  return (
    <div className={classes.Travelbackpacks}>
      {controlsOutput}

      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
