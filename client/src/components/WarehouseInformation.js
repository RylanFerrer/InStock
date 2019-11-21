import React, { Component } from "react";
import Arrow from "../assets/Icons/SVG/Icon-back-arrow.svg";
import ProductTable from "./product-display/ProductTable";

export default class WarehouseInformation extends Component {
  render() {
    const fakeWarehouse = {
      street: "123 Main Street W.",
      country: "canada",
      city: "Toronto",
      areacode: "M65GB",
      contact: "Mara Weinberg",
      role: "Warehouse Manager",
      phone: "1 555 555 5555",
      email: "weinberg@instock.com",
      warehouse: "Noor's Cheetos "
    };

    const fakeProducts = [
      [
        {
          item: "Wood",
          description: "description of item",
          ordered_by: "Mara Weinberg Warehouse Manager",
          last_ordered: "5/24/2018",
          quantity: "1200",
          reference_number: "123456789",
          location: "Toronto, ON",
          status: "In Stock",
          key: 123456,
          warehouseID: 1234,
          categories:
            " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
        },
        {
          item: "Metal",
          description: "this is goint to be wild",
          ordered_by: "Mara Weinberg Warehouse Manager",
          last_ordered: "5/24/2018",
          quantity: "54000",
          reference_number: "123456789",
          location: "Toronto, ON",
          status: "In Stock",
          key: 99876,
          warehouseID: 1234,
          categories:
            "Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
        },
        {
          item: "Cars",
          description: "yeah",
          ordered_by: "Mara Weinberg Warehouse Manager",
          last_ordered: "5/24/2018",
          quantity: "54000",
          reference_number: "542039",
          location: "Toronto, ON",
          status: "In Stock",
          key: 99876,
          warehouseID: 1234,
          categories:
            "Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
        }
      ]
    ];
    return (
      <>
        <header className="header">
          <div className="header-container">
            <img className="header-container__image" src={Arrow} />
            {/* <h1 className="header-container__title">Product Name</h1> */}
            <h1 className="header-container__title">
              {fakeWarehouse.warehouse}
            </h1>
          </div>
        </header>
        <section className="warehouse-info">
          <div className="warehouse-info__content">
            <span className="warehouse-info__content-key">Address</span>
            <div className="warehouse-info__content-container">
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.street}
              </span>
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.areacode}
              </span>
            </div>
            <div className="warehouse-info__content-container">
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.city}
              </span>
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.country}
              </span>
            </div>
          </div>
          <div className="warehouse-info__content">
            <span className="warehouse-info__content-key">Contact</span>
            <div className="warehouse-info__content-container">
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.contact}
              </span>
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.role}
              </span>
            </div>
            <div className="warehouse-info__content-container">
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.phone}
              </span>
              <span className="warehouse-info__content-container--value">
                {fakeWarehouse.email}
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
          <ProductTable products={fakeProducts} />
        </section>
      </>
    );
  }
}
