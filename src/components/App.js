import "../stylesheets/App.css";
import Filter from "./Filter";
import Header from "./Header";
import DishList from "./DishList";
import data from "../services/dishes";
import React, { useState } from "react";

function App() {
  const [dataFood] = useState(data);
  const [filterText, setFilterText] = useState("");
  const [filterSelect, setFilterSelect] = useState("All");
  const [filterCheckbox, setFilterCheckbox] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleFilterText = (filterText) => {
    setFilterText(filterText);
  };

  const handleSelect = (filterSelect) => {
    setFilterSelect(filterSelect);
  };

  const handleCheckbox = (filterCheckbox) => {
    setFilterCheckbox(filterCheckbox);
  };

  const handleShop = () => {
    setCounter(counter + 1);
  };

  const filteredDishes = dataFood
    .filter((eachDish) => {
      return (
        eachDish.name
          .toLocaleLowerCase()
          .includes(filterText.toLocaleLowerCase()) ||
        eachDish.description
          .toLocaleLowerCase()
          .includes(filterText.toLocaleLowerCase()) ||
        eachDish.ingredients.includes(filterText.toLocaleLowerCase())
      );
    })
    .filter((eachDish) => {
      return filterSelect === "All" || eachDish.level === filterSelect;
    });

  if (filterCheckbox) {
    filteredDishes.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }

  return (
    <div className="App">
      <div className="main_card-list">
        <Header counter={counter} />
        <Filter
          handleFilterText={handleFilterText}
          handleSelect={handleSelect}
          handleCheckbox={handleCheckbox}
          filterText={filterText}
          filterSelect={filterSelect}
          filterCheckbox={filterCheckbox}
        ></Filter>
        <DishList data={filteredDishes} handleShop={handleShop}></DishList>
      </div>
    </div>
  );
}

export default App;
