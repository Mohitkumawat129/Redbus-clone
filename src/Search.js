import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import { NavLink } from "react-router-dom";
const Search = () => {
  const [path, setPath] = useState();
  const {
    bus,
    setBus,
    sourceQuery,
    setSourceQuery,
    destinationQuery,
    setDestinationQuery,
    date,
    setDate,
  } = useGlobalContext();
  console.log(bus);

  const Click = () => {
    if (sourceQuery === "") {
      alert("Please fill source city");
    } else if (destinationQuery === "") {
      alert("Please fill destination city");
    } else if (date === undefined) {
      alert("Please fill date");
    } else {
      setPath("/bus");
    }
    /* If source and destination are not in our api */
    const filterBus = [...bus].filter((val) => {
      return val.source === sourceQuery && val.destination === destinationQuery;
    });
    if (filterBus.length === 0) {
      setPath("*");
    }
    setBus(filterBus);

    /*//////////////////////////////////////////////*/
  };
  const Switch = () => {
    setSourceQuery(destinationQuery);
    setDestinationQuery(sourceQuery);
  };

  return (
    <>
      <div className="search_bar">
        <form onSubmit={(event) => event.preventDefault()}>
          <div className="input_field">
            <input
              type="text"
              placeholder="Source"
              value={sourceQuery}
              onChange={(event) => setSourceQuery(event.target.value)}
            />
            <button style={{ border: "2px solid black" }} onClick={Switch}>
              switch cities
              {/* <SwapHorizIcon style={{ fontSize: "3rem" }} /> */}
            </button>
            <input
              type="text"
              placeholder="Destination"
              value={destinationQuery}
              onChange={(event) => setDestinationQuery(event.target.value)}
            />
            <input
              className="inputDate"
              type="date"
              placeholder="Date of travel"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
            <NavLink to={path}>
              <button onClick={Click}>Search buses</button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
