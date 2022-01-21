import axios from "axios";

//action type
const GET_CART = 'GET_CART';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT'

//action creator
const getCart = (cart) => {
    return {
        type: GET_CART,
        cart
    }
}
const addProduct = (updatedOrder) => {
    return {
        type: ADD_PRODUCT,
        updatedOrder
    }
}

const deleteProduct = id => {
    return {
      type: DELETE_PRODUCT,
      id
    }
  }

//initial state
const initialState ={};

//thunk
export const getCartThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/order')
            // console.log('data from getCartThunk:', data)
            dispatch(getCart(data))
        } catch (error) {
            console.log(error)
        }
    }
}


export const addProductThunk = (productId, orderId, productPrice) => {
  return async dispatch => {
    try {
      const{data} = await axios.post('/api/order', 
          {productId, orderId, productPrice}
        )
      console.log('data from addProductThunk :',data)
      dispatch(addProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}
export const deleteProductFromCartThunk = (productId) =>{
    return async dispatch =>{
        console.log('productId:',productId)
        try{
            console.log('!!!')
            await axios.delete(`/api/order/delete/${productId}`);
            
            const {data} = await axios.get('/api/order');
            dispatch(deleteProduct(productId));
            dispatch(getCart(data))
            console.log('Product DELETED!')
        }catch(error){
            console.log(error)
        }
    }
}

//reducer
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return action.cart;
        case ADD_PRODUCT:
            return {...state, order:action.updatedOrder};
        case DELETE_PRODUCT:
            return  state.filter((product)=>product.id !== action.id)
        default:
            return state
    }
}