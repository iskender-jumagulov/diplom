import React from 'react';
import Layout from "./components/Layout/Layout";
import StationeryBuilder from './containers/Bag Builder/BagBuilder';
import './App.css';

export default () => {
  return (
    <div className="App">
      <Layout>
        <BagBuilder />
      </Layout>
    </div>
  );
};

