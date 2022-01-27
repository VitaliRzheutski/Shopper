import axios from "axios";
import { getProducts } from "./products";


//action type
const GET_CART = 'GET_CART';
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
const DECREASE_PRODUCT = 'DECREASE_PRODUCT'
const INCREMENT_COUNT = 'INCREMENT_COUNT';



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
        type: REMOVE_PRODUCT_FROM_CART,
        id
    }
}
const decreaseProduct = order => {
    return {
      type: DECREASE_PRODUCT,
      order
    }
  }
  const incrementCount = cart =>{
    return{
        type:INCREMENT_COUNT,
        cart
    }
}
//initial state
const initialState = {};

//thunk
export const getCartThunk = () => {
    return async dispatch => {
        try {
            const { data } = await axios.get('/api/order')
            dispatch(getCart(data))
        } catch (error) {
            console.log(error)
        }
    }
}


export const addProductThunk = (productId, orderId, productPrice) => {
    return async dispatch => {
        try {
            const { data } = await axios.post('/api/order',
                { productId, orderId, productPrice }
            )
            dispatch(addProduct(data))
        } catch (error) {
            console.error(error)
        }
    }
}
export const deleteProductFromCartThunk = (productId) => {
    return async dispatch => {
        try {
            console.log('!!!')
            await axios.delete(`/api/order/delete/${productId}`);

            const { data } = await axios.get('/api/order');
            dispatch(deleteProduct(productId));
            dispatch(getCart(data))
        } catch (error) {
            console.log(error)
        }
    }
}
export const decreaseProductThunk = productId => {
    return async dispatch => {
      try {
        await axios.put(`/api/order/decrease/${productId}`)

        const {data} = await axios.get('/api/order')
        dispatch(decreaseProduct(productId))
        dispatch(getCart(data))
      } catch (error) {
        console.error(error)
      }
    }
  }
  export const incrementCountThunk = (productId)=>{
    return async dispatch =>{
        try{
            await axios.put(`/api/order/increase/${productId}`)

            const {data} = await axios.get('/api/order');
            dispatch(incrementCount(productId))
            dispatch(getCart(data))
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
            return { ...state, order: action.updatedOrder };
            // TODO: fix remove product from cart  
        case REMOVE_PRODUCT_FROM_CART:
            return state.filter((product) => product.id !== action.id);
            case DECREASE_PRODUCT:
                return [...state].filter(product => product.id !== action.id)
            case INCREMENT_COUNT:
                // ????
                return action.cart
        default:
            return state
    }
}