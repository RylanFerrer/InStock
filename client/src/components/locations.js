import React from "react";
import axios from "axios";
import CreateNewWarehouse from "./CreateNewWarehouse";
import arrowRight from "../assets/Icons/SVG/Icon-arrow-right.svg";
import SearchIcon from "../assets/Icons/SVG/Icon-search.svg";
import { Link } from "react-router-dom";

export default class Locations extends React.Component {
  state = {
    locationsInfo: [],
    mobile: false
  };

  componentDidMount() {
    console.log("component mounted");
    axios.get("http://localhost:5000/locations").then(answer => {
      this.setState({ locationsInfo: answer.data });
    });
  }
  changeMobile = () => {
    this.setState({
      mobile: !this.state.mobile
    });
  };
  refreshTable = () => {
    axios.get("http://localhost:5000/locations").then(response => {
      this.setState({ locationsInfo: response.data });
    });
  };
  render() {
    if (this.state.locationsInfo.length > 0) {
      console.log(this.state.locationsInfo);
      let warehouse = this.state.locationsInfo.map(obj => {
        return (
          <>
            <Link to={`/locations/${obj.id}`}>
              <div className="locations-content">
                <div className="warehouse-container">
                  <div className="warehouse-object1">{obj.name}</div>
                  <div className="warehouse-object2">
                    {`${obj.street}, ${obj.city}`}
                  </div>
                </div>
                <div className="contact-container">
                  <div className="contact-object">{obj.contact}</div>
                  <div className="contact-info__object">{obj.contactinfo}</div>
                  <div className="category-object">{obj.categories}</div>
                </div>
                <div className="location-row__remove">
                  <img
                    alt="remove"
                    className="location-row__remove-button"
                    src={arrowRight}
                  />
                </div>
              </div>
            </Link>
          </>
        );
      });
      if (this.state.mobile === false) {
        return (
          <>
            <section className="locations-container">
              <div className="locations-div">
                <h1 className="locations-title">Locations</h1>
                <div className="inventory-heading__searchbar">
                  <img
                    alt="search"
                    className="inventory-heading__searchbar-icon"
                    src={SearchIcon}
                  />
                  <input
                    className="header-input"
                    type="text"
                    name="name"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div className="locations-large">
                <div className="locations-keys">
                  <span className="locations-keys__warehouse">WAREHOUSE</span>
                  <span className="locations-keys__contact">CONTACT</span>
                  <span className="locations-keys__contactinfo">
                    CONTACT INFORMATION
                  </span>
                  <span className="locations-keys__categories">CATEGORIES</span>
                </div>
                {warehouse}
              </div>
            </section>
            <CreateNewWarehouse
              refreshTable={this.refreshTable}
              mobile={this.state.mobile}
              changeMobile={this.changeMobile}
            />
          </>
        );
      }
      return (
        <>
          <CreateNewWarehouse
            refreshTable={this.refreshTable}
            mobile={this.state.mobile}
            changeMobile={this.changeMobile}
          />
        </>
      );
    } else return <h1>Loading</h1>;
  }
}
// }
