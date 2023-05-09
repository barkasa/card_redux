import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Cart.module.css";
// import productImage1 from "../../image/product1.png";
// import productImage2 from "../../image/product2.png";

const Cart = () => {
  const cartItems = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_COUNT", payload: id });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_COUNT", payload: id });
  };

  const handleAddItem = () => {
    const title = prompt("Введите название товара");
    if (title) {
      dispatch({ type: "ADD_ITEM", payload: title });
    }
  };

  const handleRemoveItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  return (
    <div className={styles.container}>
      {cartItems.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.title}>{item.title}</div>
          {/* //// */}
          {/* <img
            className={styles.productImage}
            src={item.id === 1 ? productImage1 : productImage2}
            alt="Product"
          /> */}
          {/*  */}
          <div className={styles.countContainer}>
            <button
              className={styles.countButton}
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
            <div className={styles.count}>{item.count}</div>
            <button
              className={styles.countButton}
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
          </div>
          {item.count === 0 && (
            <button
              className={styles.removeButton}
              onClick={() => handleRemoveItem(item.id)}
            >
              Удалить
            </button>
          )}
        </div>
      ))}
      <button className={styles.addButton} onClick={handleAddItem}>
        Добавить товар
      </button>
    </div>
  );
};
export default Cart;
