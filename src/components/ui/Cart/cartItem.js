import React from "react";
import { ChevronDown, ChevronUp } from "../Icons/icons";
import { removeItem, increaseCount, decreaseCount } from "../../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, title, price, img, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* remove button */}
        <button className='remove-btn' onClick={() => {
          dispatch(removeItem({ id }));
        }}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn' onClick={() => {
          dispatch(increaseCount({ id }));
        }}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn' onClick={() => {
          if (amount === 0) {
            dispatch(removeItem({ id }));
            return;
          }
          dispatch(decreaseCount({ id }));
        }}>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem;