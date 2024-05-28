import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";

const chartSetting = {
  width: 450,
  height: 350,
};
const dataset = [
  { month: "Jan", revenue1: 59 },
  { month: "Feb", revenue1: 50 },
  { month: "Mar", revenue1: 47 },
  { month: "Apr", revenue1: 54 },
  { month: "May", revenue1: 57 },
  { month: "Jun", revenue1: 60 },
  { month: "Jul", revenue1: 59 },
  { month: "Aug", revenue1: 65 },
  { month: "Sep", revenue1: 51 },
  { month: "Oct", revenue1: 60 },
  { month: "Nov", revenue1: 67 },
  { month: "Dec", revenue1: 61 },
];

const valueFormatter = (value) => `$${value}`;

export default function RevenueLineGraph({ dataSet }) {
  return (
    <LineChart
      dataset={dataSet}
      yAxis={[{ scaleType: "linear", dataKey: "revenue", label: "..." }]}
      xAxis={[{ scaleType: "band", dataKey: "label", label: ".." }]}
      series={[
        { dataKey: "value", valueFormatter, color: "rgba(75,192,192,1)" },
        // { dataKey: 'revenue2',  valueFormatter, color: 'rgba(192,75,75,1)' },
      ]}
      layout="circular"
      {...chartSetting}
    />
  );
}
