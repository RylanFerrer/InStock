import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";

export default class ProductInformation extends Component {
  info = {
    item: "product name",
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
    console.log(this.info);
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
          <div className="item-description">{this.info.description}</div>
          <div className="item-info">
            <span className="item-info__content">{this.info.ordered_by}</span>
            <span className="item-info__content">
              {this.info.reference_number}
            </span>
            <span className="item-info__content">{this.info.last_ordered}</span>
            <span className="item-info__content">{this.info.location}</span>
            <span className="item-info__content">{this.info.quantity}</span>
            <span className="item-info__categories">
              {this.info.categories}
            </span>
          </div>
        </section>
        <button>Edit</button>
      </>
    );
  }
}
