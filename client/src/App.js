import React from "react";
import CreateNew from "./components/CreateNew";
import "./styles/main.css";
import Inventory from "./components/product-display/Inventory";
export default function App() {
  return (
    <div className="App">
      <h1>Hello riri</h1>
      {/* <CreateNew/> */}
      <Inventory />
    </div>
  );
}
