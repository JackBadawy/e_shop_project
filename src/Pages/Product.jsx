import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import * as firebase from "../Config/firebase";
import NavBar from "../Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../Context/ProductContext";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { cart, setCart } = useContext(ProductContext);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        if (!id) {
          console.log("no id");
          return;
        }

        const productDocRef = firebase.doc(firebase.db, "products", id);
        const productData = await firebase.getDoc(productDocRef);

        if (productData && productData.exists()) {
          const data = productData.data();
          const productWithId = { ...data, id: productData.id };
          setProduct(productWithId);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProductDetails();
  }, [id]);

  const handleAddToCart = (event, product) => {
    event.preventDefault();
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

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="bck-clr">
        <NavBar />

        <div className="product__info-container">
          <img src={product.image} alt="" className="product__image" />

          <h2 className="product__title">{product.productName}</h2>
          {product.favourited && (
            <span className="product__fav-cont">
              <FontAwesomeIcon
                icon={faStar}
                className="home__product-box__favouriteBtn--fav"
              />{" "}
              <p>You've Favourited this item</p>
            </span>
          )}
          <p className="product__price">Price: ${product.value}</p>
          <p>Description: {product.description}</p>

          {product.variants && (
            <select className="product__variant-select">
              {product.variants.map((variant) => (
                <option key={variant} value={variant}>
                  {variant}
                </option>
              ))}
            </select>
          )}

          <button
            className="product__add-to-cart"
            onClick={(event) => handleAddToCart(event, product)}
          >
            Add to cart
          </button>
        </div>
      </div>
      <div className="bck-img"></div>
    </>
  );
};

export default Product;
