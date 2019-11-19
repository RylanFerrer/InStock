import React from "react";

export default function ProductTable(props) {
  const products = props.items;
  console.log(products);
  const tableDisplay = products.map(obj => {
    return (
      <section key={obj.key} className="table">
        <div className="table-row">
          <div className="table-row__content">
            <span className="table-row__content--key">Item</span>
            <span className="table-row__content--bold">{obj.item}</span>
            <span className="table-row__content--value">{obj.description}</span>
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
        </div>
      </section>
    );
  });

  return (
    <>
      <h1>Still here</h1>
      {tableDisplay}
    </>
  );
}
