import React from "react";
import { connect } from "react-redux";
const HomePage = (props) => {
  console.log('props from HomePage:',props)
  return (
    <div  className="homePage">
       <main>
            <h1 id="welcome">Welcome to Online Store!!!</h1>

            <h1>Thank you for Sign Up!</h1>
            <h1>{props.user.email}</h1>
          </main>

    </div>
  );
};
const mapState = (state) =>{
  return{
    user:state.user
  }
}

export default connect(mapState,null) (HomePage);
