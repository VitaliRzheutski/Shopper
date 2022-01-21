import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunk } from "../redux/user";

class Navbar extends React.Component {

  render() {
    // console.log('this.props from NavBar:', this.props)
    return (
      <nav>
        <div id="navbar" className="row1">
          {this.props.isLogggedIn ? (
            <div id="navbar">
              {/* The navbar will show these links after you log in */}
              <Link to="/">
                <p className="section-title">Home page</p>
              </Link>
              <Link to="/products">
                <p className="section-title">View all products</p>
              </Link>
              <Link to="/cart">
                <p className="section-title">Cart</p>
              </Link>
              <Link to="/users">
                <p className="section-title">ViewUsers</p>
              </Link>

              <a href="/" onClick={this.props.handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div id="navbar">
              {/* The navbar will show these links before you log in */}


              <Link to="/login">
                <p className="section-title">Login</p>
              </Link>

              <Link to="/signup">
                <p className="section-title">Signup</p>
              </Link>

              <Link to="/cart">
                <p className="section-title">Cart</p>
              </Link>


            </div>

          )}

        </div>
      </nav>

    );
  }

};
const mapStateToProps = (state) => {
  return {
    isLogggedIn: !!state.user.id
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logOutThunk())
    }
  }
}
// const mapDispatchToProps = (dispatch,ownProps)=>{
//   const history = ownProps.history;
//   return{
//     async handleClick(){
//       try{
//         await dispatch(logOutThunk());
//         ownProps.history.push("/")
//       }catch(error){
//         console.log(error)
//       }
//     }
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
