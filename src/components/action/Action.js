export const incrementCount = (id) => {
  return {
    type: "INCREMENT_COUNT",
    payload: id,
  };
};

export const decrementCount = (id) => {
  return {
    type: "DECREMENT_COUNT",
    payload: id,
  };
};

export const addItem = (title) => {
  return {
    type: "ADD_ITEM",
    payload: title,
  };
};

export const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};
