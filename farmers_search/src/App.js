import "./App.css";
import FarmerListTable from "../src/components/FarmerListTable";
import { useEffect, useState } from "react";
import FarmerSearchBar from "../src/components/FarmerSearchBar";

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");

  useEffect(() => {
    fetch("./farmers.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.log(error));
  }, []);

  const searchTable = (rows) => {
    return rows.filter(
      (row) =>
        row.farmer_name.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1 ||
        row.city.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name, City"
        onChange={(e) => setQ(e.target.value)}
      />
      <FarmerSearchBar data={data} />
      <FarmerListTable data={searchTable(data)} />
    </div>
  );
}

export default App;
