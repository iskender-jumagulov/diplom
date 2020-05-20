import React from "react";
import classes from "./Spinner.module.css";

export default () => <div className={classes.Spinner}>
    <div class="loader">
	<div class="loader-inner">
		<div class="loader-line-wrap"><div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
		<div class="loader-line-wrap">
			<div class="loader-line"></div>
		</div>
	</div>
</div>
</div>;
