import axios from 'axios';
//action type
const GET_SINGLE_PRODUCT = 'GET_SINGLE_PRODUCT';

//action creator
export const getSingleProduct = (product) =>{
    return{
        type:GET_SINGLE_PRODUCT,
        product
    }
}

export const fetchSingleProduct = (id) =>{
    //thunk
    return async(dispatch) =>{
        try{
            const {data} = await axios.get(`/api/products/${id}/`)
            // console.log('data from fetchSinglecapmus',data)
            dispatch(getSingleProduct(data))
        }catch(error){
            console.log(error)
        }
    }
}
const initialState = {};
//reducer
export default function singleProductReducer(state = initialState,action){
    switch(action.type){
        case GET_SINGLE_PRODUCT:
            return action.product
        default:
        return state
    }
}