import { useState } from "react";
import { db } from "../Config/firebase.js";
import { doc, updateDoc } from "firebase/firestore";
import * as productStyles from "../Products.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
//check out phosper icons
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../Context/ProductContext.jsx";

const ProductBox = (props) => {
  const [isFavourited, setIsFavourited] = useState(props.favourited);
  const addToCart = useContext(ProductContext);

  const handleFavouriteClick = async (event) => {
    event.preventDefault();
    const productDocRef = doc(db, "products", props.id);

    try {
      await updateDoc(productDocRef, {
        favourited: !isFavourited,
      });
      setIsFavourited(!isFavourited);
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <Link to={`/product/${props.id}`} className="home__product-box__link">
      <div className="home__product-box">
        <div
          id="favouriteBtn"
          className={`home__product-box__favouriteBtn${
            isFavourited ? "--fav" : "--notFav"
          }`}
          onClick={handleFavouriteClick}
        >
          <FontAwesomeIcon icon={faStar} className="" />
        </div>
        <img src={props.image} alt="" className="home__product-box__image" />
        <h5>{props.productName ? props.productName : "No product name"}</h5>
        <p>${props.value ? props.value : "no price available"}</p>
        {/* <p>
          Description:{" "}
          {props.description ? props.description : "no description available"}
        </p> */}
        <button className="home__product-box__add-to-cart">Add to Cart</button>
      </div>
    </Link>
  );
};

export default ProductBox;
