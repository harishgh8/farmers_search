import React from "react";
import { StyledSearchBar } from "./style";

const FarmerSearchBar = (props) => {
  const handleChange = (e) => {
    return props.callBack(e);
  };

  return (
    <>
      <select>
        {props.data.map((names) => {
          return <option key={names.farmer_name}> {names.state}</option>;
        })}
      </select>
      <StyledSearchBar
        type="text"
        placeholder="Name, City"
        onChange={handleChange}
      />
      <label>
        <input type="checkbox" />
      </label>
    </>
  );
};

export default FarmerSearchBar;
