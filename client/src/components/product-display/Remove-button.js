import React, { Component } from "react";
import kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg";
import axios from "axios";

export default class RemoveButton extends Component {
  state = {
    remove: false
  };

  click = () => {
    this.setState({
      remove: !this.state.remove
    });
    console.log(this.state);
  };

  deleteProduct = () => {
    axios
      .delete(`http://localhost:5000/products/${this.props.productID}`)
      .then(res => {
        this.props.updateFunction();
      });
  };
  render() {
    let removeProduct =
      this.state.remove === true ? (
        <div className="table-row__remove-div" onClick={this.deleteProduct}>
          Remove
        </div>
      ) : (
        <></>
      );
    return (
      <div className="table-row__remove">
        <img
          className="table-row__remove-button"
          onClick={this.click}
          src={kebab}
        />
        {removeProduct}
      </div>
    );
  }
}
