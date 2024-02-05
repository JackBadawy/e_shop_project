import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <p className="home__heading-sub home__heading-ante">
        <span className="home__heading-ante-span">
          Low Low Prices!!!&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Only at JackMart! &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Limited time only!
        </span>
      </p>
      <div className="nav__cont">
        <Link to={"/"} className="nav__link">
          <h1 className="home__heading">JackMart</h1>
        </Link>
        <Link to={"/Cart"} className="nav__cart">
          <FontAwesomeIcon icon={faCartShopping} className="nav__cart-icon" />
        </Link>
      </div>
      <p className="home__heading-sub home__para-height">
        &nbsp; &nbsp; &nbsp; &nbsp;::Home of the finest goods at the lowest
        prices::
      </p>
    </div>
  );
};

export default NavBar;
