import React, { Component } from "react";

class Locations extends React.Component {
  render() {
    const locationsInfo = this.props.locationsInfo;
    console.log(locationsInfo);
    const locationsSection = locationsInfo.map(locs => {
      return (
        <div className="locations-content">
          <div className="warehouse-container">
            <div className="warehouse-object1">{locs.warehouse1}</div>
            <div className="warehouse-object2">{locs.warehouse2}</div>
          </div>
          <div className="contact-container">
            <div className="contact-object">{locs.contact}</div>
            <div className="contact-info__object">{locs.contactinfo}</div>
            <div className="category-object">{locs.categories}</div>
          </div>
        </div>
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
        {locationsSection}
      </section>
    );
  }
}

export default Locations;
