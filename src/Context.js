import React, { useContext, useEffect, useState } from "react";

const API_URL = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses`;

// create context
const AppContext = React.createContext();

//Provider
const AppProvider = ({ children }) => {
  const [bus, setBus] = useState([]); //Empty array for Array(in API)

  const [sourceQuery, setSourceQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [date, setDate] = useState();
  //API request
  const getBus = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setBus(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect
  useEffect(() => {
    getBus(`${API_URL}?source=${sourceQuery}&destination=${destinationQuery}`);
  }, [sourceQuery, destinationQuery]);

  return (
    <AppContext.Provider
      value={{
        bus,
        setBus,
        sourceQuery,
        setSourceQuery,
        destinationQuery,
        setDestinationQuery,
        date,
        setDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Global context
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
