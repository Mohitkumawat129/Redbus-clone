import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import redbus from "./image/redbus-logojpg.webp";

const SigninForm = () => {
  const [path, setPath] = useState();
  const [detail1, setDetail1] = useState({
    email: "",
    mobile: "",
    password: "",
  });

  /* Get data from local storage*/
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("detail"));
    if (items) {
      setItems(items);
    }
  }, []);
  /*///////////////////////////////////////////////*/

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetail1((val) => {
      return { ...val, [name]: value };
    });
  };

  const signInBtn = () => {
    if (items.email !== detail1.email) {
      alert("Email does not match");
    } else if (items.password !== detail1.password) {
      alert("Password does not match");
    } else if (detail1.email === "" || detail1.password === "") {
      alert("Please fill data");
    } else {
      setPath("/bus");
    }
  };
  return (
    <>
      <div className="form">
        <div className="logo">
          <NavLink to="/">
            <img src={redbus} alt="logo" />
          </NavLink>
        </div>
        <h1>Sign in</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="email"
            placeholder="Write your email"
            value={detail1.email}
            name="email"
            onChange={onChange}
            autocomplete="off"
            required
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Write your password"
            value={detail1.password}
            name="password"
            onChange={onChange}
            autocomplete="off"
            required
          />
          <br />
          <br />
          <NavLink to={path}>
            <button onClick={signInBtn}> Sign in </button>
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default SigninForm;
