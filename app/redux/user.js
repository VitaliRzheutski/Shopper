import axios from "axios";
import history from '../history'

//action type
const GET_USER = 'GET_USER';
const GET_SINGLE_USER = 'GET_SINGLE_USER';
const REMOVE_USER = 'REMOVE_USER';

const getUser = user => ({type: GET_SINGLE_USER, user})

//action creator
export const gotMe = (user) =>{
    return{
        type:GET_USER,
        user
    }
}
export const removeUser = () => ({type: REMOVE_USER})
const initialState = {
}

//thunk
export const me = () => async dispatch => {
    try {
      const res = await axios.get('/auth/me')
      dispatch(gotMe(res.data))
    } catch (err) {
      console.error(err)
    }
  }
export const getUserThunk = (userId) =>{
    return async(dispatch)=>{
        try{
            const {data} = await axios.get(`/api/users/${userId}`);
            dispatch(getUser(data))
        }catch(error){
            console.log(error)
        }
    }
}
export const loginThunk = (formData) =>{
    return  async(dispatch) =>{
    try{
      const { data } = await axios.put('/auth/login', formData);
      dispatch(gotMe(data));
      history.push('/home')
    } catch (error) {
      console.error(error);
    }
  }
}
export const logOutThunk = () =>{
  return async(dispatch)=>{
    try{
       await axios.delete('auth/logout');
      dispatch(removeUser())
      console.log('logoutThunk WORKED!')
      history.push('/')
    }catch(error){
      console.log(error)
    }
  }
}
export const singUpUserThunk = (user) =>{
  return async(dispatch)=>{
    try{
      const {data} = await axios.post('/auth/signup',user);
      dispatch(getUser(data));
      console.log('SIGNUP WORKED!')
      history.push('/home')
    }catch(error){
      console.log(error)
    }
  }
}
//reducer
export const reducerUser = (state = initialState,action)=>{
    switch(action.type){
        case GET_USER:
            return  action.user
            case GET_SINGLE_USER:
              return  action.user
            case REMOVE_USER:
              return initialState;
        default: return state
    }
}