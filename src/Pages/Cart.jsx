import { ProductContext } from "../Context/ProductContext";
import ProductBox from "../Components/ProductBox";
import { useContext } from "react";
import * as cartStyle from "../Cart.scss";
import NavBar from "../Components/NavBar";

const Cart = () => {
  const { cart, setCart } = useContext(ProductContext);

  let totalPrice = 0;

  const priceCalc = (price, quant) => {
    const quantPrice = price * quant;
    totalPrice += quantPrice;
    return quantPrice;
  };

  return (
    <>
      <div className="bck-clr">
        <NavBar />
        <h2 className="cart__heading">Shopping Cart</h2>
        <div className="cart__box__box">
          {!cart
            ? "loading cart..."
            : cart.map((product) => (
                <div key={product.id} className="cart__box">
                  <div className="cart__image__cont">
                    <img src={product.image} alt="" className="cart__image" />
                  </div>
                  <div className="cart__info__cont">
                    <p className="cart__product-name">{product.productName}</p>
                    <p className="cart__quantity">
                      Quantity:{product.quantity}
                    </p>
                    <p className="cart__price">
                      Price: ${priceCalc(product.value, product.quantity)}
                    </p>
                  </div>
                </div>
              ))}
        </div>
        <div className="cart__price-total">
          <p className="cart__price-total-para">Total: ${totalPrice}</p>
        </div>
      </div>
      <div className="bck-img"></div>
    </>
  );
};

export default Cart;
