import React from "react";
import { connect } from "react-redux";
import { getCartThunk } from "../redux/cart";
import { getAllUsersThunk } from "../redux/users";

class ViewUsers extends React.Component {
    componentDidMount(){
        this.props.loadAllUsers()
    }
    render(){
        console.log('props from viewUsers',this.props)
        const users = this.props.users;
        // console.log('users:',users)
       return(
        <div className='' >
            <p>List of users:</p>
           <ol>
        {users.map((user) => (
          <div className="" key={user.id}>
              <li>
                  {user.firstName} {user.lastName}
                    <p>{user.email}</p>
              </li>

          </div>
        ))}
        </ol>
        <p>Total users: {users.length}</p>
      </div>
    ) 
    }
    
}
const mapState = (state) =>{
    return{
        users: state.users,
    }
}
const mapDispatch = (dispatch) =>{
    return{
        loadAllUsers: ()=> dispatch(getAllUsersThunk()),
    }
}
   
export default connect(mapState,mapDispatch)(ViewUsers)


