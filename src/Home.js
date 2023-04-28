import React from "react";
import Search from "./Search";
import { useGlobalContext } from "./Context";
const Home = () => {
  const { bus } = useGlobalContext();

  return (
    <>
      <Search />
    </>
  );
};

export default Home;
