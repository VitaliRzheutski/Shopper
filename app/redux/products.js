import axios from 'axios'

//action type
const GET_PRODUCTS = 'GET_PRODUCTS';

//ation creator
export const getProducts = (products) =>{
    return{
        type:GET_PRODUCTS,
        products
    }
}

export const fetchProductsThunk = () =>{
    //thunk
    return async(dispatch) =>{
        try{
            const {data} = await axios.get('/api/products');
            // console.log('data:',data)
            dispatch(getProducts(data))
        }catch(error){
            console.log(error)
        }
    }
}
const initialState = [];

//reducer
export default function productsReducer(state = initialState,action){
    switch(action.type){
        case GET_PRODUCTS:
            return action.products
    default:
        return state
    }
}