import React from "react";
import "./App.css";
import BagBuilder from "./containers/BagBuilder/BagBuilder";
import Layout from "./containers/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <BagBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
