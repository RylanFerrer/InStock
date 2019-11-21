import React from "react";

import kebab from "../../assets/Icons/SVG/Icon-kebab-default.svg";
import { Link } from "react-router-dom";

import RemoveButton from "./Remove-button";

export default function ProductTable(props) {
  //cleaning the props we receive so that we can deal with just an array.
  console.log(props.products);
  const stateProducts = props.products[0];
  //Map out the table based on the props that we are receiving and cleaning into an array
  const tableDisplay = stateProducts.map(obj => {
    return (
      <section key={obj.key} className="table">
        <Link to={`/${obj.key}`}>
          <div className="table-row">
            <div className="table-row__content">
              <span className="table-row__content--key">Item</span>
              <span className="table-row__content--bold">{obj.item}</span>
              <span className="table-row__content--value">
                {obj.description}
              </span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--key">Last Ordered</span>
              <span className="table-row__content--value">
                {obj.last_ordered}
              </span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--key">Location</span>
              <span className="table-row__content--value">{obj.location}</span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--key">Quantity</span>
              <span className="table-row__content--value">{obj.quantity}</span>
            </div>
            <div className="table-row__content">
              <span className="table-row__content--key">Status</span>
              <span className="table-row__content--value">{obj.status}</span>
            </div>
            <div className="table-row__remove">
              <img className="table-row__remove-button" src={kebab} />
            </div>
          </div>
        </Link>
      </section>
    );
  });
  // Returning table
  return <>{tableDisplay}</>;
}
