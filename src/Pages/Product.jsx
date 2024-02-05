import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as firebase from "../Config/firebase";
import NavBar from "../Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
          setProduct(productData.data());
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    getProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  console.log(product);
  return (
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

        <button className="product__add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
