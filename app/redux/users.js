import axios from 'axios'

//action type
const GET_ALL_USERS = 'GET_ALL_USERS'

//initial state
const defaultUsers = []

//action creator
const getAllUsers = users => ({type: GET_ALL_USERS, users})

//thunc creator
export const getAllUsersThunk = () => async dispatch => {
  try {
    console.log('in thunk!')
    const {data} = await axios.get('/api/users');
    console.log('data from getAllUsersThunk: ',data)
    dispatch(getAllUsers(data))
  } catch (err) {
    console.error(err)
  }
}

//reducer
export default function usersReducer(state = defaultUsers, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return action.users
    default:
      return state
  }
}
