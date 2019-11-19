import React from "react";
import CreateNew from "./components/CreateNew";
import Navbar from "./components/Navbar";
import Locations from "./components/Locations";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";

const locationsInfo = [
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
    contact: "Mara Weinberg Warehouse Manager",
    contactinfo: "+1 416 678 2345 weinberg@instack.com",
    categories:
      " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
  },
  {
    warehouse: "Warehouse Number 1 469 King St W, Toronto, ON",
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
      </div>
    );
  }
}
