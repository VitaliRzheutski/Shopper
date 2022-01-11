import axios from "axios";

//action type
const GET_CART = 'GET_CART';

//action creator
 const getCart = (cart) =>{
     return{
         type:GET_CART,
         cart
     }
 }

 //initial state
 const initialState = {}

 //thunk
 export const getCartThunk = () =>{
     return async dispatch =>{
         try{
            const {data} = await axios.get('/api/order')
            console.log('data from getCartThunk:',data)
            dispatch (getCart(data))
         }catch(error){
             console.log(error)
         }
     }
 }

 //reducer
 export default function cartReducer (state = initialState,action){
     switch(action.type){
         case GET_CART:
             return action.cart;
        default:
            return state
     }
 }