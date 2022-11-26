import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getCartItems = createAsyncThunk('cart/getCartItems',
  async (name, thunkAPI) => {
    const url = 'https://course-api.com/react-useReducer-cart-project';
    
    // fetch will not throw error for 404s use axios...

    // const payload = fetch(url) 
    //   .then((response) => response.json())
    //   .catch((error) => console.log(error));

    // try {
    //   const resp = await axios(url);
    //   // console.log(thunkAPI.getState())
    //   return resp.data;
    // } catch (error) {
    //   console.log(error)
    // }

    const resp = await axios.get(url)
      .then((res) => {
        // console.log(res)
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      }
    );

    return resp;
  }
);

export default getCartItems;