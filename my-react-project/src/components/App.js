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

  const handleFilterText = (filterText) => {
    setFilterText(filterText);
  };

  const comprar = (compra) => {
    console.log("hola");
  };

  const handleSelect = (filterSelect) => {
    setFilterSelect(filterSelect);
  };

  const handleCheckbox = (filterCheckbox) => {
    setFilterCheckbox(filterCheckbox);
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

  //Sort when the component is renderized.
  //   .sort((dish1, dish2) =>
  //   dish1.name.toLocaleLowerCase() > dish2.name.toLocaleLowerCase() ? 1 : -1
  // );

  return (
    <div className="App">
      <div className="main_card-list">
        <Header />
        <Filter
          handleFilterText={handleFilterText}
          handleSelect={handleSelect}
          handleCheckbox={handleCheckbox}
          filterText={filterText}
          filterSelect={filterSelect}
          filterCheckbox={filterCheckbox}
        ></Filter>
        <DishList data={filteredDishes} comprar={comprar}></DishList>
      </div>
    </div>
  );
}

export default App;
// const filteredDishes = dataFood.filter((eachDish) => {
//   if (filterText === "") {
//     return true;
//   } else {
//     if (
//       eachDish.name
//         .toLocaleLowerCase()
//         .includes(filterText.toLocaleLowerCase()) ||
//       eachDish.description
//         .toLocaleLowerCase()
//         .includes(filterText.toLocaleLowerCase()) ||
//       eachDish.ingredients.includes(filterText.toLocaleLowerCase())
//     ) {
//     } else if (eachDish.level === inputSelect) {
//       return true;
//     }
//   }
//   return false;
// });
