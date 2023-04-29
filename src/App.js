import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import List from "./List";
import Error from "./Error";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/bus" element={<List />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
