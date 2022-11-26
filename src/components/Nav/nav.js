import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../../assets/icons";

const Navigation = () => {

  const { amount } = useSelector((state) => state.cart);

  return (
    <nav className="nav">
      <h3>cell phone shop</h3>
      <div className="nav-container">
        <CartIcon />
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;