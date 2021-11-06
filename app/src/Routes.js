import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App.js";
import Order from "./Randomizer.js";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/draft" element={<Order />} />
      </Routes>
    </div>
  );
};

export default Routing;
