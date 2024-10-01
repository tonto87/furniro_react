import React, { useMemo } from "react";
import { useCart } from "../../context/CartContext";
import { CartModalStyle } from "./styles/cartModalStyle";
import getImagePath from "../../utils/getImgPath";

const CartModal = ({ onClose }) => {
  const { cart, dispatch } = useCart();

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const handleIncrement = (id) => {
    dispatch({ type: "ADD_TO_CART", product: { id } });
  };

  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_COUNT", id });
  };

  const totalAmount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.price * item.count, 0);
  }, [cart]);

  return (
    <CartModalStyle onClick={onClose}>
      <div className="cartModal__body" onClick={(e) => e.stopPropagation()}>
        <header className="cartModal__head">
          <h2>Your Cart</h2>
          <button onClick={onClose} className="cartModal__close-button">
            Close
          </button>
        </header>
        {cart.length === 0 ? (
          <div>
            <p>No items in cart</p>
            <p>Continue shopping to add items to your cart!</p>
          </div>
        ) : (
          <ul className="cartModal__products">
            {cart.map((item) => (
              <li key={item.id} className="cartModal__product">
                <img
                  src={getImagePath(item.img)}
                  alt={item.name}
                  className="cartModal__product-image"
                />
                <span className="cartModal__product-name">
                  {item.name} (x{item.count})
                </span>{" "}
                - ${item.price * item.count}
                <div>
                  <button onClick={() => handleIncrement(item.id)}>+</button>
                  <button
                    onClick={() => handleDecrement(item.id)}
                    disabled={item.count <= 1}
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="cartModal__remove-button"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="cartModal__footer">
          <div className="cartModal__footer-subtotal">
            <h1 className="cartModal__footer-subtotal-price">
              <p>Total: ${totalAmount.toFixed(2)}</p>
            </h1>
          </div>
          <div className="cartModal__footer-line"></div>
          <div className="cartModal__footer-buttons">
            <button className="cartModal__footer-buttons-cart">Cart</button>
            <button className="cartModal__footer-buttons-checkout">
              Checkout
            </button>
            <button className="cartModal__footer-buttons-comparsion">
              Comparsion
            </button>
          </div>
        </div>
      </div>
    </CartModalStyle>
  );
};

export default CartModal;
