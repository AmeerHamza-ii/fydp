import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Dropdowna({ title, value, handleChange, menuList }) {
  return (
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
        {title}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label={title}
        onChange={handleChange}
        style={{
          fontSize: "15px",
          // paddingRight: "3px",
        }}
      >
        <MenuItem value="">
          <em>none</em>
        </MenuItem>
        {menuList?.map((item) => (
          <MenuItem value={item.id}>{item.title}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
