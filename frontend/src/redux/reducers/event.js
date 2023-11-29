import {createReducer} from "@reduxjs/toolkit";

const initialState = {
    isLoading:true,
}


export const eventReducer = createReducer(initialState,{
    eventCreateRequset:(state)=>{
        state.isLoading = true;

    },
    eventCreateSuccess:(state,action)=>{
        state.isLoading = false;
        state.events = action.payload;
        state.success= true;
    },
    eventCreateFail:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
        state.success = false;
    },

    getAlleventShopRequest:(state)=>{
        state.isLoading= true;
    },
    getAlleventShopSuccess:(state,action)=>{
        state.isLoading= false;
        state.events= action.payload;
        
    },
    getAlleventShopFail:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
    },
     deleteeventRequset:(state)=>{
        state.isLoading = true;

     },
     deleteeventSuccess:(state,action)=>{
        state.isLoading= false;
        state.message = action.payload;

     },
     deleteeventFailed:(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
     },
     getAlleventsRequest: (state) => {
        state.isLoading = true;
      },
      getAlleventsSuccess: (state, action) => {
        state.isLoading = false;
        state.allEvents = action.payload;
      },
      getAlleventsFailed: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
      clearErrors:(state)=>{
        state.error = null;
      }
})