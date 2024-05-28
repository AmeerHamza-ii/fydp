import React from "react";
import Bargraph from "../../graphs/overall revenue/Bargraph";
import RevenueLineGraph from "../../graphs/overall revenue/Linechart";
import RevenuePieChart from "../../graphs/overall revenue/Piechart";
import "../Graphcontainer.css";
const UniavirantComponent = () => {
  return (
    <div className="combinediv">
      <div className="first">
        {/* <Bargraph /> */}
        <RevenueLineGraph />
      </div>
      {/* <div className="second">
        <RevenuePieChart />
      </div> */}
    </div>
  );
};

export default UniavirantComponent;
