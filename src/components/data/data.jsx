import React, { useState } from "react";
import "./data.css";

import { LuLoader2 } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import fetchTotalMSE from "../../scripts/fetchTotalMSE";

import { createContext } from "react";
import Totalcard from "../graphs/overall revenue/Totalcard";
const totalrevenue = createContext();

const ModelOutput = () => {
  const [data, setData] = useState({});
  const results = useQuery({
    queryKey: ["totalMSE", data],
    queryFn: fetchTotalMSE,
  });
  // const [data, setData] = useState(() => {
  //   // Retrieve data from local storage if available
  //   const savedData = localStorage.getItem("modelOutputData");
  //   return savedData ? JSON.parse(savedData) : null;
  // });
  if (results.isLoading) {
    return <LuLoader2 className="text-fixed-center-spin" />;
  }

  const responseData = results?.data ?? [];
  console.log("ye mse hai", responseData);
  const mseValues = Object.values(responseData.mse);
  const totalMSE = mseValues.reduce((acc, curr) => acc + curr, 0);

  // const [totalMSE, setTotalMSE] = useState(() => {
  //   // Retrieve totalMSE from local storage if available
  //   const savedTotalMSE = localStorage.getItem("totalMSE");
  //   return savedTotalMSE ? JSON.parse(savedTotalMSE) : 0;
  // });

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:5000");
  //     const responseData = response.data;

  //     // Store data in local storage
  //     localStorage.setItem("modelOutputData", JSON.stringify(responseData));

  //     // Update state with fetched data
  //     setData(responseData);

  //     const mseValues = Object.values(responseData.mse);

  //     const sum = mseValues.reduce((acc, curr) => acc + curr, 0);
  //     // Store totalMSE in local storage
  //     localStorage.setItem("totalMSE", JSON.stringify(sum));

  //     // Update state with totalMSE
  //     setTotalMSE(sum);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   // Fetch data only if not already fetched
  //   if (!data) {
  //     fetchData();
  //   }
  // });
  // const handleFetchDataClick = () => {
  //   fetchData();
  // };
  return (
    <totalrevenue.Provider value={totalMSE}>
      {/* <Totalcard /> */}
    </totalrevenue.Provider>
    // <SelectNature />

    // <div className="maindiv">
    //   <div>{totalMSE}</div>
    //   {/* <div className="refreshbutton">
    // <button onClick={handleFetchDataClick}>&#10140; Refresh </button>

    // </div> */}
    // <div className="selectnature">
    // {/* </div>
    // </div> */}
  );
};

export default ModelOutput;
