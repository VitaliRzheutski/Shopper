import axios from "axios";
//action type
const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

//action creator
export const getSingleProduct = (product) => {
  return {
    type: GET_SINGLE_PRODUCT,
    product,
  };
};
export const updateProduct = (product) => {
  return {
    type: UPDATE_PRODUCT,
    productName: product.productName,
    description: product.description,
    price: product.price,
    quantity: product.quantity,
  };
};

export const fetchSingleProduct = (id) => {
  //thunk
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/products/${id}/`);
      dispatch(getSingleProduct(data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const updateProductThunk = (
  id,
  productName,
  description,
  price,
  quantity
) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/products/${id}`,
        productName,
        description,
        price,
        quantity
      );
      dispatch(updateProduct(data));
      dispatch(fetchSingleProduct(id));
    } catch (error) {
      console.log(error);
    }
  };
};
const initialState = {};
//reducer
export default function singleProductReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLE_PRODUCT:
      return action.product;
    case UPDATE_PRODUCT:
      return {
        ...state,
        productName: action.name,
        description: action.description,
        price: action.price,
        quantity: action.quantity,
      };
    default:
      return state;
  }
}
