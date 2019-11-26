import React from "react";
import axios from "axios";
import addIcon from "../assets/Icons/SVG/Icon-add.svg";
export default class CreateNew extends React.Component {
  state = {
    warehouseId: undefined,
    checked: false,
    active: "none",
  };
  toggleClass = () => {
    this.setState({ active: "flex" });
  };
  cancel = () => {
    this.setState({ active: "none" });
  };
  post = () => {
    if (
      this.name.value !== "" ||
      this.street.value !== "" ||
      this.country.value !== "" ||
      this.city.value !== "" || 
      this.areacode.value !== "" ||
      this.manager.value !== ""
    ) {
      axios.post("http://localhost:5000/create/location", {
        name: this.name.value,
        street: this.street.value,
        country: this.country.value,
        city: this.city.value,
        areacode: this.areacode.value,
        contact: this.manager.value,
        categories: this.category.value
      }).then(res => {
        this.props.refreshTable();
        this.name.value = ""
        this.street.value = ""
        this.country.value = ""
        this.areacode.value = ""
        this.manager.value = ""
        this.category.value = ""
        
      })
    } else {
      alert("Please fill out all fields");
    }
  };
  
  render() {
  
    const position = this.props.mobile === true ? "none": "fixed"

    return (
      <>
        <div onClick={() => this.props.changeMobile()} className="add-post mobile">
          <img alt =  "add" className="add-post__icon" src={addIcon} />
        </div>
        <div onClick={this.toggleClass} className="add-post tablet">
          <img  alt = "Add" className="add-post__icon" src={addIcon} />
        </div>
        <div className="modal" style={{ display: `${this.props.mobile === true ? "flex": this.state.active}`, position: `${position}` }}>
          <div className="modal__content">
            <h2 className="modal__content-header">Add New Warehouse</h2>
            <div className="modal__content-container">
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Warehouse Name</h4>
                <input
                  className="modal__content-input"
                  placeholder="Warehouse Name"
                  ref={ref => (this.name = ref)}
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Street</h4>
                <input
                  className="modal__content-input"
                  placeholder="Street"
                  ref={ref => (this.street = ref)}
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader ">City</h4>
                <input
                className="modal__content-input"
                placeholder="City"
                ref={ref => (this.city = ref)}
              ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader ">Country</h4>
                <input
                className="modal__content-input"
                placeholder="Country"
                ref={ref => (this.country = ref)}
              ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Area Code</h4>
                <input
                  className="modal__content-input"
                  placeholder="V2R901"
                  ref={ref => (this.areacode = ref)}
                ></input>
              </div>
              <div className="modal__content-container-input">
              <h4 className="modal__content-subheader">Manager</h4>
              <input
                className="modal__content-input"
                placeholder="Name"
                ref={ref => (this.manager = ref)}
              ></input>
            </div>
            <div className="modal__content-container-input">
            <h4 className="modal__content-subheader">Categories</h4>
            <input
              className="modal__content-input"
              placeholder="Category"
              ref={ref => (this.category = ref)}
            ></input>
          </div>
              
            <div className="modal__content-btn-container">
              <button onClick={this.post} className="modal__content-submit">
                Save
              </button>
              <h5 onClick={() => this.props.changeMobile()} className="modal__content-cancel mobile">
                Cancel
              </h5>
              <h5 onClick={this.cancel} className="modal__content-cancel tablet">
                Cancel
              </h5>
            </div>
          </div>
        </div>
        </div>
      </>
    );
  }
}
