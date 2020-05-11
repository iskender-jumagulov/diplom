import React from "react";
import classes from "./BouquetControls.module.css";
import BouquetControl from "./BouquetControl/BouquetControl";
import Button from "../../UI/Button/Button";

const CONTROLS = [
  { label: "Camera", type: "camera" },
  { label: "Matches", type: "matches" },
  { label: "Water", type: "water" },
  { label: "Medicinechest", type: "medicinechest" },
  { label: "Tent", type: "tent" },
  { label: "Flashlight", type: "flashlight" },
];

export default ({
  canOrder,
  flowers,
  addFlowers,
  removeFlowers,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BouquetControl
      key={control.type}
      control={control}
      addFlowers={addFlowers}
      removeFlowers={removeFlowers}
      disabled={flowers[control.type] === 0}
    />
  ));

  return (
    <div className={classes.BouquetControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
