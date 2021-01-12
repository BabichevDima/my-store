const defaultStore = {
  goods: [{ id: 1, name: "iPhone", prise: 1200 }],
};

export const goodsStore = (store = defaultStore, action) => {
  switch (action.type) {
    default:
      return store;
  }
};
