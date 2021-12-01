import axios from 'axios'

//action type
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT'

//ation creator
export const getProducts = (products) =>{
    return{
        type:GET_PRODUCTS,
        products
    }
}
export const addProduct = (product) =>{
    return{
        type:ADD_PRODUCT,
        product
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
export const addProductThunk = (product) =>{
    //thunk
    return async(dispatch) =>{
        try{
            const {data} = await axios.post("/api/products",product)
            dispatch(addProduct(data))
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
        case ADD_PRODUCT:
            return [...state,action.product]
    default:
        return state
    }
}