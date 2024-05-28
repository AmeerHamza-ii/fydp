import "./Graphcontainer.css";
import React from "react";
import Totalcard from "../graphs/overall revenue/Totalcard";
import RevenueLineGraph from "../graphs/overall revenue/Linechart";
import Dropdowna from "../dropdown/dropdowna";
import MulitVariantComponenet from "./GraphComponents/MulitVariantComponenet";
const Graphcontainer = () => {
  const [variant, setVariant] = React.useState("");
  const [category, setCategory] = React.useState(null);

  const handleVariantChange = (event) => {
    setVariant(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const categoryMenu = [
    {
      id: 1,
      title: "Category1",
    },
    {
      id: 2,
      title: "Category1",
    },
  ];

  const varaintMenu = [
    {
      id: 1,
      title: "Multi Variant",
    },
    {
      id: 2,
      title: "Uni Variant",
    },
  ];

  const multiYearData = [
    67821799, 54098177, 67324381, 1103747, 490094, 98281533, 94584632,
    150010468, 142577951, 144438318, 6391573, 232410,
  ];
  const multiMonthData = [
    67821799.0, 54098177.0, 67324381.0, 1103747.0, 490094.0, 98281533.0,
    94584632.0, 150010468.0, 142577951.0, 144438318.0, 6391573.0, 232410.0,
    415297716.0, 847976201.0, 3081701120.0, 1303649760.0, 1007077450.0,
    9227565.0, 992240.0, 517519089.0, 2187124140.0, 402007910.0, 1562567.0,
    6315347.0, 7519227.0, 749438.0, 229554022.0, 700409578.0, 231988686.0,
    452492036.0, 678051788.0,
  ];
  const multiWeekData = [
    67821799.0, 54098177.0, 67324381.0, 1103747.0, 490094.0, 98281533.0,
    94584632.0,
  ];

  const uniYearData = [
    67821799, 54098177, 67324381, 1103747, 490094, 98281533, 94584632,
    150010468, 142577951, 144438318, 6391573, 232410,
  ];
  const uniMonthData = [
    67821799.0, 54098177.0, 67324381.0, 1103747.0, 490094.0, 98281533.0,
    94584632.0, 150010468.0, 142577951.0, 144438318.0, 6391573.0, 232410.0,
    415297716.0, 847976201.0, 3081701120.0, 1303649760.0, 1007077450.0,
    9227565.0, 992240.0, 517519089.0, 2187124140.0, 402007910.0, 1562567.0,
    6315347.0, 7519227.0, 749438.0, 229554022.0, 700409578.0, 231988686.0,
    452492036.0, 678051788.0,
  ];
  const uniWeekData = [
    67821799.0, 54098177.0, 67324381.0, 1103747.0, 490094.0, 98281533.0,
    94584632.0,
  ];

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

  const categoryYearData = [
    67821799, 54098177, 67324381, 1103747, 490094, 98281533, 94584632,
    150010468, 142577951, 144438318, 6391573, 232410,
  ];
  const yearlyDataCategory = categoryYearData.map((value, index) => ({
    label: months[index], // Use month name as label
    value: value,
  }));
  return (
    <div className="maindivvv">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="totalcard">
          <Totalcard label="Total Revenue" value="$100" />
        </div>
        <div style={{ display: "flex", gap: "4px" }}>
          <div className="drop1">
            <Dropdowna
              title="Variant"
              menuList={varaintMenu}
              value={variant}
              handleChange={handleVariantChange}
            />
          </div>
          <div className="drop2">
            <Dropdowna
              title="Category"
              menuList={categoryMenu}
              value={category}
              handleChange={handleCategoryChange}
            />
          </div>
        </div>
      </div>
      <div>
        {category ? (
          <div>
            <RevenueLineGraph dataSet={yearlyDataCategory} />
          </div>
        ) : (
          <div>
            {variant === 1 && (
              <MulitVariantComponenet
                year={multiYearData}
                month={multiMonthData}
                week={multiWeekData}
              />
            )}
            {variant === 2 && (
              <MulitVariantComponenet
                year={uniYearData}
                month={uniMonthData}
                week={uniWeekData}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Graphcontainer;
