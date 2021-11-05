export const initialState = {
  basket: [
    {
      id: "1234",
      title:
        "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51qglq04wML._SX320_BO1,204,203,200_.jpg",
    },
    {
      id: "12344545454",
      title:
        "HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p)",
      price: 11.96,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51qglq04wML._SX320_BO1,204,203,200_.jpg",
    },
  ],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //Logic for removing basket

      //we cloned the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it....
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
};
export default reducer;
