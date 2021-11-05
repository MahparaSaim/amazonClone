import React from "react";
import useStateValue from "./StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/CurrencyConverter/2020/AMZ_Associates_ACC_Banner_Evergreen_1500x600_v2._CB415565312_.jpg"
          alt="img...."
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              Your have no item in your basket.To buy one or more item, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all of the checkout products */}
            {basket?.map((item, index) => (
              <CheckoutProducts
                key={`checkout${index}`}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;