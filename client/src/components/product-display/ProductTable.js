import React from "react";
import { Link } from "react-router-dom";
import RemoveButton from "./Remove-button";
import Axios from "axios";

export default class ProductTable extends React.Component {
  state = {
    stateProducts: this.props.products[0],
  
    // productNumber: this.props.products[0].length
  };
  updateProducts = () => {
    Axios.get("http://localhost:5000/products").then(res => {
      // this.setState({
      //console.log(res.data);
      //   stateProducts: res.data
      // });
    });
  };


  //cleaning the props we receive so that we can deal with just an array.
  // console.log(this.props.products);
  //stateProducts = this.props.products[0];
  //Map out the table based on the props that we are receiving and cleaning into an array
 

  // Returning table
  render() {
    const tableDisplay =
    
    this.props.products[0].map(obj => {
        return (
          <section key={obj.key} className="table">
            {/* <Link to={`/${obj.key}`}> */}
            {/* <div className="table-row"> */}
            <Link className="table-row" to={`/${obj.key}`}>
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
              {/* <div className="table-row__remove">
                <img className="table-row__remove-button" src={kebab} />
              </div> */}
            </Link>
            <RemoveButton refreshTable={this.props.refreshTable} productID={obj.key} />
            {/* </div> */}
            {/* </Link> */}
          </section>
        );
      });
      
      return <>{tableDisplay}</>;
      
   
  }
}
