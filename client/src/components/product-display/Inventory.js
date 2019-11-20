import React, { Component } from "react";
import ProductTable from "./ProductTable";
import SearchIcon from "../../assets/Icons/SVG/Icon-search.svg";
import axios from "axios";

export default class Inventory extends Component {
  //setting initial state so that it can be used in conditional rendering.
  state = {
    products: []
  };

  //Can take this out, but we'll leave it for now - just in case.
  // array = [
  //   {
  //     item: "name",
  //     description: "description of item",
  //     ordered_by: "John Doe",
  //     last_ordered: "5/24/2018",
  //     quantity: "1200",
  //     reference_number: "123456789",
  //     location: "Toronto, ON",
  //     status: "In Stock",
  //     key: 123456
  //   },
  //   {
  //     item: "Another Name",
  //     description: "this is goint to be wild",
  //     ordered_by: "name 2",
  //     last_ordered: "5/24/2018",
  //     quantity: "54000",
  //     reference_number: "123456789",
  //     location: "Toronto, ON",
  //     status: "In Stock",
  //     key: 99876
  //   },
  //   {
  //     item: "Cracker",
  //     description: "Salty and that's about it",
  //     ordered_by: "Lebron James",
  //     last_ordered: "5/24/2018",
  //     quantity: "13000",
  //     reference_number: "123456789",
  //     location: "Toronto, ON",
  //     status: "In Stock",
  //     key: 563920
  //   }
  // ];

  //Using this part of the lifecycle to retreive product information and set state so that
  //rendering can occur
  componentDidMount() {
    axios.get("http://localhost:5000/products").then(res => {
      // console.log(res.data);
      this.setState({
        products: [res.data]
      });
    });
  }

  render() {
    //Conditional rendering. Was having trouble with ternary operator so I went to that.
    //Realistically should probable just put this heading in it's own component.
    if (this.state.products.length >= 1) {
      return (
        <>
          <div className="inventory-heading">
            <h1 className="inventory-heading__title">Inventory</h1>
            <div className="inventory-heading__searchbar">
              <img
                className="inventory-heading__searchbar-icon"
                src={SearchIcon}
              />
              <input
                className="inventory-heading__searchbar-input"
                type="text"
                placeholder="Search"
              ></input>
            </div>
          </div>
          <div className="inventory-keys">
            <span className="inventory-keys__content">Item</span>
            <span className="inventory-keys__content">Last Ordered</span>
            <span className="inventory-keys__content">Location</span>
            <span className="inventory-keys__content">Quantity</span>
            <span className="inventory-keys__content">Status</span>
          </div>
          <ProductTable products={this.state} />
        </>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}
