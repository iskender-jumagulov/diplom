import React from "react";
import classes from "./BagControls.module.css";
import BagControl from "./BagControl/BagControl";
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
  subjects,
  addSubjects,
  removeSubjects,
  startOrder,
}) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BagControl
      key={control.type}
      control={control}
      addSubjects={addSubjects}
      removeSubjects={removeSubjects}
      disabled={subjects[control.type] === 0}
    />
  ));

  return (
    <div className={classes.BagControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
