import DishCard from "./DishCard";
import "../stylesheets/DishList.css";

const DishList = (props) => {
  const dishList = props.data.map((eachDish) => (
    <DishCard
      name={eachDish.name}
      description={eachDish.description}
      price={eachDish.price}
      id={eachDish.id}
      key={eachDish.id}
      image={eachDish.image}
      comprar={props.comprar}
    />
  ));

  return (
    <div>
      <ul className="dish-List">{dishList}</ul>
    </div>
  );
};

DishList.propTypes = {};
export default DishList;
