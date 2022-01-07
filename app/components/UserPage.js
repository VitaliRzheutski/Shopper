import React from 'react'
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logOutThunk } from '../redux/user';

 const UserPage = (props) => {
    const {handleClick, user} = props
  
    if(!user.id){
      return <Redirect to='/login' />
    }
    return (
      <div className='h100 w100 flex column align-items-center justify-center'>
        <div className='flex'>
          <h1>Welcome back !!!{user.email}</h1>

        </div>
          <button className='' onClick={handleClick}>Logout</button>
        
      </div>
    )
  }


const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  const mapDispatchToProps = (dispatch,ownProps)=>{
    const history = ownProps.history;
    return{
      async handleClick(){
        try{
          await dispatch(logOutThunk());
          ownProps.history.push("/")
        }catch(error){
          console.log(error)
        }
      }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
  