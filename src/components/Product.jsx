import React from "react";
import "./Product.css";
import useStateValue from "./StateProvider";
import StarRateIcon from "@material-ui/icons/StarRate";

function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    //Add item to bakset..
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p className="product__rank" key={`rating-${index}`}>
                <StarRateIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="img..." />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
export default Product;
