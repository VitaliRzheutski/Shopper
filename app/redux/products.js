import axios from 'axios'

//action type
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT'

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
export const deleteProduct = (id) =>{
    return{
        type:DELETE_PRODUCT,
        id
    }
}

export const fetchProductsThunk = () =>{
    //thunk
    return async(dispatch) =>{
        try{
            const {data} = await axios.get('/api/products');
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
export const deleteProductThunk = (id) =>{
    return async(dispatch)=>{
        try{
            await axios.delete(`/api/products/${id}`)
            dispatch(deleteProduct(id))
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
        case DELETE_PRODUCT:
            return state.filter((product)=>product.id !== action.id)
    default:
        return state
    }
}