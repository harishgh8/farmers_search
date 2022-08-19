import "./App.css";
import FarmerListTable from "../src/components/FarmerListTable";
import { useEffect, useState } from "react";
import FarmerSearchBar from "../src/components/FarmerSearchBar";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newList = data.filter((names) => {
        return Object.values(names)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newList);
    } else {
      setSearchResults(data);
    }
  };
  useEffect(() => {
    fetch("./farmers.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <FarmerSearchBar
        data={searchTerm.length < 1 ? data : searchResults}
        term={searchTerm}
        searchKeyword={searchHandler}
      />
      <FarmerListTable data={data} />
    </div>
  );
}

export default App;
