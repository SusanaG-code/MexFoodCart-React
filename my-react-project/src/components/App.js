import "../stylesheets/App.css";
import Filter from "./Filter";
import Header from "./Header";
import DishList from "./DishList";
import data from "../services/dishes";

function App() {
  const handleFilterText = (inputValue) => {
    console.log("he llegado", inputValue);
  };

  return (
    <div className="App">
      <div className="main_card-list">
        <Header />
        <Filter handleFilterText={handleFilterText}></Filter>
        <DishList data={data}></DishList>
      </div>
    </div>
  );
}

export default App;
