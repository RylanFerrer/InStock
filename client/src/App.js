import React from "react";
import CreateNew from "./components/CreateNew";
import Navbar from "../src/components/navbar";
import Locations from "../src/components/locations";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";
import Inventory from "./components/product-display/Inventory";

const locationsInfo = [
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse1: "Warehouse Number 1",
    warehouse2: "469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  }
];
export default class App extends React.Component {
  state = {
    locationsInfo: locationsInfo
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <CreateNew />
          <Switch>
            <Route
              path="/locations"
              render={() => {
                return <Locations locationsInfo={this.state.locationsInfo} />;
              }}
            ></Route>
          </Switch>
        </BrowserRouter>
        <Inventory />
      </div>
    );
  }
}
