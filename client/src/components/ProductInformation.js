import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";

export default class ProductInformation extends Component {
  info = {
    item: "Product Name",
    description: "description of item",
    ordered_by: "John Doe",
    last_ordered: "5/24/2018",
    quantity: "1200",
    reference_number: "123456789",
    location: "Toronto, ON",
    status: "In Stock",
    categories: "Industrial, automotive",
    key: 123456
  };
  render() {
    // console.log(this.info);
    return (
      <>
        <header className="header">
          <div className="header-container">
            <img className="header-container__image" src={Arrow} />
            <h1 className="header-container__title">{this.info.item}</h1>
          </div>
          <div className="header__stock-status">{this.info.status}</div>
        </header>
        <section className="item">
          <div className="item-description">
            <span className="item-description__heading">Item description</span>
            <span className="item-description__content">
              {this.info.description}
            </span>
          </div>
          <div className="item-info">
            <div className="item-info__content">
              <span className="item-info__content-key">Ordered By</span>
              <span className="item-info__content-value">
                {this.info.ordered_by}
              </span>
            </div>
            <div className="item-info__content">
              <span className="item-info__content-key">Reference Number</span>
              <span className="item-info__content-value">
                {this.info.reference_number}
              </span>
            </div>
            <div className="item-info__content">
              <span className="item-info__content-key">Last Ordered</span>
              <span className="item-info__content-value">
                {this.info.last_ordered}
              </span>
            </div>
            <div className="item-info__content">
              <span className="item-info__content-key">Location</span>
              <span className="item-info__content-value">
                {this.info.location}
              </span>
            </div>
            <div className="item-info__content">
              <span className="item-info__content-key">Quantity</span>
              <span className="item-info__content-value">
                {this.info.quantity}
              </span>
            </div>
            <div className="item-info__categories">
              <span className="item-info__categories-key">Categories</span>
              <span className="item-info__categories-value">
                {this.info.categories}
              </span>
            </div>
          </div>
        </section>
        <button className="edit-product">Edit</button>
      </>
    );
  }
}
