import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Multivariate from "./Multivariate";
import Univariate from "./Univariate";

export default function Selectnature() {
  const navigate = useNavigate(); // using useNavigate instead of useHistory
  const [Variate, setVariate] = useState(null);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setVariate(selectedValue);
    navigate(`/${selectedValue}`);
  };

  return (
    <div>
      <FormControl
        sx={{ m: 0, minWidth: 120 }}
        size="small"
        style={{
          backgroundColor: "white",
          marginRight: "30px",
          borderRadius: "4px",
          marginLeft: "6px",
          marginTop: "1px",
          padding: "0.5px",
          border: "1px solid white",
        }}
      >
        <InputLabel
          id="demo-select-small-label"
          style={{
            marginTop: "5px",
            color: "black",
            fontSize: "15px",
          }}
        >
          Nature
        </InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={Variate || ""}
          label="Nature"
          onChange={handleChange}
          style={{
            fontSize: "15px",
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"multivariate"}>Multivariate</MenuItem>
          <MenuItem value={"univariate"}>Univariate</MenuItem>
        </Select>
      </FormControl>
      {Variate === "multivariate" && <Multivariate />}
      {Variate === "univariate" && <Univariate />}
    </div>
  );
}
