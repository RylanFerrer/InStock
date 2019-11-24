import React, { Component } from "react";
import ProductTable from "./ProductTable";
import InventoryHeading from "./InventoryHeading";
import axios from "axios";
import CreateNew from "../CreateNew";

export default class Inventory extends Component {
  //setting initial state so that it can be used in conditional rendering.
  state = {
    locations: [],
    products: [],
    mobile: false
  };

  //Using this part of the lifecycle to retreive product information and set state so that
  //rendering can occur
  componentDidMount() {
    axios.get("http://localhost:5000/locations").then(res => {
      this.setState({
        locations: [res.data]
      });
    });

    axios.get("http://localhost:5000/products").then(res => {
      // console.log(res.data);
      
      this.setState({
        products: [res.data]
      });
    });
  }

  refreshTable = () => {
    setTimeout(() => {
      axios.get("http://localhost:5000/products").then(res => {
      this.setState({
        products: [res.data]
      });
      console.log(this.state.products);
    });
    }, 150);
    
  };
  changeMobile = () => {
    this.setState({
      mobile: !this.state.mobile
    })
  }
  
  render() {
    //Conditional rendering. Was having trouble with ternary operator so I went to that.
    //Realistically should probable just put this heading in it's own component.
    if (this.state.products.length >= 1) {
      if(this.state.mobile === false )
      {
        return (
          <>
            <InventoryHeading/>
            <div className="inventory-keys">
              <span className="inventory-keys__content">Item</span>
              <span className="inventory-keys__content">Last Ordered</span>
              <span className="inventory-keys__content">Location</span>
              <span className="inventory-keys__content">Quantity</span>
              <span className="inventory-keys__content">Status</span>
            </div>
            <ProductTable
              refreshTable={this.refreshTable}
              products={this.state.products}
            />
            <CreateNew
              mobile = {this.state.mobile}
              changeMobile = {this.changeMobile}
              table={this.refreshTable}
              locations={this.state.locations}
            />
          </>
        );
      } 
        return <><CreateNew   changeMobile = {this.changeMobile}     table={this.refreshTable} locations={this.state.locations}  mobile = {this.state.mobile}/> </>
     
    } else {
      return <h1>Loading</h1>;
    }
  }
}
