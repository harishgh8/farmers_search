import "./App.css";
import FarmerListTable from "../src/components/FarmerListTable";
import { useEffect, useState } from "react";
import FarmerSearchBar from "../src/components/FarmerSearchBar";

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const searchTable = (rows) => {
    return rows.filter(
      (row) =>
        row.farmer_name.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1 ||
        row.city.toLowerCase().indexOf(q.toLocaleLowerCase()) > -1
    );
  };
  const handleChange = (e) => {
    setQ(e.target.value);
  };

  useEffect(() => {
    fetch("./farmers.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <FarmerSearchBar callBack={handleChange} data={data} />
      </div>
      <div>
        <FarmerListTable data={searchTable(data)} />
      </div>
    </>
  );
}

export default App;
