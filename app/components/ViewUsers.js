import React from "react";
import { connect } from "react-redux";
import { getAllUsersThunk } from "../redux/users";

class ViewUsers extends React.Component {
    componentDidMount(){
        this.props.loadAllUsers()
    }
    render(){
        console.log('props from viewUsers',this.props)
        const users = this.props.users;
        console.log('users:',users)
       return(
        //    <div>hey</div>
        <div className='allCards' >
        {users.map((user) => (
          <div className="singleCard" key={user.id}>
              <p>First name: {user.firstName}</p>
              <p>Last name: {user.lastName}</p>
              <p>Email: {user.email}</p>
           

          </div>
        ))}
      </div>
    ) 
    }
    
}
const mapState = (state) =>{
    return{
        users: state.users
    }
}
const mapDispatch = (dispatch) =>{
    return{
        loadAllUsers: ()=> dispatch(getAllUsersThunk())
    }
}
   
export default connect(mapState,mapDispatch)(ViewUsers)


