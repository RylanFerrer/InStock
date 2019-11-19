import React, { Component } from "react";
import ProductTable from "./ProductTable";

export default class Inventory extends Component {
  array = [
    {
      item: "name",
      description: "description of item",
      ordered_by: "John Doe",
      last_ordered: "5/24/2018",
      quantity: "1200",
      reference_number: "123456789",
      location: "Toronto, ON",
      status: "In Stock",
      key: 123456
    },
    {
      item: "Another Name",
      description: "this is goint to be wild",
      ordered_by: "name 2",
      last_ordered: "5/24/2018",
      quantity: "54000",
      reference_number: "123456789",
      location: "Toronto, ON",
      status: "In Stock",
      key: 99876
    },
    {
      item: "Cracker",
      description: "Salty and that's about it",
      ordered_by: "Lebron James",
      last_ordered: "5/24/2018",
      quantity: "13000",
      reference_number: "123456789",
      location: "Toronto, ON",
      status: "In Stock",
      key: 563920
    }
  ];
  render() {
    return (
      <>
        <div className="inventory-heading">
          <h1 className="inventory-heading__title">Inventory</h1>
          <input
            className="inventory-heading__searchbar"
            type="text"
            placeholder="Search"
          >
            <img />
          </input>
        </div>
        <div className="inventory-keys">
          <span className="inventory-keys__content">Item</span>
          <span className="inventory-keys__content">Last Ordered</span>
          <span className="inventory-keys__content">Location</span>
          <span className="inventory-keys__content">Quantity</span>
          <span className="inventory-keys__content">Status</span>
        </div>
        <ProductTable items={this.array} />
      </>
    );
  }
}
