import React, { Component } from "react";
import kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg";

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

  render() {
    let test =
      this.state.remove === true ? (
        <div className="table-row__remove-div">Remove</div>
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
        {test}
      </div>
    );
  }
}
