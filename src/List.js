import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGlobalContext } from "./Context";
const List = () => {
  const [error, setError] = useState("");
  const { bus, setBus, sourceQuery, destinationQuery, date } =
    useGlobalContext();

  /* getTime function*/
  const getTime = (timing) => {
    const timeParts = timing.split(":");
    let hour = parseInt(timeParts[0]);
    let minute = parseInt(timeParts[1].substr(0, 2));
    const period = timeParts[1].substr(2);

    if (period === "PM" && hour !== 12) {
      hour += 12;
    } else if (period === "AM" && hour === 12) {
      hour = 0;
    }

    return hour * 60 + minute;
  };
  /*///////////////////////////////////////////////*/

  /* sorting function*/

  const sortByPrice = () => {
    const sortPrice = [...bus].sort((a, b) => {
      const a1 = parseInt(a.ticketPrice);
      const b1 = parseInt(b.ticketPrice);
      return a1 - b1;
    });
    setBus(sortPrice);
  };

  const sortByDeparture = () => {
    const sortDeparture = [...bus].sort((a, b) => {
      const a1 = getTime(a.departureTime);
      const b1 = getTime(b.departureTime);
      return a1 - b1;
    });
    setBus(sortDeparture);
  };

  const sortByArrivalTime = () => {
    const sortArrival = [...bus].sort((a, b) => {
      const a1 = getTime(a.arrivalTime);
      const b1 = getTime(b.arrivalTime);
      return a1 - b1;
    });
    setBus(sortArrival);
  };
  /*///////////////////////////////////////////////*/

  return (
    <>
      <div className="List_container">
        <h1 className="head">
          List of buses from {sourceQuery} to {destinationQuery} on {date}
        </h1>

        {/* SORTING */}

        <div className="sorting">
          <h2>SORT BY:</h2>
          <ul>
            <li>
              <button onClick={sortByDeparture}>DEPARTURE</button>
            </li>
            <li>
              <button
                style={{ position: "relative", left: "6rem" }}
                onClick={sortByArrivalTime}
              >
                ARRIVAL
              </button>
            </li>
            <li>
              <button
                style={{ position: "relative", left: "16rem" }}
                onClick={sortByPrice}
              >
                PRICE
              </button>
            </li>
          </ul>
        </div>
        {/* /////////////////////////////////// */}

        {bus.map((curBus) => {
          return (
            <>
              <div className="busDetail">
                <div className="para">
                  <p className="para1">Bus name:</p>
                  <p className="para2"> {curBus.busName} </p>
                </div>
                <div className="para">
                  <p className="para1">Departure:</p>
                  <p className="para2">{curBus.departureTime} </p>
                </div>
                <div className="para">
                  <p className="para1">Arrival:</p>
                  <p className="para2">{curBus.arrivalTime} </p>
                </div>
                <div className="para">
                  <p className="para1">Price:</p>
                  <p className="para2">{curBus.ticketPrice} /- </p>
                </div>
              </div>
              <br />
              <br />
            </>
          );
        })}
      </div>

      <NavLink to="/">
        <div className="back_button">
          <button> Go back </button>
        </div>
      </NavLink>
      <p> {error} </p>
    </>
  );
};
export default List;
