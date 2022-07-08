import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS } from "../Constants/ProductConstants";

// SINGLE PRODUCT 
export const productDetailsReducer = (state = { products:{reviewn: []} }, action) => {
  switch(action.type){
    case PRODUCT_DETAILS_REQUEST:
      return {loading: true, products:[]};
    case PRODUCT_DETAILS_SUCCESS:
      return {loading: false, products: action.payload};
    case PRODUCT_DETAILS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};