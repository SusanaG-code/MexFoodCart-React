import DishCard from "./DishCard";

const DishList = (props) => {
  console.log(props.data);
  const dishList = props.data.map((eachDish) => (
    <DishCard
      name={eachDish.name}
      description={eachDish.description}
      price={eachDish.price}
      id={eachDish.id}
      key={eachDish.id}
    />
  ));

  return (
    <div>
      <ul>{dishList}</ul>
    </div>
  );
};

DishList.propTypes = {};
export default DishList;
