import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class ProductInformation extends Component {
  state = {
    itemInfo: undefined
  };
  componentDidMount() {
    Axios.get(`http://localhost:5000/products${this.props.warehouseID}`).then(
      response => {
        console.log(response.data);
        this.setState({
          itemInfo: response.data[0]
        });
      }
    );
  }
  // info = {
  //   item: "Product Name",
  //   description:
  //     "description of item. description of item. description of item. description of item. description of item. description of item. description of item",
  //   ordered_by: "John Doe",
  //   last_ordered: "5/24/2018",
  //   quantity: "1200",
  //   reference_number: "123456789",
  //   location: "Toronto, ON",
  //   status: "In Stock",
  //   categories:
  //     "Industrial, automotive, Industrial, automotive, Industrial, automotive, Industrial, automotive",
  //   key: 123456
  // };
  render() {
    if (this.state.itemInfo !== undefined) {
      const itemInfo = this.state.itemInfo;
      console.log(itemInfo);
      return (
        <>
          <header className="header">
            <div className="header-container">
              <Link to="/">
                <img className="header-container__image" src={Arrow} />
              </Link>
              {/* <h1 className="header-container__title">Product Name</h1> */}
              <h1 className="header-container__title">{itemInfo.item}</h1>
            </div>
            <div className="header__stock-status">{itemInfo.status}</div>
          </header>
          <section className="item">
            <div className="item-description">
              <span className="item-description__heading">
                Item description
              </span>
              <span className="item-description__content">
                {itemInfo.description}
              </span>
            </div>
            <div className="item-info">
              <div className="item-info__content">
                <span className="item-info__content-key">Ordered By</span>
                <span className="item-info__content-value">
                  {itemInfo.ordered_by}
                </span>
              </div>
              <div className="item-info__content">
                <span className="item-info__content-key">Reference Number</span>
                <span className="item-info__content-value">
                  {itemInfo.reference_number}
                </span>
              </div>
              <div className="item-info__content">
                <span className="item-info__content-key">Last Ordered</span>
                <span className="item-info__content-value">
                  {itemInfo.last_ordered}
                </span>
              </div>
              <div className="item-info__content">
                <span className="item-info__content-key">Location</span>
                <span className="item-info__content-value">
                  {itemInfo.location}
                </span>
              </div>
              <div className="item-info__content">
                <span className="item-info__content-key">Quantity</span>
                <span className="item-info__content-value">
                  {itemInfo.quantity}
                </span>
              </div>
              <div className="item-info__categories">
                <span className="item-info__categories-key">Categories</span>
                <span className="item-info__categories-value">
                  {itemInfo.categories}
                </span>
              </div>
            </div>
          </section>
          <button className="edit-product">Edit</button>
        </>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}
