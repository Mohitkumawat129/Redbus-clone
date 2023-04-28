import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="error">
        <h1> oh-oh! </h1>
        <h1> Cant find the route</h1>
        <NavLink to="/">
          <button> Return to home page </button>
        </NavLink>
      </div>
    </>
  );
};

export default Error;
