const initialState = {
  sum: 0,
  number: 0,
};
export const Sum = (state = initialState, { type, payload }) => {
  switch (type) {
    case "Total": {
      return { sum: payload.sum, number: payload.number };
    }
    default: {
      return state;
    }
  }
};
