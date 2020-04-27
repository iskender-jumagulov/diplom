import React from 'react';
import logo from '../../../assets/logo.jpg';
import classes from './Logo.module.css';

export default () => (
   <div className={classes.logo}>
      <img src={logo}/>
      <span>
Everything for travel</span>
   </div>
);