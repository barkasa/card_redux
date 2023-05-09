const initialState = [
  { id: 1, title: "Велосипед", count: 5 },
  { id: 2, title: "Самокат", count: 4 },
  { id: 3, title: "Гантели", count: 7 },
  { id: 4, title: "Ракетки", count: 1 },
];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, count: Math.min(item.count + 1, 25) }
          : item
      );
    case "DECREMENT_COUNT":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, count: Math.max(item.count - 1, 0) }
          : item
      );
    case "ADD_ITEM":
      const newItem = {
        id: state.length + 1,
        title: action.payload,
        count: 1,
      };
      return [...state, newItem];
    case "REMOVE_ITEM":
      return state.filter(
        (item) => item.id !== action.payload || item.count > 0
      );
    default:
      return state;
  }
};

export default cartReducer;
