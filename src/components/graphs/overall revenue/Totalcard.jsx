import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Totalcard.css";

import "../../data/data.css";

import { LuLoader2 } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import fetchTotalMSE from "../../../scripts/fetchTotalMSE";

import { createContext } from "react";
const totalrevenue = createContext();
// import { RevenueContext } from "../../context/MyContext.js";

const Totalcard = ({ label, value }) => {
  const [data, setData] = useState({});
  const results = useQuery({
    queryKey: ["totalMSE", data],
    queryFn: fetchTotalMSE,
  });
  if (results.isLoading) {
    return <LuLoader2 className="text-fixed-center-spin" />;
  }

  const responseData = results?.data ?? [];
  console.log("ye mse hai", responseData);
  const mseValues = Object.values(responseData.mse);
  const totalMSE = mseValues.reduce((acc, curr) => acc + curr, 0);
  const incrores = totalMSE / 10000000;
  const incroresInteger = Math.ceil(incrores); // Rounds up to the nearest integer

  // const [data, setData] = useState(0);
  // useEffect(() => {
  //   setData(localStorage.getItem("totalMSE"));
  // }, []);
  // const { revenue } = useContext(RevenueContext);
  // console.log("revenue ", revenue);
  return (
    <div className="cardx">
      <Card className="card">
        <div className="CardContent">
          <CardContent>
            <div className="combinedrevenues">
              <div className="cardiv">
                <div>
                  <Typography variant="h7" gutterBottom>
                    {label}
                  </Typography>
                </div>
                <div className="cardivtwo">
                  <Typography variant="body3">
                    {incroresInteger}Crore
                  </Typography>
                </div>
              </div>
              <div className="cardiv cardivx">
                <div className="firstdivv">
                  <Typography variant="h7" gutterBottom>
                    {label}
                  </Typography>
                </div>
                <div className="cardivtwo">
                  <Typography variant="body3">{totalMSE}</Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default Totalcard;
