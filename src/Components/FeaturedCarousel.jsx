import { useState, useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

const FeaturedCarousel = () => {
  const [currentImage, setCurrentimage] = useState(0);
  const { productData } = useContext(ProductContext);

  const slideStyles = productData
    ? { backgroundImage: `url(${productData[currentImage].image})` }
    : {};

  const goToPrevious = () => {
    const isFirstSlide = currentImage === 0;
    const newImage = isFirstSlide ? productData.length - 1 : currentImage - 1;
    setCurrentimage(newImage);
  };

  const goToNext = () => {
    const isLastSlide = currentImage === productData.length - 1;
    const newImage = isLastSlide ? 0 : currentImage + 1;
    setCurrentimage(newImage);
  };

  const goToSlide = (slideIndex) => {
    setCurrentimage(slideIndex);
  };

  return (
    <>
      <div className="featured__slider">
        <div className="featured__left-arrow" onClick={goToPrevious}>
          <FontAwesomeIcon icon={faCaretLeft} />
        </div>
        <div className="featured__image-slide" style={slideStyles}></div>
        <div className="featured__right-arrow" onClick={goToNext}>
          <FontAwesomeIcon icon={faCaretRight} />
        </div>
        <div className="featured__dot-container">
          {productData &&
            productData.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="featured__dot"
                onClick={() => goToSlide(slideIndex)}
              >
                &#9679;
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedCarousel;
