import React from "react";
import "./CheckoutProducts.css";
import StarRateIcon from "@material-ui/icons/StarRate";
import useStateValue from "./StateProvider";

function CheckoutProducts({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="chectoutProduct">
      <img className="chectoutProduct__image" src={image} alt="" />
      <div className="chectoutProduct__info">
        <p className="chectoutProduct__title">{title}</p>
        <p className="chectoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="chectoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p
                className="chectoutProduct__rank"
                key={`checkoutProduct-${index}`}
              >
                <StarRateIcon />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}> Remove from basket </button>
      </div>
    </div>
  );
}
export default CheckoutProducts;
