const incrementCount = (id) => {
  return {
    type: "INCREMENT_COUNT",
    payload: id,
  };
};

const decrementCount = (id) => {
  return {
    type: "DECREMENT_COUNT",
    payload: id,
  };
};

const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};

export { incrementCount, decrementCount, removeItem };
