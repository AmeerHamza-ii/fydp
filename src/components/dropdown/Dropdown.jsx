import React, { useState } from "react";
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import "./dropdown.css";
import { filedata } from "../../Data";
import { BarChart } from "@mui/x-charts/BarChart";
const chartSetting = {
  width: 450,
  height: 350,
};
const chartSetting1 = {
  width: 1000,
  height: 350,
};
const Dropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("communication");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter the data based on the selected category
  const selectedCategoryData = filedata.find(
    (item) => item.category === selectedCategory
  );

  return (
    <div className="outerdiv">
      <div className="innerdiv">
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="selectcategory"
        >
          {filedata.map((item) => (
            <option key={item.category} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      </div>
      <div className="charts">
        <div>
          <p>Monthly Data for {selectedCategory}:</p>
        </div>
        <BarChart
          dataset={selectedCategoryData.monthlyDataset}
          xAxis={[{ scaleType: "band", dataKey: "month", label: "Monthly" }]}
          yAxis={[
            { scaleType: "linear", dataKey: "revenue", label: "Revenue" },
          ]}
          series={[
            {
              dataKey: "revenue1",
              label: "last year Revenue",
              color: "rgba(75,192,192,1)",
            },
            {
              dataKey: "revenue2",
              label: "current year Revenue",
              color: "rgba(192,75,75,1)",
            },
          ]}
          layout="vertical" // Set layout to vertical for BarChart
          {...chartSetting}
        />
        <div>
          <p>Daily Data for {selectedCategory}:</p>
        </div>
        <BarChart
          dataset={selectedCategoryData.dailyData}
          xAxis={[{ scaleType: "band", dataKey: "day", label: "Daily" }]}
          yAxis={[
            { scaleType: "linear", dataKey: "revenue", label: "Revenue" },
          ]}
          series={[
            {
              dataKey: "revenue1",
              label: ".",
              color: "rgba(75,192,192,1)",
            },
            {
              dataKey: "revenue2",
              label: ".",
              color: "rgba(192,75,75,1)",
            },
          ]}
          layout="vertical" // Set layout to vertical for BarChart
          {...chartSetting1}
        />
      </div>
    </div>
  );
};

export default Dropdown;
