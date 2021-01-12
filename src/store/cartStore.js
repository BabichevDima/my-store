const defaultStore = {
  goods: [{ id: 1, coutn: 2 }],
  paymentsMethods: ["Visa", "Master"],
};

export const cartStore = (store = defaultStore, { type, payload }) => {
  switch (type) {
    case "ADD_GOOD_IN_CART":
      return {
        ...store,
        goods: [...store.goods, payload],
      };
    case "REMOVE_GOOD_FROM_CART":
      return {
        ...store,
        goods: [...store.goods.filter((item) => item.id !== payload)],
      };
    default:
      return store;
  }
};
