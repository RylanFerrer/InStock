import React from "react";
import Switch from "react-switch";
import Select from "react-select";
import axios from "axios";
import {Link} from 'react-router-dom'
import addIcon from "../assets/Icons/SVG/Icon-add.svg";
export default class CreateNew extends React.Component {
  state = {
    warehouses: this.props.locations[0],
    warehouseId: undefined,
    checked: false,
    active: "none",
    city: "City",
    country: "Country"
  };
  handleChange = checked => {
    this.setState({ checked: checked });
  };
  toggleClass = () => {
    this.setState({ active: "flex" });
  };
  cancel = () => {
    this.setState({ active: "none" });
  };
  onChangeFunc = optionSelected => {
    const value = optionSelected.value;
    const label = optionSelected.label;
    let warehouse =
      this.state.warehouses &&
      this.state.warehouses.filter(loc => {
        if (loc.name === label) {
          return true
        }
        return false
      });
    this.setState({
      country: warehouse[0].country,
      city: warehouse[0].city,
      warehouseId: value
    });
  };
  post = () => {
    if (
      this.product.value !== "" ||
      this.date.value !== "" ||
      this.quantity.value !== ""
    ) {
      axios.post("http://localhost:5000/create", {
        warehouseId: this.state.warehouseId,
        product: this.product.value,
        date: this.date.value,
        stock: this.state.checked === false ? "Out Of Stock": "In Stock",
        quantity: this.quantity.value,
        description: this.description.value
      }).then(res => {
        this.props.table()
        this.product.value = "" 
        this.date.value = "" 
        this.quantity.value = ""
        this.description.value = ""
        
      })
    } else {
      alert("Please fill out all fields");
    }
  };
  
  render() {
  
    const position = this.props.mobile === true ? "none": "fixed"
    const options =
      this.state.warehouses &&
      this.state.warehouses.map(loc => {
        return { value: loc.id, label: loc.name };
      });

    return (
      <>
        <div onClick={() => this.props.changeMobile()} className="add-post mobile">
          <img className="add-post__icon" src={addIcon} />
        </div>
        <div onClick={this.toggleClass} className="add-post tablet">
          <img className="add-post__icon" src={addIcon} />
        </div>
        <div className="modal" style={{ display: `${this.props.mobile === true ? "flex": this.state.active}`, position: `${position}` }}>
          <div className="modal__content">
            <h2 className="modal__content-header">Create New</h2>
            <div className="modal__content-container">
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Product</h4>
                <input
                  className="modal__content-input"
                  placeholder="Product Name"
                  ref={ref => (this.product = ref)}
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Last Ordered</h4>
                <input
                  className="modal__content-input"
                  placeholder="yyyy-mm-dd"
                  ref={ref => (this.date = ref)}
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Warehouse</h4>
                <Select
                  options={options}
                  ref={input => {
                    this.textInput = input;
                  }}
                  onChange={this.onChangeFunc}
                ></Select>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader ">City</h4>
                <div className="modal__content-div modal__content-input ">
                  <p className="modal__content-div-text">{this.state.city}</p>
                </div>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader ">Country</h4>
                <div className="modal__content-div modal__content-input ">
                  <p className="modal__content-div-text">
                    {this.state.country}
                  </p>
                </div>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Quantity</h4>
                <input
                  className="modal__content-input"
                  placeholder="0"
                  ref={ref => (this.quantity = ref)}
                ></input>
              </div>
              <div className="modal__content-status">
                <div>
                  <h4 className="modal__content-subheader">Status</h4>
                  <h4
                    className="modal__content-status-text"
                    ref={ref => (this.stock = ref)}
                  >
                    {this.state.checked === false ? "Out Of Stock" : "In Stock"}
                  </h4>
                </div>

                <Switch
                  onChange={this.handleChange}
                  checked={this.state.checked}
                ></Switch>
              </div>
            </div>
            <h4 className="modal__content-subheader">Description</h4>
            <input
              className="modal__content-input  modal__content-input--description"
              placeholder="(Optional)"
              ref={ref => (this.description = ref)}
            ></input>
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
        {/* </div> */}
      </>
    );
  }
}
