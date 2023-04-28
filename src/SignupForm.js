import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import redbus from "./image/redbus-logojpg.webp";
const SignupForm = () => {
  const [path, setPath] = useState("");
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetail((val) => {
      return { ...val, [name]: value };
    });
  };
  const signUpBtn = () => {
    if (detail.password !== detail.confirmPassword) {
      alert("Password mismatch");
    } else if (
      detail.name === "" ||
      detail.email === "" ||
      detail.password === "" ||
      detail.confirmPassword === "" ||
      detail.mobile === ""
    ) {
      alert("Please fill data");
    } else {
      setPath("/signIn");
    }
  };
  useEffect(() => {
    localStorage.setItem("detail", JSON.stringify(detail));
  }, [detail]);

  return (
    <>
      <div className="form">
        <div className="logo">
          <NavLink to="/">
            <img src={redbus} alt="logo" />
          </NavLink>
        </div>
        <h1>Sign up</h1>
        <form onSubmit={(event) => event.preventDefault()}>
          <input
            type="text"
            placeholder="Write your name"
            required
            name="name"
            value={detail.name}
            onChange={onChange}
            autocomplete="off"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Write your email id"
            required
            value={detail.email}
            name="email"
            onChange={onChange}
            autocomplete="off"
          />
          <br />
          <br />
          <input
            type="number"
            placeholder="Write your mobile"
            required="required"
            min="10"
            value={detail.mobile}
            name="mobile"
            onChange={onChange}
            autocomplete="off"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Write your password"
            required
            value={detail.password}
            name="password"
            onChange={onChange}
            autocomplete="off"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm your password"
            required
            value={detail.confirmPassword}
            name="confirmPassword"
            onChange={onChange}
            autocomplete="off"
          />
          <br />
          <br />
          <NavLink to={path}>
            <button onClick={signUpBtn}> Sign up </button>
          </NavLink>
        </form>
      </div>
      {/* {localStorage.setItem(detail)} */}
    </>
  );
};

export default SignupForm;
