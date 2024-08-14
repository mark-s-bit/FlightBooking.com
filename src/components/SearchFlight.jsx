import React from "react";

function SearchFlight() {
  return (
    <div>
      <select style={{ margin: "10%" }} name="" id="">
        <option value="">Nairobi</option>
        <option value="">Nakuru</option>
      </select>
      <select
        style={{
          margin: "10% 5%",
          fontFamily: "sans-serif",
          color: "black",
          borderColor: "yellow",
        }}
        name=""
        id=""
      >
        <option value="">Nairobi</option>
        <option value="">Nakuru</option>
      </select>
      <input style={{ marginLeft: "5%" }} type="date"></input>
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchFlight;
