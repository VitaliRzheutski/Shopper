import { combineReducers } from 'redux';
import cartReducer from './cart';
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import { reducerUser } from './user';


const appReducer = combineReducers({
 products:productsReducer,
 product:singleProductReducer,
 user:reducerUser,
 cart:cartReducer

})

export default appReducer
