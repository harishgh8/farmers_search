import React from "react";
import { useRef } from "react";

const FarmerSearchBar = (props) => {
  const inputEle = useRef("");
  const getSearchTerm = () => {
    props.searchKeyword(inputEle.current.value);
  };
  console.log(props);
  return (
    <>
      <select>
        {props.data.map((names) => {
          return <option key={names.farmer_name}> {names.state}</option>;
        })}
      </select>
      <input
        ref={inputEle}
        type="text"
        placeholder="Name, City"
        value={props.term}
        onChange={getSearchTerm}
      />
    </>
  );
};

export default FarmerSearchBar;
