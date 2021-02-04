import "../stylesheets/App.css";
import DishCard from "./DishCard";
import Header from "./Header";
import DishList from "./DishList";
import data from "../services/dishes";
import Filter from "./Filter";
function App() {
  console.log(data);

  return (
    <div className="App">
      <div className="main_card-list">
        <Header />
        <Filter></Filter>

        <DishList data={data}></DishList>
      </div>
    </div>
  );
}

export default App;
