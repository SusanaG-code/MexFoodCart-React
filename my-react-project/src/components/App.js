import "../stylesheets/App.css";
import Filter from "./Filter";
import Header from "./Header";
import DishList from "./DishList";
import data from "../services/dishes";
import React, { useState } from "react";

function App() {
  const [dataFood] = useState(data);
  const [filterText, setFilterText] = useState("");
  const [valueSelect, setValueSelect] = useState("All");

  const handleFilterText = (filterText) => {
    setFilterText(filterText);
  };

  const comprar = (compra) => {
    console.log("hola");
  };

  const handleSelect = (valueSelect) => {
    setValueSelect(valueSelect);
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
      return valueSelect === "All" || eachDish.level === valueSelect;
    })
    .sort((dish1, dish2) => (dish1.name > dish2.name ? 1 : -1));
  return (
    <div className="App">
      <div className="main_card-list">
        <Header />
        <Filter
          handleFilterText={handleFilterText}
          handleSelect={handleSelect}
          filterText={filterText}
          valueSelect={valueSelect}
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
