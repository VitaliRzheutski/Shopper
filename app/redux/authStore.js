//action type
const GET_USER = 'GET_USER'

//action creator
export const gotMe = (user) =>({
    type: GET_USER,
    user
})

const initialState ={
    user:{}
}

//reducer
export default function authReducer(state = initialState,action){
    switch(action.type){
        case GET_USER:
            return{
                ...state,
                user:action.user
            }
            default: 
                return state
    }
}

