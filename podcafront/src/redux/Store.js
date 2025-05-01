import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';  
import dashboardSlice from './reducers/dashboardSlice'; 

export const store = configureStore({
  reducer: {
    products: productReducer,  
    categories: dashboardSlice,  
  },
});
