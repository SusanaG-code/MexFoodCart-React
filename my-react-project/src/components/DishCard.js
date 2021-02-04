import "../stylesheets/DishCard.css";

const DishCard = (props) => {
  return (
    <div>
      <div class="card">
        <img src={props.image} alt="Mexican Flavour" className="image" />

        <h5 class="card_title container">{props.name}</h5>
        <p class="card_description container">{props.description}</p>
        <div class="card_price-button container">
          <p class="card_price">{props.price}</p>
          <button class="card_button">Añadir al carro</button>
        </div>
      </div>
    </div>
  );
};
DishCard.propTypes = {};
export default DishCard;
