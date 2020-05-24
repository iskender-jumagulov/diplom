import React from "react";
import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

export default ({ children, url }) => (
  <li className={classes.NavItem}>
    <NavLink to={url} activeClassName={classes.active} exact>
      {children}
    </NavLink>
  </li>
);
