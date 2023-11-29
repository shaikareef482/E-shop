import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isLoading:true,
};

export const orderReducer = createReducer(initialState,{
    getAllOrdersUserRequest:(state)=>{
        state.isLoading = true;
    },
    getAllOrdersUserSuccess:(state,action)=>{
        state.isLoading = false;
        state.orders = action.payload;
    },
    getAllOrdersUserFailed:(state,action)=>{
        state.isLoading=false;
        state.error= action.payload;
    },
    getAllOrdersShopRequest: (state) => {
        state.isLoading = true;
      },
      getAllOrdersShopSuccess: (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      },
      getAllOrdersShopFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    
      clearErrors: (state) => {
        state.error = null;
      },
})