import { combineReducers } from 'redux';
import productsReducer from './products';
import singleProductReducer from './singleProduct';


const appReducer = combineReducers({
 products:productsReducer,
 product:singleProductReducer
})

export default appReducer
