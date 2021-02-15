import "../stylesheets/DishCard.css";

const DishCard = (props) => {
  const handleShop = (ev) => {
    const valueBtn = ev.target.value;
    props.handleShop(valueBtn);
  };
  return (
    <div>
      <div className="card">
        <img src={props.image} alt="Mexican Flavour" className="image" />

        <h5 className="card_title">{props.name}</h5>
        <div className="description-box">
          <p className="card_description">{props.description}</p>

          <p className="card_price">{props.price}€</p>
          <button className="card_btn" onClick={handleShop}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
DishCard.propTypes = {};
export default DishCard;
