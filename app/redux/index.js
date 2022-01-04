import { combineReducers } from 'redux';
import productsReducer from './products';
import singleProductReducer from './singleProduct';
import { reducerUser } from './user';


const appReducer = combineReducers({
 products:productsReducer,
 product:singleProductReducer,
 user:reducerUser

})

export default appReducer
