const DishCard = (props) => {
  return (
    <div>
      <div class="card">
        <img src="./1.jpg" alt="Siu Bao" class="card_image" />
        <h5 class="card_title container">Siu Bao</h5>
        <p class="card_description container">
          Panecillos rellenos de tofu y guisantes con sabor barbacoa.
        </p>
        <div class="card_price-button container">
          <p class="card_price">10€</p>
          <button class="card_button">Añadir al carro</button>
        </div>
      </div>
    </div>
  );
};
DishCard.propTypes = {};
export default DishCard;
