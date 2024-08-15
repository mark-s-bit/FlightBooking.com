import React, { useEffect, useState } from "react";
import "./SearchFlight.css"; // Import the CSS file

function SearchFlight({ flights,filterBySearch }) {
  const [searching, setSearching] = useState({
    from: "",
    to: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setSearching((searching) => ({ ...searching, [name]: value }));
  };
  useEffect(() => {
    filterBySearch(searching);
  }, [searching]);

  return (
    <div className="search">
      <h2 style={{ textDecoration: "underline" }}>Search </h2>
      <input
        onChange={handleChange}
        placeholder="From"
        className="selectBox"
        list="from"
        name="from"
        id="class"
      />
      <datalist id="from">
        {flights.length > 0
          ? flights.map((flight) => {
              return <option value={flight.from} />;
            })
          : "No flights"}
      </datalist>
      <input
        onChange={handleChange}
        placeholder="To"
        className="selectBox"
        list="from"
        name="to"
        id="class"
      />
      <datalist id="To">
        {flights.length > 0
          ? flights.map((flight) => {
              return <option value={flight.to} />;
            })
          : "No flights"}
      </datalist>

      <input
        onChange={handleChange}
        className="DateInput"
        type="date"
        name="date"
      ></input>
    </div>
  );
}

export default SearchFlight;
