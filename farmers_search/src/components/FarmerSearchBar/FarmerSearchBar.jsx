import React from "react";

const FarmerSearchBar = ({ data }) => {
  return (
    <>
      <select>
        {data.map((names) => {
          return <option key={names.farmer_name}> {names.state}</option>;
        })}
      </select>
      <label>
        <input type="checkbox" />
      </label>
    </>
  );
};

export default FarmerSearchBar;
