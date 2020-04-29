import React from 'react';
import classes from './Bag.module.css';

export default ({ type }) => {
    const BagClasses = [classes.Bag, classes[type]]
    
    return (
        <div className={BagClasses.join(' ')}>
        </div>
    );

}