import React, { Component } from "react";

class Locations extends React.Component {
  render() {
    const locationsInfo = this.props.locationsInfo;
    console.log(locationsInfo);
    const locationsSection = locationsInfo.map(locs => {
      return (
        <div>
          <div>WAREHOUSE</div>
          <div className="">{locs.warehouse}</div>
          <div>CONTACT</div>
          <div>{locs.contact}</div>
          <div>CONTACT INFORMATION</div>
          <div>{locs.contactinfo}</div>
          <div>CATEGORIES</div>
          <div>{locs.categories}</div>
        </div>
      );
    });

    return (
      <section>
        <h1>Locations</h1>
        <input
          className="header-input"
          type="text"
          name="name"
          value=""
          placeholder="Search"
        />
        {locationsSection}
      </section>
    );
  }
}

export default Locations;
