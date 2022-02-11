import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logOutThunk } from "../redux/user";
import { NavLink } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    const isAdmin = this.props.user.isAdmin;
    return (
      <nav className="NV">
        {this.props.isLogggedIn ? (
          <div id="navbar">
            <div className="left-side">
              {/* The navbar will show these links after you log in */}
              <NavLink to="/">
                <p className="section-title">Home page</p>
              </NavLink>
              <NavLink to="/products" activeStyle={{ color: "white" }}>
                <p className="section-title">View all products</p>
              </NavLink>
              {!!isAdmin && (
                <NavLink to="/users" activeStyle={{ color: "white" }}>
                  <p className="section-title">ViewUsers</p>
                </NavLink>
              )}
            </div>

            <div className="right-side">
              <NavLink to="/cart" activeStyle={{ color: "white" }}>
                <p className="section-title">Cart</p>
              </NavLink>

              <a href="/" onClick={this.props.handleClick}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className="loginSignUp">
            {/* The navbar will show these links before you log in */}

            <NavLink to="/login" activeStyle={{ color: "white" }}>
              <p className="section-title">Login</p>
            </NavLink>

            <NavLink to="/signup" activeStyle={{ color: "white" }}>
              <p className="section-title">Signup</p>
            </NavLink>
          </div>
        )}
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLogggedIn: !!state.user.id,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleClick() {
      dispatch(logOutThunk());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
