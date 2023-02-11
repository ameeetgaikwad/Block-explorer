import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { Home } from "./components/home";
import { Route, Routes } from "react-router-dom";
import { Address } from "./components/address";
import { TransactionHash } from "./components/transactionHash";
import { Block } from "./components/block";
// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface
export const alchemy = new Alchemy(settings);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Block-Explorer" element={<Home />} />
        <Route path="/address/:id" element={<Address />} />
        <Route path="/block/:id" element={<Block />} />
        <Route path="/transactionHash/:id" element={<TransactionHash />} />
      </Routes>
    </>
  );
}

export default App;
