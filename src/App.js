import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Error from "./Error";
import SignupForm from "./SignupForm";
import SigninForm from "./SigninForm";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bus" element={<List />} />
        <Route path="/signUp" element={<SignupForm />} />
        <Route path="/signIn" element={<SigninForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
