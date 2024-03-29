import { useEffect, useState } from "react";
import { db } from "../Config/firebase.js";
import { doc, updateDoc } from "firebase/firestore";
import * as productStyles from "../Products.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { toast } from "react-toastify";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../Context/ProductContext.jsx";

const ProductBox = (props) => {
  const [isFavourited, setIsFavourited] = useState(props.favourited);
  const { cart, setCart } = useContext(ProductContext);

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

  const handleAddToCart = (event, product) => {
    event.preventDefault();
    const toastProductName = product.productName.substring(0, 15);
    toast(`Added to cart ${toastProductName}...`);
    try {
      const newCart = [...cart];
      const existingProductIndex = newCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {
        newCart[existingProductIndex].quantity += 1;
      } else {
        newCart.push({ ...product, quantity: 1 });
      }

      setCart(newCart);
    } catch (error) {
      console.error("Error adding product to cart: ", error);
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
        <div className="home__product-box__bottom-wrapper">
          <h5>{props.productName ? props.productName : "No product name"}</h5>
          <p>${props.value ? props.value : "no price available"}</p>

          <button
            className="home__product-box__add-to-cart"
            onClick={(event) => handleAddToCart(event, props)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
