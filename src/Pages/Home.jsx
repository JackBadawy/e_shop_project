import { useContext, useEffect, useState } from "react";
import { db } from "../Config/firebase.js";
import { getDocs, collection } from "firebase/firestore";
import { ProductContext } from "../Context/ProductContext.jsx";
import ProductBox from "../Components/ProductBox.jsx";
import * as ProductsStyle from "../Products.scss";
import FeaturedCarousel from "../Components/FeaturedCarousel.jsx";
import NavBar from "../Components/NavBar.jsx";

const Home = () => {
  const productsCollectionRef = collection(db, "products");
  const { productData, setProductData } = useContext(ProductContext);

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setProductData(filteredData);
      } catch (err) {
        throw new Error(err);
      }
    };
    getProductList();
  }, []);

  console.log("product data:", productData);

  return (
    <>
      <div>
        <NavBar />

        <p className="home__featured">Featured</p>
        <div className="home__carousel-container">
          <FeaturedCarousel />
        </div>

        <div className="home__product-grid">
          {!productData
            ? "loading products..."
            : productData.map((product) => (
                <ProductBox {...product} key={product.productName} />
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
