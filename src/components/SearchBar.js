import React from "react";

function SearchBar(props) {
  return (
    <div className="input__container">
      <label htmlFor="search">Search:</label>
      <input
        value={props.search}
        onChange={props.setSearch}
        id="search"
        type="text"
      ></input>
    </div>
  );
}

export default SearchBar;
