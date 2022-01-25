import { combineReducers } from 'redux';
import cartReducer from './cart';
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import { reducerUser } from './user';
import usersReducer from './users';


const appReducer = combineReducers({
 products:productsReducer,
 product:singleProductReducer,
 user:reducerUser,
 cart:cartReducer,
 users:usersReducer,

})

export default appReducer
