import React from "react";
import Switch from "react-switch";
import Select from "react-select";
import axios from 'axios'
export default class CreateNew extends React.Component {
  state = {
    warehouses: this.props.locations,
    warehouseId: undefined,
    checked: false,
    active: "none",
    city: "City",
    country: "Country",
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
      this.state.warehouses.map(loc => {
        if (loc.warehouse1 === label) {
          return { Country: loc.country, City: loc.city };
        }
        return null;
      });
    this.setState({
      country: warehouse[0].Country,
      city: warehouse[0].City,
      warehouseId: value
    });
  };
  post = () => {
    console.log(this.product.value, this.date.value, this.quantity.value, this.description.value)
    if(this.product.value !== '' || this.date.value !== '' || this.quantity.value !== '')
    {
      axios.post('http://localhost:5000/create', {
        warehouseId: this.state.warehouseId,
        product: this.product.value,
        date: this.date.value,
        stock: this.state.checked,
        quantity: this.quantity.value,
        description: this.description.value
      })
    } else {
      console.log("Please fill out all fields")
    }

  }
  render() {
    const options =
      this.state.warehouses &&
      this.state.warehouses.map(loc => {
        return { value: 123, label: loc.warehouse1 };
      });

    return (
      <>
        <button onClick={this.toggleClass}>Open</button>
        <div className="modal" style={{ display: `${this.state.active}` }}>
          <div className="modal__content">
            <h2 className="modal__content-header">Create New</h2>
            <div className="modal__content-container">
              <div className="modal__content-container-input" >
                <h4 className="modal__content-subheader">Product</h4>
                <input
                  className="modal__content-input"
                  placeholder="Product Name"
                  ref = {ref => (this.product = ref)}
                ></input>
              </div>
              <div className="modal__content-container-input">
                <h4 className="modal__content-subheader">Last Ordered</h4>
                <input
                  className="modal__content-input"
                  placeholder="yyyy-mm-dd"
                  ref = {ref => (this.date = ref)}
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
                <input className="modal__content-input" placeholder="0"  ref = {ref => (this.quantity = ref)}></input>
              </div>
              <div className="modal__content-status">
                <div>
                  <h4 className="modal__content-subheader">Status</h4>
                  <h4 className="modal__content-status-text" ref = {ref => (this.stock = ref)}>{this.state.checked === false?  "Out Of Stock":"In Stock"}</h4>
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
              ref = {ref => (this.description = ref)}
            ></input>
            <div className="modal__content-btn-container">
              <button onClick = {this.post}className="modal__content-submit">Save</button>
              <h5 onClick={this.cancel} className="modal__content-cancel">
                Cancel
              </h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}
