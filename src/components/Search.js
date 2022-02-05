import React from "react";

function Search({onSearch}) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      {/* the onSearch event is placed in the input element to invoke the onSearch prop function */}
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={onSearch}
      />
    </div>
  );
}

export default Search;
