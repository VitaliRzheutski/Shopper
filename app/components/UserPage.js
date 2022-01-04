import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

 const UserPage = (props) => {
    console.log('props:',props)
    const {handleClick, user} = props
    console.log('user:',user)
  
    if(!user.id){
      return <Redirect to='/login' />
    }
    return (
      <div className='h100 w100 flex column align-items-center justify-center'>
        <div className='flex'>
          {/* <img src={user.imageUrl} className='rounded mr1' /> */}
          <h1>Welcome back !{user.email}</h1>
        </div>
        <div>
          <button className='btn bg-red white p1 rounded' onClick={handleClick}>Logout</button>
        </div>
      </div>
    )
  }

//   export default UserPage

const mapStateToProps = (state) => {
  console.log('state:',state)
    return {
      // your code here
      user: state.user
    }
  }
  
//   const mapDispatchToProps = (dispatch, ownProps) => {
    // Hey, check it out! Because we pass the connected UserPage to a Route
    // (we do this in client/index.js), it receives the "route props"
    // (match, location, and history) as its "own props".
    // const history = ownProps.history
  
    // return {
    //  async handleClick () {
    //     // your code here
    //     await dispatch(logOutThunk())
    //     ownProps.history.push('/');
    //   }
    // }
//   }
  
  export default connect(mapStateToProps, null)(UserPage)
  