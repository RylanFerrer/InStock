import React from "react";
import CreateNew from "./components/CreateNew";
import Navbar from "../src/components/navbar";
import Locations from "../src/components/locations";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";
import Inventory from "./components/product-display/Inventory";
import ProductInformation from "./components/ProductInformation";

// const locationsInfo = [
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     country: "Canada",
//     city: "Toronto",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   },
//   {
//     warehouse1: "Warehouse Number 1",
//     warehouse2: "469 King St W, Toronto, ON",
//     contact: "Mara Weinberg Warehouse Manager",
//     contactinfo: "+1 416 678 2345 weinberg@instack.com",
//     categories:
//       " Industrial, Automotive, Heavy, Mechanical, Engineering, Transportation"
//   }
// ];
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route
              path="/locations"
              render={() => {
                return <Locations />;
              }}
            ></Route>
            <Route
              path="/:id"
              render={props => {
                return <ProductInformation warehouseID={props.match.url} />;
              }}
            ></Route>
            <Route path="/" exact component={Inventory} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
