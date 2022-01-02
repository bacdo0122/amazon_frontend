/* eslint-disable */
const initialState = {
  total: 0,
  products: null,
};
export const Products = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Add": {
      return { total: payload.total, products: payload.products };
    }

    default: {
      return state;
    }
  }
};
