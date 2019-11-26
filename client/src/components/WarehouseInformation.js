import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import ProductTable from "./product-display/ProductTable";
import axios from "axios";

export default class WarehouseInformation extends Component {
  state = {
    warehouse: undefined,
    products: undefined
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/locations/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          warehouse: res.data[0],
          products: [res.data[1]]
        });
        console.log(this.state.products);
      });
  }
 

  refreshTable = () => {
    setTimeout(() => {
      axios.get(`http://localhost:5000/locations/${this.props.match.params.id}`).then(result => {
        console.log(result.data)
      this.setState({
        products: [result.data[1]]
      });
    
    });
    }, 300);
  }

  render() {
    if (
      this.state.warehouse !== undefined &&
      this.state.products !== undefined
    ) {
      return (
        <>
          <header className="header">
            <div className="header-container">
              <img  alt = "arrow" className="header-container__image" src={Arrow} />
              <h1 className="header-container__title">
                {this.state.warehouse[0].name}
              </h1>
            </div>
          </header>
          <section className="warehouse-info">
            <div className="warehouse-info__content">
              <span className="warehouse-info__content-key">Address</span>
              <div className="warehouse-info__content-container">
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].street}
                </span>
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].areacode}
                </span>
              </div>
              <div className="warehouse-info__content-container">
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].city}
                </span>
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].country}
                </span>
              </div>
            </div>
            <div className="warehouse-info__content">
              <span className="warehouse-info__content-key">Contact</span>
              <div className="warehouse-info__content-container">
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].contact}
                </span>
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].role}
                </span>
              </div>
              <div className="warehouse-info__content-container">
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].phone}
                </span>
                <span className="warehouse-info__content-container--value">
                  {this.state.warehouse[0].email}
                </span>
              </div>
            </div>
          </section>
          <section className="warehouse-products">
            <div className="inventory-keys">
              <span className="inventory-keys__content">Item</span>
              <span className="inventory-keys__content">Last Ordered</span>
              <span className="inventory-keys__content">Location</span>
              <span className="inventory-keys__content">Quantity</span>
              <span className="inventory-keys__content">Status</span>
            </div>
            <ProductTable  refreshTable={this.refreshTable}  products={this.state.products} />
          </section>
        </>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}
