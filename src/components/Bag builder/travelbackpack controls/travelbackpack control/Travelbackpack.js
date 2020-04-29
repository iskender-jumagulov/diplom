import React from './node_modules/react';
import classes from './travelbackpack.module.css'

export default ({ control, addItems, removeItems, disabled }) => (
    <div className={classes.travelbackpack}>
       
        <button className={classes.less} onClick={() => removeItems(control.type)} disabled={disabled}>-</button>
        <span
        className={classes.label}>{control.label}</span>
        <button className={classes.more} onClick={() => addItems(control.type)}>+</button>
    </div>
)