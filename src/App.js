import React from "react";
import "./App.css";
import BagBuilder from "./containers/BagBuilder/BagBuilder";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <BagBuilder />
      </Layout>
    </div>
  );
}

export default App;
