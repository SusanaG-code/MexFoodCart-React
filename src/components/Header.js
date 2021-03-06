import "../stylesheets/Header.css";
import skull from "../images/skull.png";

import cart from "../images/shop.png";

const Header = (props) => {
  return (
    <div className="header">
      <div className="menu">
        <img src={skull} alt="cart" className="hat"></img>
      </div>
      <h1 className="title">Mexican Food Cart</h1>
      <div>
        <div className="logoCart">
          <img src={cart} alt="cart" className="cartImg"></img>
        </div>
        <p className="counter">{props.counter}</p>
      </div>
    </div>
  );
};
Header.propTypes = {};
export default Header;
