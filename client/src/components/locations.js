import React, { Component } from "react";
import axios from "axios";
import arrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";

export default class Locations extends React.Component {
  state = {
    locationsInfo: []
  };

  componentDidMount() {
    console.log("component mounted");
    axios.get("http://localhost:5000/locations").then(answer => {
      this.setState({ locationsInfo: answer.data });
    });
  }

  render() {
    if (this.state.locationsInfo.length > 0) {
      console.log(this.state.locationsInfo);
      let test = this.state.locationsInfo.map(obj => {
        return (
          <>
            <div className="locations-content">
              <div className="warehouse-container">
                <div className="warehouse-object1">{obj.warehouseName}</div>
                <div className="warehouse-object2">{obj.warehouseAddress}</div>
              </div>
              <div className="contact-container">
                <div className="contact-object">{obj.contact}</div>
                <div className="contact-info__object">{obj.contactinfo}</div>
                <div className="category-object">{obj.categories}</div>
              </div>
              <div className="location-row__remove">
                <img className="location-row__remove-button" src={arrowRight} />
              </div>
            </div>
          </>
        );
      });
      return (
        <section className="locations-container">
          <div className="locations-div">
            <h1 className="locations-title">Locations</h1>
            <input
              className="header-input"
              type="text"
              name="name"
              placeholder="Search"
            />
          </div>

          <div className="locations-keys">
            <span className="locations-keys__warehouse">WAREHOUSE</span>
            <span className="locations-keys__contact">CONTACT</span>
            <span className="locations-keys__contactinfo">
              CONTACT INFORMATION
            </span>
            <span className="locations-keys__categories">CATEGORIES</span>
          </div>
          {test}
        </section>
      );
    } else return <h1>Loading</h1>;
  }
}
// }
