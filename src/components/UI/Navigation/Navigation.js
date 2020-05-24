import React from 'react';
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default () => (
    <ul className={classes.Navigation}>
      <NavigationItem  url="/" active>everything for travel</NavigationItem> 
      <NavigationItem url="/orders">orders</NavigationItem> 
    </ul>
);