import React from 'react'
import SearchIcon from "../../assets/Icons/SVG/Icon-search.svg";
export default function InventoryHeading() {
    return (
        <div className="inventory-heading">
        <h1 className="inventory-heading__title">Inventory</h1>
        <div className="inventory-heading__searchbar">
          <img
            alt = "search"
            className="inventory-heading__searchbar-icon"
            src={SearchIcon}
          />
          <input
            className="inventory-heading__searchbar-input"
            type="text"
            placeholder="Search"
          ></input>
        </div>
      </div>
    )
}
