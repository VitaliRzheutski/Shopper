import axios from "axios";
import history from '../history'

//action type
const GET_USER = 'GET_USER';
const GET_SINGLE_USER = 'GET_SINGLE_USER'

const getUser = user => ({type: GET_SINGLE_USER, user})

//action creator
export const gotMe = (user) =>{
    return{
        type:GET_USER,
        user
    }
}
const initialState = {
}
//thunk
export const me = () => async dispatch => {
    try {
      const res = await axios.get('/auth/me')
      console.log('USER from AUTH thunk:',res.data)
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
    //   console.log('data:',data)
      dispatch(gotMe(data));
      history.push('/home')
    } catch (error) {
      console.error(error);
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
        default: return state
    }
}