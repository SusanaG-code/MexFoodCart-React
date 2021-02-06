import "../stylesheets/App.css";
import Filter from "./Filter";
import Header from "./Header";
import DishList from "./DishList";
import data from "../services/dishes";
import React, { useState } from "react";

function App() {
  const [dataFood] = useState(data);
  const [filterText, setFilterText] = useState("");

  const handleFilterText = (filterText) => {
    setFilterText(filterText);
  };

  return (
    <div className="App">
      <div className="main_card-list">
        <Header />
        <Filter handleFilterText={handleFilterText}></Filter>
        <DishList data={dataFood}></DishList>
      </div>
    </div>
  );
}

export default App;
