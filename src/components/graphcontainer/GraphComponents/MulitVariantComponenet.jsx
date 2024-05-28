import React from "react";
import Bargraph from "../../graphs/overall revenue/Bargraph";
import RevenueLineGraph from "../../graphs/overall revenue/Linechart";
import RevenuePieChart from "../../graphs/overall revenue/Piechart";
import "../Graphcontainer.css";
import { Typography } from "@mui/material";

const MulitVariantComponenet = ({ year, month, week }) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthDays = Array.from({ length: 30 }, (_, i) => `Month ${i + 1}`);

  const yearlyData = year.map((value, index) => ({
    label: months[index], // Use month name as label
    value: value,
  }));

  const monthlyData = month.map((value, index) => ({
    label: monthDays[index], // Use month name as label
    value: value,
  }));

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const weeklyData = week.map((value, index) => ({
    label: daysOfWeek[index], // Use month name as label
    value: value,
  }));

  return (
    <div className="combinediv">
      {/* <Typography fontSize={16}>Multi Variant</Typography> */}
      <div className="first">
        {/* <Bargraph /> */}
        <RevenueLineGraph dataSet={yearlyData} />
        <RevenueLineGraph dataSet={monthlyData} />
      </div>
      <div className="second">
        <RevenueLineGraph dataSet={weeklyData} />
      </div>
    </div>
  );
};

export default MulitVariantComponenet;
