import React, { useEffect } from "react";
import Modal from "./components/ui/Modal/model";
import Navigation from "./components/ui/Nav/nav";
import CartContainer from "./components/ui/Cart/cartContainer";
import { useDispatch, useSelector } from "react-redux";
import getCartItems from "./data/fetch";

function App() {

  const { isLoading } = useSelector(state => state.cart)
  const { isOpen } = useSelector(state => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    // Make it seems like is loading slower than it would..
    setTimeout(() => {
      dispatch(getCartItems());
    }, 3000);

  }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navigation />
      <CartContainer />
    </main>
  );
}

export default App;
