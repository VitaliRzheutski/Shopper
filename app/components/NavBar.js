import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunk } from "../redux/user";

class Navbar extends React.Component {

  render() {
    const isAdmin = this.props.user.isAdmin;
    return (
      <nav>
          {this.props.isLogggedIn ? (
            <div id="navbar">

              <div className="left-side" >
                {/* The navbar will show these links after you log in */}
                <Link to="/">
                  <p className="section-title">Home page</p>
                </Link>
                <Link to="/products">
                  <p className="section-title">View all products</p>
                </Link>
                {!!isAdmin && (
                  <Link to="/users">
                    <p className="section-title">ViewUsers</p>
                  </Link>
                )}
              </div>


              <div className="right-side" >
                <Link to="/cart">
                  <p className="section-title">Cart</p>
                </Link>

                <a href="/" onClick={this.props.handleClick}>
                  Logout
                </a>
              </div>
            </div>
          ) : (
            <div className="loginSignUp" >
              {/* The navbar will show these links before you log in */}


              <Link to="/login">
                <p className="section-title">Login</p>
              </Link>

              <Link to="/signup">
                <p className="section-title">Signup</p>
              </Link>
            </div>

          )}
      </nav>

    );
  }

};
const mapStateToProps = (state) => {
  return {
    isLogggedIn: !!state.user.id,
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logOutThunk())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
