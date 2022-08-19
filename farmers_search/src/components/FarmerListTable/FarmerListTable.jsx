import React from "react";

const FarmerListTable = ({ data }) => {
  const headers = [
    { key: "farmer_name", label: "Farmer Name" },
    { key: "city", label: "City" },
    { key: "state", label: "State" },
    { key: "cp_spend", label: "Crop Protection Spend" },
    { key: "seed_purchases", label: "Seed(Bags)" },
  ];

  return (
    <table>
      <thead>
        <tr>
          {headers.map((row) => {
            return <td key={row.key}>{row.label}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((farmerData) => {
          return (
            <tr key={farmerData.farmer_name}>
              <td> {farmerData.farmer_name}</td>
              <td> {farmerData.city}</td>
              <td> {farmerData.state}</td>
              <td> {farmerData.cp_spend}</td>
              <td> {farmerData.seed_purchases}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FarmerListTable;
