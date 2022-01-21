import axios from "axios";

//action type
const GET_CART = 'GET_CART';
const ADD_PRODUCT = 'ADD_PRODUCT';

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

//initial state
const initialState ={};

//thunk
export const getCartThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/order')
            console.log('data from getCartThunk:', data)
            dispatch(getCart(data))
        } catch (error) {
            console.log(error)
        }
    }
}
// export const addProductThunk = (product) => {
//     return async dispatch => {
//         try {
//             const { data } = await axios.post('/api/order', product)
//             console.log('data from addProductThunk :',data)
//             dispatch(addProduct(data))
//         } catch (error) {
//             console.log(error)
//         }
//     }
// }

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

//reducer
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CART:
            return action.cart;
        case ADD_PRODUCT:
            return {...state, order:action.updatedOrder}
        default:
            return state
    }
}