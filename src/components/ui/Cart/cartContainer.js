import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "../../../features/cart/cartSlice";
import { openModal } from "../../../features/modal/modalSlice";
import CartItem from './cartItem';


const CartContainer = () => {

  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems, dispatch])

  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your shopping cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className='btn clear-btn' onClick={() => {
          // dispatch(clearCart());
          dispatch(openModal())
        }}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;