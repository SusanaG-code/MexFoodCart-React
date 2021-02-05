import "../stylesheets/Header.css";
import log from "../images/logoCart.png";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Mexican Food Cart</h1>
      <img src={log} alt="cart" className="logoCart"></img>
    </div>
  );
};
Header.propTypes = {};
export default Header;
