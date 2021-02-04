import "../stylesheets/App.css";
import DishCard from "./DishCard";
import Header from "./Header";
import DishList from "./DishList";
import data from "../services/dishes";
function App() {
  return (
    <div className="App">
      <div className="main_card-list">
        <Header />

        <DishList data={data}></DishList>
      </div>
    </div>
  );
}

export default App;
